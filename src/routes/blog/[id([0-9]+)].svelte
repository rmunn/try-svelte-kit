<script context="module">
    export async function load({page}) {
        console.log(`Would load blog ID ${page}`, page, page.params);
        const { id } = page.params;
        // const x = {id: page.params.id};
        console.log(id)
        const x = { id };
        console.log(x);
        const p = new Promise(resolve => resolve(x));
        console.log(p);
        return { props: { id: 5, foo: "bar" } };
    }
</script>

<script>
    export let id;
    export let foo;

    console.log("Props:", $$props);
</script>

<p>Blog {id} and {foo}</p>