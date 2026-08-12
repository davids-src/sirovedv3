import fs from 'fs';
import path from 'path';

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string; // e.g. '2026-08-10'
  author: string;
  category: 'Vagyonvédelem' | 'Kamerarendszerek' | 'Riasztórendszerek' | 'Biztosítói megfelelés' | 'Tűzvédelem' | string;
  coverImage?: string;
  readingTime: number; // minutes
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

function parseFrontmatter(fileContent: string): { data: Record<string, string>; content: string } {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = frontmatterRegex.exec(fileContent);

  if (!match) {
    return { data: {}, content: fileContent };
  }

  const yamlBlock = match[1];
  const content = match[2];
  const data: Record<string, string> = {};

  yamlBlock.split('\n').forEach((line) => {
    const colonIdx = line.indexOf(':');
    if (colonIdx !== -1) {
      const key = line.slice(0, colonIdx).trim();
      let value = line.slice(colonIdx + 1).trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      data[key] = value;
    }
  });

  return { data, content };
}

function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR);
  const now = new Date();

  const posts: BlogPost[] = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(BLOG_DIR, file);
      const rawContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = parseFrontmatter(rawContent);

      const slug = data.slug || file.replace(/\.md$/, '');
      const publishedAt = data.publishedAt || new Date().toISOString().split('T')[0];

      return {
        title: data.title || 'Cím nélkül',
        slug,
        excerpt: data.excerpt || '',
        publishedAt,
        author: data.author || 'SIRO-VÉD Szerkesztőség',
        category: data.category || 'Vagyonvédelem',
        coverImage: data.coverImage,
        readingTime: calculateReadingTime(content),
        content,
      };
    })
    // Filter out posts scheduled for future dates
    .filter((post) => {
      const postDate = new Date(post.publishedAt);
      return postDate <= now;
    })
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(BLOG_DIR)) {
    return null;
  }

  const files = fs.readdirSync(BLOG_DIR);
  const now = new Date();

  for (const file of files) {
    if (!file.endsWith('.md')) continue;

    const filePath = path.join(BLOG_DIR, file);
    const rawContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = parseFrontmatter(rawContent);

    const postSlug = data.slug || file.replace(/\.md$/, '');
    if (postSlug === slug) {
      const publishedAt = data.publishedAt || new Date().toISOString().split('T')[0];
      const postDate = new Date(publishedAt);

      // 404 for future scheduled posts
      if (postDate > now) {
        return null;
      }

      return {
        title: data.title || 'Cím nélkül',
        slug: postSlug,
        excerpt: data.excerpt || '',
        publishedAt,
        author: data.author || 'SIRO-VÉD Szerkesztőség',
        category: data.category || 'Vagyonvédelem',
        coverImage: data.coverImage,
        readingTime: calculateReadingTime(content),
        content,
      };
    }
  }

  return null;
}
