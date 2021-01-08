<script lang="ts">
    import { moves } from '$components/moves';
    import Board from '$components/Board.svelte';
</script>

<p>Go board</p>
<Board {moves}/>
<ul>
{#each moves as move}
    <li>{move}</li>
{/each}
</ul>