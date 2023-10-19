import type { NextApiRequest, NextApiResponse } from 'next';

type Robots = {
  rules: Array<{
    userAgent: string | string[];
    allow?: string | string[];
    disallow?: string | string[];
    crawlDelay?: number;
  }>;
  sitemap?: string | string[];
  host?: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const robots: Robots = {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/admin', '/private'],
        crawlDelay: 300,
      },
      {
        userAgent: 'SpecificBot',
        allow: ['/public'],
        disallow: ['/private'],
        crawlDelay: 300,
      },
    ],
    sitemap: 'https://alt-era.com/sitemap.xml',
    host: 'https://alt-era.com',
  };

  let robotsTxt = '';

  robots.rules.forEach((rule) => {
    const userAgent = typeof rule.userAgent === 'string' ? rule.userAgent : rule.userAgent?.join(', ');
    const allow = typeof rule.allow === 'string' ? rule.allow : rule.allow?.join(', ');
    const disallow = typeof rule.disallow === 'string' ? rule.disallow : rule.disallow?.join(', ');

    robotsTxt += `User-agent: ${userAgent}\n`;

    if (allow) {
      robotsTxt += `Allow: ${allow}\n`;
    }

    if (disallow) {
      robotsTxt += `Disallow: ${disallow}\n`;
    }

    if (rule.crawlDelay) {
      robotsTxt += `Crawl-delay: ${rule.crawlDelay}\n`;
    }

    robotsTxt += '\n';
  });

  if (robots.sitemap) {
    robotsTxt += `Sitemap: ${robots.sitemap}\n`;
  }

  if (robots.host) {
    robotsTxt += `Host: ${robots.host}\n`;
  }

  res.setHeader('Content-Type', 'text/plain');
  res.send(robotsTxt);
}
