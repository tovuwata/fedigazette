<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import '@unocss/reset/tailwind.css';
  import '@fontsource/roboto';
  import '@fontsource/noto-sans-jp';
  import '@fontsource/noto-emoji';
  import '../app.scss';
  import Meta from '$components/Meta.svelte';

  let HeaderComponent: typeof SvelteComponent | null = null;
  let FooterComponent: typeof SvelteComponent | null = null;
  let AdsComponent: typeof SvelteComponent | null = null;

  import('$components/Header.svelte').then((module) => {
    HeaderComponent = module.default as typeof SvelteComponent;
  });

  import('$components/Footer.svelte').then((module) => {
    FooterComponent = module.default as typeof SvelteComponent;
  });

  import('$components/Ads.svelte').then((module) => {
    AdsComponent = module.default as typeof SvelteComponent;
  });
</script>

<div class="pt-16 dark:bg-gray-900 dark:text-white">
  {#if HeaderComponent}
    <svelte:component this={HeaderComponent} />
  {/if}
  <div class="min-h-[calc(100vh-4rem)]">
    <slot />
    {#if AdsComponent}
      <svelte:component this={FooterComponent} />
    {/if}
    <Meta />
    {#if FooterComponent}
      <svelte:component this={FooterComponent} />
    {/if}
  </div>
</div>
