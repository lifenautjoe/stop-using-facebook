<template>
    <div class="container">
        <h2 class="is-size-2">
            <strong>Why?</strong>
        </h2>
        <ul class="whys">
            <li v-for="why in whys" class="has-text-left why">
                <a :href="why.source" class="is-size-3 why__link">
                    {{why.why}}
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
    .whys {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        padding-left: 5rem;
    }

    .why {
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

        &:hover,&:focus{
            text-decoration: underline;
            text-decoration-color: #1568e0;
        }

        &__link{
            color:black;
        }
    }
</style>

<script>

    export default {
        name: 'sf-why',
        data() {
            return {
                'whys': [
                    {
                        why: 'Because Facebook stole 1.5 million people’s email contacts by “mistake” after asking users for their email passwords.',
                        source: 'https://www.businessinsider.nl/facebook-uploaded-1-5-million-users-email-contacts-without-permission-2019-4/?international=true&r=US'
                    },
                    {
                        why: 'Because Facebook is lobbying against privacy laws, globally.',
                        source: 'https://www.theguardian.com/technology/2019/mar/02/facebook-global-lobbying-campaign-against-data-privacy-laws-investment?CMP=share_btn_tw'
                    },
                    {
                        why: 'Because Facebook was covertly paying teens 13 years old and older to spy on them.',
                        source: 'https://techcrunch.com/2019/01/29/facebook-project-atlas/'
                    },
                    {
                        why: 'Because Facebook gave exclusive access to your private messages and friends to large tech companies, device vendors, retailers, entertainment sites, automakers and media organizations.',
                        source: 'https://www.nytimes.com/2018/12/18/technology/facebook-privacy.html',
                    },
                    {
                        why: 'Because Facebook facilitated Brexit by spreading misinformation, made a fortune and tried to sue to prevent people from finding out.',
                        source: 'https://www.ted.com/talks/carole_cadwalladr_facebook_s_role_in_brexit_and_the_threat_to_democracy?utm_source=twitter.com&utm_medium=social&utm_campaign=tedspread'
                    },
                    {
                        why: 'Because Facebook hires climate change deniers as fact-checkers.',
                        source: '',
                    },
                    {
                        why: 'Because Facebook employees say “F*ck ethics, money is everything”. ',
                        source: 'https://mashable.com/article/facebook-employees-react-teen-spying-app-blind/',
                    },
                    {
                        why: 'Because Facebook employees are reading your private messages one by one to train Facebook’s artificial intelligence.',
                        source: 'https://www.theverge.com/2019/5/6/18530887/facebook-instagram-ai-data-labeling-annotation-private-posts-outsourced'
                    },
                    {
                        why: 'Because Facebook plan to fuse Instagram, Facebook and Whatsapp is not about your privacy, It’s about consolidating all the data they have on you.',
                        source: 'https://onezero.medium.com/facebooks-plan-to-fuse-its-messaging-apps-is-not-about-your-privacy-91c237e50c17'
                    },
                    {
                        why: 'Because Facebook not only knows conspiracy theories are being spread on the platform, they make a fortune out of it.',
                        source: 'https://twitter.com/WolfieChristl/status/1058503379377381376',
                    },
                    {
                        why: 'Because Facebook doesn’t like you knowing why are you seeing certain ads too much.',
                        source: 'https://twitter.com/faye_lipson/status/1123145814778494976'
                    },
                    {
                        why: 'Because Facebook updated an old press release with information that millions of passwords of instagram accounts had been compromised while the Mueller report was being released in order to avoid criticism and scrutiny.',
                        source: 'https://edition.cnn.com/2019/04/18/tech/facebook-news-dump/index.html'
                    },
                    {
                        why: 'Because Facebook hired the author of the PATRIOT act, the most significant threats to civil liberties, privacy, and democratic traditions in US history, as general counsel.',
                        source: 'https://observer.com/2019/04/facebook-jennifer-newstead-general-counsel-patriot-act/\n',
                    },
                ]
            }
        }
    }
</script>