<script lang="ts">
    export let move: [number, number];
    $: x = move[0] * 22 - 12;
    $: y = move[1] * 22 - 12;
    // TODO: Play around with those positions a bit
    $: cssStyle = `position: absolute; top: ${y}px; left: ${x}px`
    // TODO: Instead of an X, draw a black or white circle
</script>

<div style={cssStyle}>X</div>
