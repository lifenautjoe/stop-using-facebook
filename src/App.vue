<template>
    <div id="app">
        <div v-if="isI18nLoaded">
            <sf-navbar></sf-navbar>
            <router-view/>
            <sf-footer></sf-footer>
            <sf-scroll-hud></sf-scroll-hud>
        </div>
        <div v-else-if="isI18nErrored">Something went wrong...</div>
        <div v-else>Loading...</div>
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
    // import { mapGetters } from 'vuex';
    // transform-object-rest-spread does not work properly with the current
    // config for some reason, so we'll have to do it the old-fashioned way
    // to support Microsoft Edge. Webpack/babel-loader probably doesn't
    // convert the spread operator to regular key-value props

    export default {
        components: {SfScrollHud, SfFooter, SfNavbar},
        computed: {
            isI18nLoaded: function () {
                return this.$store.getters.isI18nLoaded;
            },
            isI18nErrored: function () {
                return this.$store.getters.isI18nErrored;
            }
        }
    }
</script>