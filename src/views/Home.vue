<template>
    <div class="home">
        <sf-what></sf-what>
        <sf-why></sf-why>
        <sf-how></sf-how>
    </div>
</template>

<script>
    // @ is an alias to /src
    import SfWhat from "../components/What";
    import SfWhy from "../components/Why/Why";
    import SfHow from "../components/How/How";

    export default {
        name: 'home',
        components: {
            SfHow,
            SfWhy,
            SfWhat,
        }
    }
</script>
