<template>
    <section class="container" id="why">
        <h2 class="is-size-2">
            <strong>{{ $t('why.title') }}</strong>
        </h2>
        <ul class="reasons">
            <li v-for="reason in reasons" class="has-text-left reason">
                <a :href="reason.source" target="_blank" rel="nofollow noopener noreferer"
                   class="is-size-3 is-size-5-mobile reason__link">
                    {{reason.reason}}

                    <p class="is-size-5" style="padding-top: 1em">
                        {{ $t('why.source') }} <i class="fas fa-chevron-right fa-xs"></i>
                    </p>
                </a>
            </li>
            <li>
                <p class="has-text-grey-dark">
                    <i> Last updated 7th of May, 2019.
                    </i>
                </p>
            </li>
        </ul>
    </section>
</template>

<style lang="scss">
    .reasons {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        padding-left: 5rem;
    }

    .reason {
        position: relative;
        max-width: 800px;
        padding: 1rem;

        &:before {
            color: #1568e0;
            /* color of bullet or square */

            content: "\2022";
            /* Unicode of character to precede the list item */

            font-size: 3em;
            /* em or %*/

            /* use em*/

            position: absolute;
            top: 0.1em;
            left: -1em;
            /* use em or % */

        }

        &:hover, &:focus {
            text-decoration: underline;
            text-decoration-color: #1568e0;
        }

        &__link {
            color: black;
        }
    }
</style>

<script>

    export default {
        name: 'sf-reason',
        data() {
            return {
                'reasons': [
                    {
                        reason: this.$t('why.reasons.lobbying'),
                        source: 'https://www.theguardian.com/technology/2019/mar/02/facebook-global-lobbying-campaign-against-data-privacy-laws-investment'
                    },
                    {
                        reason: this.$t('why.reasons.spying'),
                        source: 'https://techcrunch.com/2019/01/29/facebook-project-atlas/'
                    },
                    {
                        reason: this.$t('why.reasons.pm'),
                        source: 'https://www.nytimes.com/2018/12/18/technology/facebook-privacy.html',
                    },
                    {
                        reason: this.$t('why.reasons.brexit'),
                        source: 'https://www.ted.com/talks/carole_cadwalladr_facebook_s_role_in_brexit_and_the_threat_to_democracy'
                    },
                    {
                        reason: this.$t('why.reasons.climate-change-deniers'),
                        source: 'https://www.ecowatch.com/facebook-factchecking-science-climate-denial-2635927165.html',
                    },
                    {
                        reason: this.$t('why.reasons.email-passwords'),
                        source: 'https://www.businessinsider.nl/facebook-uploaded-1-5-million-users-email-contacts-without-permission-2019-4/?international=true&r=US'
                    },
                    {
                        reason: this.$t('why.reasons.phone-advertising'),
                        source: 'https://www.theguardian.com/technology/2019/mar/04/facebook-faces-backlash-over-users-safety-phone-numbers'
                    },
                    {
                        reason: this.$t('why.reasons.keeps-videos'),
                        source: 'https://web.archive.org/web/20180328205320/http://nymag.com/selectall/2018/03/facebook-secretly-saved-videos-users-deleted.html'
                    },
                    {
                        reason: this.$t('why.reasons.emotion-manipulation'),
                        source: 'https://www.theatlantic.com/technology/archive/2014/06/everything-we-know-about-facebooks-secret-mood-manipulation-experiment/373648/'
                    },
                    {
                        reason: this.$t('why.reasons.facebook-ai'),
                        source: 'https://www.theverge.com/2019/5/6/18530887/facebook-instagram-ai-data-labeling-annotation-private-posts-outsourced'
                    },
                    {
                        reason: this.$t('why.reasons.product-fusion'),
                        source: 'https://onezero.medium.com/facebooks-plan-to-fuse-its-messaging-apps-is-not-about-your-privacy-91c237e50c17'
                    },
                    {
                        reason: this.$t('why.reasons.instagram-passwords'),
                        source: 'https://edition.cnn.com/2019/04/18/tech/facebook-news-dump/index.html'
                    },
                    {
                        reason: this.$t('why.reasons.patriot-author'),
                        source: 'https://observer.com/2019/04/facebook-jennifer-newstead-general-counsel-patriot-act/\n',
                    },
                    {
                        reason: this.$t('why.reasons.frick-ethics'),
                        source: 'https://mashable.com/article/facebook-employees-react-teen-spying-app-blind/',
                    },
                    {
                        reason: this.$t('why.reasons.conspiracy-theories'),
                        source: 'https://twitter.com/WolfieChristl/status/1058503379377381376',
                    },
                    {
                        reason: this.$t('why.reasons.targeted-ads'),
                        source: 'https://twitter.com/faye_lipson/status/1123145814778494976'
                    },
                ]
            }
        }
    }
</script>
