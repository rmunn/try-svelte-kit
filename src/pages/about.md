# About

Here is some *italic* text. **Bold** of you to assume it will be rendered! **Muahahaha!!**

Can you _count_ on **this** working?

<Counter/>

Well, well, well. You can!

Here's a gravater for my email (hopefully):

<Gravatar email="rmunn@pobox.com" size={256}/>

And here is a slot for other text:

<slot></slot>

Now let's see what the containing page put in here.

And I can have parameters in my Markdown, too!
The containing page gave us {param} as a parameter.

<script>
    import Counter from '$components/Counter.svelte';
    import Gravatar from '$components/Gravatar.svelte';

    export let param;
</script>