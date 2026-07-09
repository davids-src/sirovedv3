export const gtag = (...args: any[]) => {
  if (typeof window !== 'undefined') {
    (window as any).dataLayer = (window as any).dataLayer || [];
    if (!(window as any).gtag) {
      (window as any).gtag = function () {
        (window as any).dataLayer.push(arguments);
      };
    }
    (window as any).gtag(...args);
  }
};

