<script lang="ts">
  import { base } from '$app/paths';
  import SimpleIconsBluesky from '~icons/simple-icons/bluesky';
  import SimpleIconsGithub from '~icons/simple-icons/github';
  import SimpleIconsInstagram from '~icons/simple-icons/instagram';
  import SimpleIconsMastodon from '~icons/simple-icons/mastodon';
  import SimpleIconsMisskey from '~icons/simple-icons/misskey';
  import SimpleIconsThreads from '~icons/simple-icons/threads';
  import SimpleIconsX from '~icons/simple-icons/x';
  import SimpleIconsPeertube from '~icons/simple-icons/peertube';
  import SimpleIconsYoutube from '~icons/simple-icons/youtube';
  import SimpleIconsZenn from '~icons/simple-icons/zenn';
  import MdiRss from '~icons/mdi/rss';
</script>

<footer class="p-8 text-center bg-gray-200 dark:bg-gray-800">
  <div class="mb-8">
    <h1 class="animate-bounce h2">フォローする</h1>
    <div class="mb-4">
      <h2 class="h3">当サービス</h2>
      <div class="flex flex-wrap gap-4 justify-center">
        <a
          href="https://misskey.io/@tovuwata"
          target="_blank"
          class="w-12 h-12 text-misskey dark:text-dark-misskey"
          aria-label="Misskeyでフォロー"
        >
          <SimpleIconsMisskey class="w-full h-full" />
        </a>
        <a
          href="https://tovuwata.bsky.social"
          target="_blank"
          class="w-12 h-12 text-bluesky dark:text-dark-bluesky"
          aria-label="Blueskyでフォロー"
        >
          <SimpleIconsBluesky class="w-full h-full" />
        </a>
        <a
          href="{base}/news/rss.xml"
          target="_blank"
          class="w-12 h-12 text-rss dark:text-dark-rss"
          aria-label="RSSフィード"
        >
          <MdiRss class="w-full h-full" />
        </a>
      </div>
    </div>
    <div class="mb-4">
      <h2 class="h3">Tovuwataグループ</h2>
      <div class="flex flex-wrap gap-4 justify-center">
        <a
          href="https://misskey.io/@tovuwata"
          target="_blank"
          class="w-12 h-12 text-misskey dark:text-dark-misskey"
          aria-label="Misskeyでフォロー"
        >
          <SimpleIconsMisskey class="w-full h-full" />
        </a>
        <a
          href="https://fedimovie.com/c/tovuwata"
          target="_blank"
          class="w-12 h-12 text-peertube dark:text-dark-peertube"
          aria-label="PeerTubeでフォロー"
        >
          <SimpleIconsPeertube class="w-full h-full" />
        </a>
        <a
          href="https://tovuwata.bsky.social"
          target="_blank"
          class="w-12 h-12 text-bluesky dark:text-dark-bluesky"
          aria-label="Blueskyでフォロー"
        >
          <SimpleIconsBluesky class="w-full h-full" />
        </a>
        <a
          href="https://fedibird.com/@tovuwata"
          target="_blank"
          class="w-12 h-12 text-mastodon dark:text-dark-mastodon"
          aria-label="Mastodonでフォロー"
        >
          <SimpleIconsMastodon class="w-full h-full" />
        </a>
        <a
          href="https://x.com/tovuwata"
          target="_blank"
          class="w-12 h-12 text-x dark:text-dark-x"
          aria-label="Xでフォロー"
        >
          <SimpleIconsX class="w-full h-full" />
        </a>
        <a
          href="https://zenn.dev/p/tovuwata"
          target="_blank"
          class="w-12 h-12 text-zenn dark:text-dark-zenn"
          aria-label="Zennでフォロー"
        >
          <SimpleIconsZenn class="w-full h-full" />
        </a>
        <a
          href="https://github.com/tovuwata"
          target="_blank"
          class="w-12 h-12 text-github dark:text-dark-github"
          aria-label="GitHubでフォロー"
        >
          <SimpleIconsGithub class="w-full h-full" />
        </a>
        <a
          href="https://threads.net/tovuwata"
          target="_blank"
          class="w-12 h-12 text-threads dark:text-dark-threads"
          aria-label="Threadsでフォロー"
        >
          <SimpleIconsThreads class="w-full h-full" />
        </a>
        <a
          href="https://instagram.com/tovuwata"
          target="_blank"
          class="w-12 h-12 text-instagram dark:text-dark-instagram"
          aria-label="Instagramでフォロー"
        >
          <SimpleIconsInstagram class="w-full h-full" />
        </a>
        <a
          href="https://youtube.com/@tovuwata"
          target="_blank"
          class="w-12 h-12 text-youtube dark:text-dark-youtube"
          aria-label="YouTubeでフォロー"
        >
          <SimpleIconsYoutube class="w-full h-full" />
        </a>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <div>
      <h2 class="text-2xl">スポンサー</h2>
      <ul class="space-y-4"></ul>
    </div>

    <div>
      <ul class="m-4 space-y-4">
        <li>
          <a href="{base}/sponsor">スポンサーになる</a>
        </li>
        <li>
          <a href="{base}/donate">寄付をする</a>
        </li>
      </ul>
      <img
        src="https://github.com/tovuwata/logo/raw/main/logo_full.svg"
        alt="ロゴ"
        class="mx-auto w-1/2"
        loading="lazy"
      />
      <p class="mt-4 text-xl">
        このサービスは Tovuwata によって運営されています。
      </p>
    </div>
  </div>

  <div class="mt-8">
    <p>&copy; 2024 Tovuwata All rights reserved.</p>
  </div>
</footer>
