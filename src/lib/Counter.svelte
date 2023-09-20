<svelte:options tag="counter-lib" />

<script lang="ts">
  let count: number = 0;
  const increment = () => {
    count += 1;
  };
</script>

<aside>
  <button on:click={increment}>
    Clicks: {count}
  </button>
</aside>

<style>
  aside {
    background-color: #ff3e00;
    padding: 4px;
  }
</style>
