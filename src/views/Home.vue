<template>
    <div class="home">
        <sf-what></sf-what>
        <sf-why></sf-why>
    </div>
</template>

<script>
    // @ is an alias to /src
    import SfWhat from "../components/What";
    import SfWhy from "../components/Why/Why";

    export default {
        name: 'home',
        components: {
            SfWhy,
            SfWhat,
        }
    }
</script>
