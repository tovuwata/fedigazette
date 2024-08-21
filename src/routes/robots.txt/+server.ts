import { baseUrl } from '$lib/config';

export async function GET() {
  const robotstxt = `Sitemap: ${baseUrl}/sitemap.xml`;

  return new Response(robotstxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}

export const prerender = true;
