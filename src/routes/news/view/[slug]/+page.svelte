<script lang="ts">
  import { onMount, SvelteComponent } from 'svelte';
  import { page } from '$app/stores';

  let content: SvelteComponent | null = null;
  let metadata: {
    title: string;
    date: string;
    description?: string;
    author?: string;
  } | null = null;
  let err: string | null = null;

  onMount(async () => {
    const slug = $page.params.slug;
    try {
      const post = await import(`../../posts/${slug}.svx`);
      content = post.default;
      metadata = post.metadata;
    } catch (err) {
      console.log(err);
      err = '投稿がありません。';
    }
  });
</script>

<section class="section md">
  {#if content && metadata}
    <article>
      <h1>{metadata.title ?? ''}</h1>
      <p>投稿日時: {metadata.date ?? ''}</p>
      <p>ライター: {metadata.author ?? ''}</p>
      <div class="divider"></div>
      <svelte:component this={content} />
    </article>
  {:else if err}
    <p>{err}</p>
  {:else}
    <p>読み込み中...</p>
  {/if}
</section>
