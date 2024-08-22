<script lang="ts">
  import { page } from '$app/stores';
  import { baseUrl } from '$lib/config';
  import { onMount } from 'svelte';
  import { persisted } from 'svelte-persisted-store';
  import MdiContentCopy from '~icons/mdi/content-copy.svelte';
  import MdiPrinter from '~icons/mdi/printer.svelte';
  import MdiShareVariant from '~icons/mdi/share-variant.svelte';
  import SimpleIconsBluesky from '~icons/simple-icons/bluesky.svelte';
  import SimpleIconsHatenabookmark from '~icons/simple-icons/hatenabookmark.svelte';
  import SimpleIconsLine from '~icons/simple-icons/line.svelte';
  import SimpleIconsMastodon from '~icons/simple-icons/mastodon.svelte';
  import SimpleIconsMisskey from '~icons/simple-icons/misskey.svelte';
  import SimpleIconsPocket from '~icons/simple-icons/pocket.svelte';
  import SimpleIconsX from '~icons/simple-icons/x.svelte';

  $: meta = {
    description: $page.data.meta?.description ?? 'Tovuwata FediGazetteのウェブサイトです。',
    image: $page.data.meta?.image ?? 'https://raw.githubusercontent.com/tovuwata/logo/main/ogp.png',
    twitter: $page.data.meta?.twitter ?? 'tovuwata',
    activitypub: $page.data.meta?.activitypub ?? '@fedigazette@misskey.io',
    atproto: $page.data.meta?.atproto ?? '@fedigazette.bsky.social',
    title: $page.data.meta?.title ?? 'Tovuwata FediGazette',
    url: baseUrl + ($page.data.meta?.path ?? '/'),
  };

  const generateTitle = (title: string) => {
    if (title.toLowerCase().includes('tovuwata')) return title;
    return `${title} - Tovuwata FediGazette`;
  };

  let canShareCopy = true;
  let canShareDefault = true;
  let isDarkMode = false;

  const darkMode = persisted('darkMode', false);

  const toggleDarkMode = () => {
    darkMode.update((n) => !n);
  };

  onMount(() => {
    darkMode.subscribe((value) => {
      isDarkMode = value;
    });

    canShareDefault = 'canShare' in navigator;
    canShareCopy = 'clipboard' in navigator;
  });

  const share = (url: string) => {
    window.open(url, '_blank', 'width=500,height=600');
  };

  const sharePrint = () => {
    const dark = isDarkMode;
    if (dark) {
      toggleDarkMode();
    }
    print();
    if (dark) {
      toggleDarkMode();
    }
  };

  const shareCopy = () => {
    navigator.clipboard.writeText(meta.url);
  };

  const shareDefault = () => {
    navigator.share({
      title: meta.title,
      url: meta.url,
      text: meta.description,
    });
  };
</script>

<svelte:head>
  <title>{generateTitle(meta.title)}</title>
  <link
    rel="icon"
    href="https://raw.githubusercontent.com/tovuwata/logo/main/logo_symbol_800x800.png"
  />
  <link
    rel="alternate"
    type="application/rss+xml"
    href="{baseUrl}/news/rss.xml"
    title="ニュースRSSフィード"
  />
  <meta name="image" property="og:image" content={meta.image} />
  <meta name="theme-color" content="#84C98B" />

  <meta property="og:type" content="website" />
  <meta property="og:title" content={generateTitle(meta.title)} />
  <meta property="og:description" content={meta.description} />
  <meta name="description" content={meta.description} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={generateTitle(meta.title)} />
  <meta name="twitter:site" content={meta.twitter} />
  <meta name="twitter:description" content={meta.description} />
  <meta name="twitter:image" content={meta.image} />
</svelte:head>

<section class="m-4 text-center print:hidden">
  <h2 class="animate-bounce h2">共有</h2>
  <div class="flex flex-wrap gap-4 justify-center">
    <button
      aria-label="Misskeyで共有"
      on:click={() =>
        share(
          `https://misskey-hub.net/share?url=${encodeURIComponent(meta.url)}&text=${encodeURIComponent(meta.title + ' ' + meta.description + ' ' + meta.activitypub)}`
        )}
      class="w-8 h-8"
    >
      <SimpleIconsMisskey
        class="w-full h-full text-misskey dark:text-dark-misskey"
      />
    </button>
    <button
      aria-label="Mastodonで共有"
      on:click={() =>
        share(
          `https://mastoshare.net/share?url=${encodeURIComponent(meta.url)}&text=${encodeURIComponent(meta.title + ' ' + meta.description + ' ' + meta.activitypub)}`
        )}
      class="w-8 h-8 text-mastodon dark:text-dark-mastodon"
    >
      <SimpleIconsMastodon class="w-full h-full" />
    </button>
    <button
      aria-label="Blueskyで共有"
      on:click={() =>
        share(
          `https://bsky.app/intent/compose?text=${encodeURIComponent(meta.title + ' ' + meta.description + ' ' + meta.url + ' ' + meta.atproto)}`
        )}
      class="w-8 h-8"
    >
      <SimpleIconsBluesky
        class="w-full h-full text-bluesky dark:text-dark-bluesky"
      />
    </button>
    <button
      aria-label="Xで共有"
      on:click={() =>
        share(
          `https://x.com/intent/post?url=${encodeURIComponent(meta.url)}&text=${encodeURIComponent(meta.title + ' ' + meta.description)}&via=${encodeURIComponent(meta.twitter)}`
        )}
      class="w-8 h-8"
    >
      <SimpleIconsX class="w-full h-full text-x dark:text-dark-x" />
    </button>
    <button
      aria-label="LINEで共有"
      on:click={() =>
        share(
          `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(meta.url)}&text=${encodeURIComponent(meta.title + ' ' + meta.description)}`
        )}
      class="w-8 h-8"
    >
      <SimpleIconsLine class="w-full h-full text-line dark:text-dark-line" />
    </button>
    <button
      aria-label="はてなブックマークで共有"
      on:click={() =>
        share(
          `https://b.hatena.ne.jp/my/add.confirm?url=${encodeURIComponent(meta.url)}`
        )}
      class="w-8 h-8"
    >
      <SimpleIconsHatenabookmark
        class="w-full h-full text-hatena dark:text-dark-hatena"
      />
    </button>
    <button
      aria-label="Pocketで共有"
      on:click={() =>
        share(
          `https://widgets.getpocket.com/v1/popup?url=${encodeURIComponent(meta.url)}`
        )}
      class="w-8 h-8"
    >
      <SimpleIconsPocket
        class="w-full h-full text-pocket dark:text-dark-pocket"
      />
    </button>
    <button aria-label="印刷" on:click={sharePrint} class="w-8 h-8">
      <MdiPrinter class="w-full h-full" />
    </button>
    {#if canShareCopy}
      <button aria-label="URLをコピー" on:click={shareCopy} class="w-8 h-8">
        <MdiContentCopy class="w-full h-full" />
      </button>
    {/if}
    {#if canShareDefault}
      <button aria-label="共有" on:click={shareDefault} class="w-8 h-8">
        <MdiShareVariant class="w-full h-full" />
      </button>
    {/if}
  </div>
</section>
