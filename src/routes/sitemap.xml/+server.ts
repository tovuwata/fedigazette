import { baseUrl } from '$lib/config';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

interface Metadata {
  date: string;
}

interface Entry {
  metadata: Metadata;
  url: string;
}

export async function GET() {
  const modules = import.meta.glob('../news/posts/*.svx');
  const now = dayjs().toString();
  const entries: Entry[] = [
    {
      metadata: {
        date: now,
      },
      url: '/',
    },
    {
      metadata: {
        date: now,
      },
      url: '/about',
    },
    {
      metadata: {
        date: now,
      },
      url: '/contact',
    },
    {
      metadata: {
        date: now,
      },
      url: '/donate',
    },
    {
      metadata: {
        date: now,
      },
      url: '/news',
    },
    {
      metadata: {
        date: now,
      },
      url: '/policy',
    },
    {
      metadata: {
        date: now,
      },
      url: '/privacy',
    },
    {
      metadata: {
        date: now,
      },
      url: '/sponsor',
    },
    {
      metadata: {
        date: now,
      },
      url: '/terms',
    },
  ];

  for (const path in modules) {
    const module = (await modules[path]()) as { metadata: Metadata };
    const url = `/news/view/${
      path.split('/').pop()?.replace('.svx', '') || ''
    }`;
    entries.push({ metadata: module.metadata, url });
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns=”https://www.sitemaps.org/schemas/sitemap/0.9/”>
  ${entries
    .map(
      (entry) => `<url>
    <loc>${baseUrl}${entry.url}</loc>
    <lastmod>${dayjs(entry.metadata.date).tz('Asia/Tokyo').format('YYYY-MM-DDTHH:mm:ssZ')}</lastmod>
  </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

export const prerender = true;
