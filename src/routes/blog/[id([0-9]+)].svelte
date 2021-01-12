<script context="module">
    export async function load({page: {params: { id }}}) {
        return { props: { id } };
    }
</script>

<script>
    export let id;
</script>

<p>Blog entry {id} can go here</p>