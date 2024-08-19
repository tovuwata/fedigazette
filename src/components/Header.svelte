<script lang="ts">
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { persisted } from 'svelte-persisted-store';
  import MdiMenu from '~icons/mdi/menu';

  const isDarkMode = persisted('darkMode', false);

  const toggleDarkMode = () => {
    isDarkMode.update((n) => !n);
  };

  let isMenuOpen = false;

  const menuOpen = () => {
    isMenuOpen = !isMenuOpen;
  };

  onMount(() => {
    isDarkMode.subscribe((value) => {
      if (value) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });
  });
</script>

<svelte:head>
  <link
    rel="preload"
    href="https://github.com/tovuwata/logo/raw/main/logo_full.svg"
    as="image"
  />
</svelte:head>

<header
  class="flex fixed top-0 justify-between items-center p-2 w-full h-16 bg-white bg-opacity-80 shadow backdrop-blur-3xl dark:bg-gray-900 z-97 print:hidden"
>
  <a href="{base}/" class="flex items-center">
    <img
      src="https://github.com/tovuwata/logo/raw/main/logo_full.svg"
      alt="ロゴ"
      class="h-12"
      loading="lazy"
    />
  </a>
  <button on:click={menuOpen} aria-label="メニューを開く">
    <MdiMenu class="w-6 h-6" />
  </button>
</header>

{#if isMenuOpen}
  <button
    class="fixed inset-0 w-full h-full bg-black bg-opacity-50 z-98"
    on:click={menuOpen}
    aria-label="メニューを閉じる"
  ></button>
{/if}

<nav
  class="fixed top-0 left-0 h-full w-80 z-99 bg-white dark:bg-gray-900 bg-opacity-80 backdrop-blur-3xl shadow transform transition-transform duration-300 {isMenuOpen
    ? 'translate-x-0'
    : '-translate-x-full'}"
  aria-hidden={!isMenuOpen}
  aria-label="ナビゲーションメニュー"
>
  <ul class="flex flex-col items-start p-4 space-y-4">
    <li>
      <a href="{base}/" on:click={menuOpen} tabindex={isMenuOpen ? 0 : -1}
        >ホーム</a
      >
    </li>
    <li>
      <a href="{base}/about" on:click={menuOpen} tabindex={isMenuOpen ? 0 : -1}
        >このサイトについて</a
      >
    </li>
    <li>
      <a href="{base}/policy" on:click={menuOpen} tabindex={isMenuOpen ? 0 : -1}
        >運営方針</a
      >
    </li>
    <li>
      <a href="{base}/news" on:click={menuOpen} tabindex={isMenuOpen ? 0 : -1}
        >ニュース</a
      >
    </li>
    <li>
      <a
        href="{base}/sponsor"
        on:click={menuOpen}
        tabindex={isMenuOpen ? 0 : -1}>スポンサーになる</a
      >
    </li>
    <li>
      <a href="{base}/donate" on:click={menuOpen} tabindex={isMenuOpen ? 0 : -1}
        >寄付する</a
      >
    </li>
    <li>
      <a href="{base}/terms" on:click={menuOpen} tabindex={isMenuOpen ? 0 : -1}
        >利用規約</a
      >
    </li>
    <li>
      <a
        href="{base}/privacy"
        on:click={menuOpen}
        tabindex={isMenuOpen ? 0 : -1}>プライバシーポリシー</a
      >
    </li>
    <li>
      <a
        href="{base}/contact"
        on:click={menuOpen}
        tabindex={isMenuOpen ? 0 : -1}>お問い合わせ</a
      >
    </li>
    <li>
      <button
        on:click={() => {
          toggleDarkMode();
          menuOpen();
        }}
        class="block w-full text-left"
        aria-label={$isDarkMode
          ? 'ライトモードに切り替え'
          : 'ダークモードに切り替え'}
        tabindex={isMenuOpen ? 0 : -1}
      >
        {#if $isDarkMode}
          ライトモードに切り替え
        {:else}
          ダークモードに切り替え
        {/if}
      </button>
    </li>
  </ul>
</nav>
