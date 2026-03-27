import { type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  href?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  href,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
      <div className="bg-red-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
        <Icon className="h-8 w-8 text-red-600 group-hover:text-white transition-colors" />
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>

      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
              <svg
                className="h-4 w-4 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {href && (
        <Link href={href}>
          <Button variant="outline" className="w-full group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600">
            Tudj meg többet
          </Button>
        </Link>
      )}
    </div>
  );
}
