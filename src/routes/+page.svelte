<script lang="ts">
  import { base } from '$app/paths';
  import About from './about/About.svelte';
</script>

<main>
  <section
    class="flex justify-center items-center h-[calc(100vh-16*0.25rem)] text-black bg-gradient-to-rb from-secondary to-tertiary"
  >
    <div class="text-center">
      <h1 class="text-5xl font-bold">Tovuwata FediGazette</h1>
      <p class="mt-4 text-2xl">
        分散型SNS（Fediverse）に関する情報を分かりやすく
      </p>
      <a href="{base}/news" class="button">記事を見る</a>
    </div>
  </section>

  <section class="section">
    <About />
    <a href="{base}/about" class="mt-6 button">もっと見る</a>
  </section>
</main>
