<script lang="ts">
    import Five from "$pages/5x5.png";
    import Move from "$components/Move.svelte";
    let size : number = 5;

    export let moves : [number,number][];
</script>

<div class="transition-container">
    <img src={Five}/>
{#each moves as move}
    <Move {move}/>
{/each}
</div>

<style>
  .transition-container {
    display: grid;
    template-grid-rows: 1;
    template-grid-columns: 1;
    position: relative;
  }

  .transition-container * {
    display: block;
    grid-row: 1;
    grid-column: 1;
  }
</style>