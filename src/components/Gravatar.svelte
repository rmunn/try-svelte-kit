<script lang="ts">
    import md5 from 'blueimp-md5/js/md5.min.js';
    export let email : string;
    export let fallback : string = "monsterid";
    export let size : number;
    export let rating : string;

    let queryParams : string;

    $: hash = md5(email.trim().toLowerCase());
    $: {
        let parts = [];
        if (fallback) parts.push(`d=${fallback}`);
        if (size) parts.push(`s=${size}`);
        if (rating) parts.push(`r=${rating}`);
        if (parts.length) queryParams = `?${parts.join('&')}`;
    }
    $: gravatar = `https://www.gravatar.com/avatar/${hash}${queryParams}`
</script>

<img src={gravatar} alt="Avatar for {email}" width={size} height={size}>
