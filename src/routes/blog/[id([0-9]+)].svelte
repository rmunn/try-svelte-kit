<script context="module">
    export async function load({page: {params, query}}) {
        // Query is available for accessing the foo=bar part of /blog/123?foo=bar
        const { id } = params;
        return { props: { id } };
    }
</script>

<script>
    export let id;
</script>

<p>Blog entry {id} can go here</p>