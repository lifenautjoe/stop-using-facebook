<template>
    <div class="social-sharer">
        <button class="button animated fadeInUp is-rounded" @click="onUserWantsToShare()">
        <span class="icon">
            <i class="fas fa-share-alt"></i>
        </span>
            <span>
            {{ $t('common.share') }}
        </span>
        </button>
    </div>
</template>

<style lang="scss">

    $button-size: 45px;

    .social-sharer {
        position: absolute !important;
        bottom: 0;
        left: 0;
        height: $button-size !important;
        width: $button-size !important;
        margin: 1rem;
    }
</style>

<script>
    import sfSocialSharerModal from './components/SocialSharerModal.vue';

    export default {
        name: 'sf-social-sharer',
        methods: {
            onUserWantsToShare() {
                this.openShareModal();
            },
            openShareModal() {
                this.$modal.open({
                    parent: this,
                    component: sfSocialSharerModal
                })
            }
        }
    }
</script>
