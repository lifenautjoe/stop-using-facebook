<template>
    <div class="home">
        <sf-what></sf-what>
        <sf-why></sf-why>
        <sf-how></sf-how>
        <sf-more></sf-more>
    </div>
</template>

<script>
    // @ is an alias to /src
    import SfWhat from "../components/What";
    import SfWhy from "../components/Why/Why";
    import SfHow from "../components/How/How";
    import SfMore from "../components/More";

    export default {
        name: 'home',
        components: {
            SfMore,
            SfHow,
            SfWhy,
            SfWhat,
        }
    }
</script>
