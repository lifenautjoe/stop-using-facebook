<template>
    <div v-show="visible" class="scroll-hud">
        <sf-social-sharer></sf-social-sharer>
        <sf-scroll-to-top></sf-scroll-to-top>
    </div>
</template>

<style lang="scss">
    .scroll-hud{
        position: fixed;
        bottom: 0;
        left:0;
        right:0;
    }
</style>

<script>
    import debounce from 'lodash.debounce';
    import SfSocialSharer from "./components/SocialSharer/SocialSharer";
    import SfScrollToTop from "./components/ScrollToTop";

    export default {
        components: {
            SfScrollToTop,
            SfSocialSharer
        },
        name: 'sf-scroll-hud',
        data() {
            return {
                visible: false,
                visibleOffset: 600,
                scrollDebounce: 10
            }
        },
        mounted() {
            this.debouncedOnScroll = debounce(this.onScroll, this.scrollDebounce);
            window.addEventListener('scroll', this.debouncedOnScroll);

            // Bootstrap
            this.onScroll();
        },
        destroyed() {
            window.removeEventListener('scroll', this.debouncedOnScroll);
        },
        methods: {
            onScroll() {
                this.visible = (window.pageYOffset > this.visibleOffset);
            }
        }
    }
</script>
