<!--Add this line to your web component-->
<svelte:options customElement="my-counter" />

<script lang="ts">
  import ReserveButton from "./ReserveButton.svelte";

  export let name: string;

  let open = false;
</script>

{#if open}
  <div>I am open: {name}</div>
{:else}
  <ReserveButton on:click={() => (open = true)} />
{/if}

<style>
  div {
    background-color: red;
  }
</style>
