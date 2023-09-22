<script lang="ts">
</script>

<button on:click><span>Reserveren</span></button>

<style>
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  button {
    all: unset;

    font-size: large;
    font-weight: 500;

    background-color: rgb(0, 108, 228);
    padding: 0.25em 1.5em;
    position: fixed;
    right: 4px;
    top: 70%;
    cursor: pointer;
    border-radius: 4px;
    height: 54px;

    transition: 0.12s cubic-bezier(0.2, 0, 0.4, 0.8);
    transition-property: background-color;

    font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    color: #fff;

    animation: appear 0.25s ease-in-out;
    animation-fill-mode: both;
  }

  button:hover,
  button:focus,
  button:active {
    background-color: rgb(0, 59, 149);
  }

  button:focus {
    outline: revert;
  }
</style>
