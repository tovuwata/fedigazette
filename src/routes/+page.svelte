<script lang="ts">
  import { base } from '$app/paths';
  import About from './about/About.svelte';
</script>

<main>
  <section
    class="flex justify-center items-center h-[calc(100vh-16*0.25rem)] text-black bg-gradient-to-rb from-secondary to-tertiary"
  >
    <div class="text-center">
      <h1 class="text-5xl font-bold">
        <br />
      </h1>
      <p class="mt-4 text-2xl"></p>
    </div>
  </section>

  <section class="section">
    <About />
    <a href="{base}/about" class="mt-6 button">もっと見る</a>
  </section>
</main>
