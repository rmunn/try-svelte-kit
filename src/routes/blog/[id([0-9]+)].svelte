<script context="module">
    export async function load(context) {
        console.log(`Page context is`, context);
        const { id } = context.page.params;
        return { props: { id: id } };
    }
</script>

<script>
    export let id;
</script>

<p>Blog entry {id} can go here</p>