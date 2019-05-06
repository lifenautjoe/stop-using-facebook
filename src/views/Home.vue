<template>
    <div class="home">
        <sf-what></sf-what>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import SfWhat from "../components/what";

    export default {
        name: 'home',
        components: {
            SfWhat,
            HelloWorld
        }
    }
</script>
