<template>
    <div id="app">
        <sf-navbar></sf-navbar>
        <router-view/>
        <sf-footer></sf-footer>
        <sf-scroll-hud></sf-scroll-hud>
    </div>
</template>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .facebook-highlight {
        background-color: #1568e0;
        color: white;

        &:hover, &:focus {
            color: white;
            background-color: red;
        }
    }

    .facebook-highlight-blue {
        background-color: #1568e0 !important;
        color: white !important;

        &:hover, &:focus {
            color: white !important;
            background-color: #1458b6 !important;
        }
    }
</style>
<script>
    import SfNavbar from "./components/Header";
    import SfFooter from "./components/Footer";
    import SfScrollHud from "./components/ScrollHud/ScrollHud";

    export default {
        components: {SfScrollHud, SfFooter, SfNavbar}
    }
</script>