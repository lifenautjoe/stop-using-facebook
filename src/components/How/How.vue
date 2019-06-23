<template>
    <section class="container" id="how">
        <h2 class="is-size-2">
            <strong>{{ $t('how.title') }}</strong>
        </h2>
        <div class="hows">
            <div v-for="how in hows" class="how has-text-left">
                <h4 class="is-size-3 how-title is-size-4-mobile">
                    {{how.title}}
                </h4>
                <div class="columns is-mobile is-multiline">
                    <sf-product class="column is-6-mobile is-3-tablet is-3-desktop" v-for="item in how.what"
                                :name="item.name" :image="item.image" :url="item.url"
                                v-bind:key="item.name"></sf-product>
                </div>
                <img :src="how.what.image" :alt="how.what.name" class="how-what__img">
                <h4 class="is-size-3 how-title is-size-4-mobile">
                    {{ $t('how.with') }}
                </h4>
                <div class="columns is-mobile is-multiline">
                    <sf-product class="column is-12-mobile is-4-tablet is-4-desktop how-replace-with"
                                v-for="alternative in how.alternatives" :name="alternative.name"
                                :image="alternative.image" :url="alternative.url" :description="alternative.description"
                                v-bind:key="alternative.name"></sf-product>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .hows {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    }


    .how {
        position: relative;
        max-width: 800px;
        padding: 1rem;

        &-title {
            padding-bottom: 1em;
        }

        &-what {
            &__img {
                max-width: 400px;
            }
        }

        &-replace-with {
            min-height: 300px;
        }
    }
</style>

<script>
    import signalLogo from './assets/signal-300x300.png';
    import telegramLogo from './assets/Telegram-300x300.png';
    import zomLogo from './assets/zom-300x300.png';
    import wireLogo from './assets/wire_logo.png';
    import riotLogo from './assets/riotim-300x300.jpg';
    import fbLogo from './assets/fb_logo.png';
    import waLogo from './assets/wa_logo.png';
    import messengerLogo from './assets/messenger.png';
    import instagramLogo from './assets/instagram_logo.png';
    import mastodonLogo from './assets/mastodon-300x300.png';
    import friendicaLogo from './assets/friendica-300x300.png';
    import diaspora from './assets/diaspora-300x300.png';
    import pixelFed from './assets/pixelfed-300x300.png';
    import openbookLogo from './assets/Openbook-300x300.png';
    import oculusLogo from './assets/oculus_logo.png';
    import viveLogo from './assets/vive_logo.png';
    import playstationVrLogo from './assets/psvr_logo.png';
    import tookapicLogo from './assets/Tookapic-300x300.png';
    import SfProduct from "./components/Product";


    export default {
        name: 'sf-how',
        components: {SfProduct},
        data() {
            return {
                'hows': [
                    {
                        title: this.$t('how.replace.social'),
                        what: [
                            {
                                name: 'Facebook',
                                image: fbLogo,
                                url: 'https://facebook.com',
                            },
                            {
                                name: 'Instagram',
                                image: instagramLogo,
                                url: 'https://instagram.com',
                            }
                        ],
                        alternatives: [
                            {
                                name: 'Mastodon',
                                description: this.$t('how.descriptions.social.mastodon'),
                                image: mastodonLogo,
                                url: 'https://joinmastodon.org/'
                            },
                            {
                                name: 'Friendica',
                                description: this.$t('how.descriptions.social.friendica'),
                                image: friendicaLogo,
                                url: 'https://friendi.ca/'
                            },
                            {
                                name: 'Diaspora',
                                description: this.$t('how.descriptions.social.diaspora'),
                                image: diaspora,
                                url: 'https://joindiaspora.com/'
                            },
                            {
                                name: 'Pixelfed',
                                description: this.$t('how.descriptions.social.pixelfed'),
                                image: pixelFed,
                                url: 'https://pixelfed.social/'
                            },
                            {
                                name: 'Tookapic',
                                description: this.$t('how.descriptions.social.tookapic'),
                                image: tookapicLogo,
                                url: 'https://tookapic.com/'
                            },
                            {
                                name: 'Openspace',
                                description: this.$t('how.descriptions.social.openspace'),
                                image: openbookLogo,
                                url: 'https://openbook.social'
                            },
                        ],
                    },
                    {
                        title: this.$t('how.replace.messaging'),
                        what: [
                            {
                                name: 'Whatsapp',
                                image: waLogo,
                                url: 'https://whatsapp.com',
                            },
                            {
                                name: 'Messenger',
                                image: messengerLogo,
                                url: 'https://messenger.com',
                            },
                        ],
                        alternatives: [
                            {
                                name: 'Signal',
                                description: this.$t('how.descriptions.messaging.signal'),
                                image: signalLogo,
                                url: 'https://signal.org/'
                            },
                            {
                                name: 'Telegram',
                                description: this.$t('how.descriptions.messaging.telegram'),
                                image: telegramLogo,
                                url: 'https://telegram.org/'
                            },
                            {
                                name: 'Wire',
                                description: this.$t('how.descriptions.messaging.wire'),
                                image: wireLogo,
                                url: 'https://wire.com/'
                            },
                            {
                                name: 'Zom',
                                description: this.$t('how.descriptions.messaging.zom'),
                                image: zomLogo,
                                url: 'https://zom.im/'
                            },
                            {
                                name: 'Riot.im',
                                description: this.$t('how.descriptions.messaging.riot'),
                                image: riotLogo,
                                url: 'https://about.riot.im/'
                            },
                        ],
                    },
                    {
                        title: this.$t('how.replace.vr'),
                        what: [
                            {
                                name: 'Oculus',
                                image: oculusLogo,
                                url: 'https://www.oculus.com/',
                            },
                        ],
                        alternatives: [
                            {
                                name: 'HTC Vive',
                                description: this.$t('how.descriptions.vr.htcvive'),
                                image: viveLogo,
                                url: 'https://www.vive.com'
                            },
                            {
                                name: 'Playstation VR',
                                description: this.$t('how.descriptions.vr.playstationvr'),
                                image: playstationVrLogo,
                                url: 'https://www.playstation.com/en-ae/explore/playstation-vr/'
                            },
                        ],
                    },
                ]
            }
        }
    }
</script>
