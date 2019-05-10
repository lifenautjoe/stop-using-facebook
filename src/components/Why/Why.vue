<template>
    <section class="container" id="why">
        <h2 class="is-size-2">
            <strong>Why?</strong>
        </h2>
        <ul class="reasons">
            <li v-for="reason in reasons" class="has-text-left reason">
                <a :href="reason.source" target="_blank" rel="nofollow noopener noreferer"
                   class="is-size-3 is-size-5-mobile reason__link">
                    {{reason.reason}}

                    <p class="is-size-5" style="padding-top: 1em">
                        Source <i class="fas fa-chevron-right fa-xs"></i>
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
                        reason: 'Because Facebook is lobbying against privacy laws, globally.',
                        source: 'https://www.theguardian.com/technology/2019/mar/02/facebook-global-lobbying-campaign-against-data-privacy-laws-investment'
                    },
                    {
                        reason: 'Because Facebook was covertly paying teens 13 years old and older to spy on them.',
                        source: 'https://techcrunch.com/2019/01/29/facebook-project-atlas/'
                    },
                    {
                        reason: 'Because Facebook gave exclusive access to your private messages and friends to large tech companies, device vendors, retailers, entertainment sites, automakers and media organizations.',
                        source: 'https://www.nytimes.com/2018/12/18/technology/facebook-privacy.html',
                    },
                    {
                        reason: 'Because Facebook facilitated Brexit by spreading misinformation, made a fortune and tried to sue to prevent people from finding out.',
                        source: 'https://www.ted.com/talks/carole_cadwalladr_facebook_s_role_in_brexit_and_the_threat_to_democracy'
                    },
                    {
                        reason: 'Because Facebook hired climate change deniers as fact-checkers.',
                        source: 'https://www.ecowatch.com/facebook-factchecking-science-climate-denial-2635927165.html',
                    },
                    {
                        reason: 'Because Facebook stole 1.5 million people’s email contacts after asking them for their email passwords.',
                        source: 'https://www.businessinsider.nl/facebook-uploaded-1-5-million-users-email-contacts-without-permission-2019-4/?international=true&r=US'
                    },
                    {
                        reason: 'Because Facebook took the phone number you gave them for "security" reasons and then used it for advertising.',
                        source: 'https://www.theguardian.com/technology/2019/mar/04/facebook-faces-backlash-over-users-safety-phone-numbers'
                    },
                    {
                        reason: 'Because Facebook keeps all videos you upload, even when you "delete" them.',
                        source: 'https://web.archive.org/web/20180328205320/http://nymag.com/selectall/2018/03/facebook-secretly-saved-videos-users-deleted.html'
                    },
                    {
                        reason: 'Because Facebook is experimenting manipulating your emotions by showing you specific content.',
                        source: 'https://www.theatlantic.com/technology/archive/2014/06/everything-we-know-about-facebooks-secret-mood-manipulation-experiment/373648/'
                    },
                    {
                        reason: 'Because Facebook employees are reading your private messages one by one to train Facebook’s artificial intelligence.',
                        source: 'https://www.theverge.com/2019/5/6/18530887/facebook-instagram-ai-data-labeling-annotation-private-posts-outsourced'
                    },
                    {
                        reason: 'Because Facebook plan to fuse Instagram, Facebook and Whatsapp is not about your privacy, It’s about consolidating all the data they have on you.',
                        source: 'https://onezero.medium.com/facebooks-plan-to-fuse-its-messaging-apps-is-not-about-your-privacy-91c237e50c17'
                    },
                    {
                        reason: 'Because Facebook updated an old press release with information that millions of passwords of instagram accounts had been compromised while the Mueller report was being released in order to avoid criticism and scrutiny.',
                        source: 'https://edition.cnn.com/2019/04/18/tech/facebook-news-dump/index.html'
                    },
                    {
                        reason: 'Because Facebook hired the author of the PATRIOT act, the most significant threats to civil liberties, privacy, and democratic traditions in US history, as general counsel.',
                        source: 'https://observer.com/2019/04/facebook-jennifer-newstead-general-counsel-patriot-act/\n',
                    },
                    {
                        reason: 'Because Facebook employees say “F*ck ethics, money is everything”. ',
                        source: 'https://mashable.com/article/facebook-employees-react-teen-spying-app-blind/',
                    },
                    {
                        reason: 'Because Facebook not only knows conspiracy theories are being spread on the platform, they make a fortune out of it.',
                        source: 'https://twitter.com/WolfieChristl/status/1058503379377381376',
                    },
                    {
                        reason: 'Because Facebook doesn’t want you to know the reason you see certain ads, just pretends it does.',
                        source: 'https://twitter.com/faye_lipson/status/1123145814778494976'
                    },
                ]
            }
        }
    }
</script>
