<template>
    <section class="container" id="how">
        <h2 class="is-size-2">
            <strong>How?</strong>
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
                    with
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
                        title: 'Replace the social apps',
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
                                description: 'With millions of users, Mastadon is the most popular alternative social network',
                                image: mastodonLogo,
                                url: 'https://joinmastodon.org/'
                            },
                            {
                                name: 'Friendica',
                                description: 'A Facebook-style social network with no central ownership',
                                image: friendicaLogo,
                                url: 'https://friendi.ca/'
                            },
                            {
                                name: 'Diaspora',
                                description: 'Facebook alternative based on the principles of decentralisation, freedom and privacy',
                                image: diaspora,
                                url: 'https://joindiaspora.com/'
                            },
                            {
                                name: 'Pixelfed',
                                description: 'Ad-free photo sharing app with chronological timeline.',
                                image: pixelFed,
                                url: 'https://pixelfed.social/'
                            },
                            {
                                name: 'Tookapic',
                                description: '365-day photo-sharing platform that encourages you to be thankful for beautiful, ordinary days.',
                                image: tookapicLogo,
                                url: 'https://tookapic.com/'
                            },
                            {
                                name: 'Openbook',
                                description: 'Privacy-friendly, transparent and community-driven social network.',
                                image: openbookLogo,
                                url: 'https://zotlabs.com/zap/'
                            },
                        ],
                    },
                    {
                        title: 'Replace the messaging apps',
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
                                description: 'Open-source text, voice and video messaging app supported entirely by grants and donations',
                                image: signalLogo,
                                url: 'https://signal.org/'
                            },
                            {
                                name: 'Telegram',
                                description: 'Fast and secure cloud-based messaging',
                                image: telegramLogo,
                                url: 'https://telegram.org/'
                            },
                            {
                                name: 'Zom',
                                description: 'Open-source messenger app created by a group of friends with an interest in Tibetan culture',
                                image: zomLogo,
                                url: 'https://zom.im/'
                            },
                        ],
                    },
                    {
                        title: 'Replace the VR ecosystem',
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
                                description: 'Virtual reality ecosystem by HTC & Valve.',
                                image: viveLogo,
                                url: 'https://www.vive.com'
                            },
                            {
                                name: 'Playstation VR',
                                description: 'Virtual reality ecosystem by Sony on the PlayStation.',
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