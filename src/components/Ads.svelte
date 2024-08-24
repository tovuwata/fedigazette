<script lang="ts">
  import { persisted } from 'svelte-persisted-store';
  import MdiHandBackRight from '~icons/mdi/hand-back-right';

  const isMessageVisible = persisted('adBlockMessageVisible', true);

  const toggleMessageVisible = () => {
    isMessageVisible.update((n) => !n);
  };
</script>

<section class="section"></section>

{#if $isMessageVisible}
  <section class="section">
    <div class="p-4 text-white bg-red-700 rounded">
      <h1 class="flex h1">
        <MdiHandBackRight class="w-9 h-9" />
        運営者からのお願い
      </h1>
      <p class="mt-2 p">
        このウェブサイトをご利用いただいている皆様は、ITに精通された方々が多く、広告ブロッカーをご利用されていることと思います。
        <br />
        そのため、私が掲載している広告やアフィリエイトリンクが表示されず、このサービスを運営するための大切な収益を受け取れなくなってしまいます。
        <br />
        我々は、しつこく不快な広告やアフィリエイトを表示しないよう最大限の努力をしています。
        <br />
        どうか、このサービスの継続と充実のために、広告ブロッカーを解除していただけないでしょうか。
        <br />
        皆様のご理解とご協力を心よりお願い申し上げます。<br />
        <span class="text-base"
          >※
          このメッセージは広告ブロッカーの使用の有無にかかわらずすべての人に表示されています。</span
        >
      </p>
      <button class="button" on:click={toggleMessageVisible}> 閉じる </button>
    </div>
  </section>
{/if}
