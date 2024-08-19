<script lang="ts">
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import MdiNavigateBefore from '~icons/mdi/navigate-before';
  import MdiNavigateNext from '~icons/mdi/navigate-next';
  import { get } from 'svelte/store';
  import dayjs from 'dayjs';
  import relativeTime from 'dayjs/plugin/relativeTime';
  import 'dayjs/locale/ja';

  dayjs.extend(relativeTime);
  dayjs.locale('ja');

  interface PostMetadata {
    title: string;
    image?: string;
    description?: string;
    author?: string;
    date: string;
  }

  interface Post {
    metadata: PostMetadata;
    slug: string;
  }

  let posts: Post[] = [];
  let currentPage = 1;
  const postsPerPage = 5;

  onMount(() => {
    const url = new URL(get(page).url);
    const urlPage = url.searchParams.get('page');
    if (urlPage) {
      currentPage = parseInt(urlPage, 10);
    }

    loadPosts();
  });

  const loadPosts = async () => {
    const modules = import.meta.glob('./posts/*.svx');
    const loadedPosts: Post[] = [];

    for (const path in modules) {
      const module = (await modules[path]()) as { metadata: PostMetadata };
      const slug = path.split('/').pop()?.replace('.svx', '') || '';
      loadedPosts.push({ metadata: module.metadata, slug });
    }

    posts = loadedPosts.sort(
      (a, b) =>
        dayjs(b.metadata.date).valueOf() - dayjs(a.metadata.date).valueOf()
    );
  };

  $: paginatedPosts = (() => {
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    return posts.slice(start, end);
  })();

  const totalPages = () => {
    return Math.ceil(posts.length / postsPerPage);
  };

  const nextPage = () => {
    if (currentPage < totalPages()) {
      currentPage++;
      updateUrl();
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      currentPage--;
      updateUrl();
    }
  };

  const updateUrl = () => {
    goto(`?page=${currentPage}`, { replaceState: true });
  };
</script>

<h1 class="my-4 text-3xl font-bold">ニュース</h1>
<div>
  {#if posts && posts.length > 0}
    <div class="space-y-4">
      {#each paginatedPosts as post}
        <a
          href="{base}/news/view/{post.slug}"
          class="block overflow-hidden bg-white bg-opacity-5 rounded shadow"
        >
          <div class="flex">
            <div class="relative flex-shrink-0 w-64 h-36">
              <img
                src={post.metadata.image ??
                  'https://raw.githubusercontent.com/tovuwata/logo/main/ogp.png'}
                alt="サムネイル"
                class="object-cover w-full h-full"
              />
            </div>
            <div class="p-4 flex-1 w-[calc(100%-16rem)]">
              <h2 class="text-2xl font-semibold truncate">{post.metadata.title}</h2>
              <p class="truncate">{post.metadata.description ?? ''}</p>
              <p class="truncate">{post.metadata.author ?? ''}</p>
              <p class="text-sm truncate">
                {dayjs(post.metadata.date).format('YYYY年MM月DD日')} ({dayjs(
                  post.metadata.date
                ).fromNow()})
              </p>
            </div>
          </div>
        </a>
      {/each}
    </div>
    <div class="flex justify-between items-center mt-4">
      <button
        on:click={previousPage}
        disabled={currentPage <= 1}
        class="button"
      >
        <MdiNavigateBefore />
      </button>
      <span>ページ {currentPage} / {totalPages()}</span>
      <button
        on:click={nextPage}
        disabled={currentPage >= totalPages()}
        class="button"
      >
        <MdiNavigateNext />
      </button>
    </div>
  {:else}
    <p class="text-2xl font-semibold">投稿がありません。</p>
  {/if}
</div>
