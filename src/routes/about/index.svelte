<script>
    import Nav from '$components/Nav.svelte';
    import About from '$pages/about.md';

    let number = 42;
</script>

<main>
    <Nav/>
    <About param={36+2}>
        <p>Inserted {number} into the about page.</p>
    </About>
</main>
