<script context="module">
    export async function load({page, fetch}) {
        const { id } = page.params;
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const json = await response.json();
        console.log('Response', json);
        const { title, body } = json;
        return { props: { id, title, body } };
    }
</script>

<script>
    export let id;
    export let title;
    export let body;
</script>

<p>Blog entry {id} can go here</p>
<p>Title: {title}</p>
<p>Body: {body}</p>