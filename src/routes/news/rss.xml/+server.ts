import { baseUrl } from '$lib/config';
import dayjs from 'dayjs';

interface PostMetadata {
  title: string;
  date: string;
  description?: string;
}

interface Post {
  metadata: PostMetadata;
  slug: string;
}

export async function GET() {
  const modules = import.meta.glob('../posts/*.svx');
  const posts: Post[] = [];

  for (const path in modules) {
    const module = (await modules[path]()) as { metadata: PostMetadata };
    const slug = path.split('/').pop()?.replace('.svx', '') || '';
    posts.push({ metadata: module.metadata, slug });
  }

  const latestPosts = posts
    .sort((a, b) => dayjs(b.metadata.date).valueOf() - dayjs(a.metadata.date).valueOf())
    .slice(0, 10);

  const feed = `
    <rss version="2.0">
      <channel>
        <title>ニュース</title>
        <link>${baseUrl}/news</link>
        <description>ニュースの最新10件の記事一覧です。</description>
        ${latestPosts
          .map(
            (post) => `
          <item>
            <title>${post.metadata.title}</title>
            <link>${baseUrl}/news/view/${post.slug}</link>
            <pubDate>${dayjs(post.metadata.date).toString()}</pubDate>
            <description>${post.metadata.description || ''}</description>
          </item>
        `
          )
          .join('')}
      </channel>
    </rss>
  `;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

export const prerender = true;
