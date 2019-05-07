<template>
    <div id="app">
        <sf-navbar></sf-navbar>
        <router-view/>
        <sf-footer></sf-footer>
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
</style>
<script>
    import SfNavbar from "./components/Header";
    import SfFooter from "./components/Footer";

    export default {
        components: {SfFooter, SfNavbar}
    }
</script>