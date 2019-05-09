<template>
    <div>
        <social-sharing url="https://www.stopusingfacebook.co"
                        title="A curated list of reasons to stop using Facebook and how to do it."
                        description="A curated list of reasons to stop using Facebook and how to do it."
                        hashtags="StopUsingFacebook"
                        inline-template>
            <div class="columns is-mobile is-multiline">
                <network network="twitter" class="column is-12 social-sharing-item">
                    <button class="button is-fullwidth social-sharing-item-button social-sharing-item-button--tw">
                        <span class="icon">
                            <i class="fab fa-twitter"></i>
                        </span>
                        <span>
                                Share on Twitter
                        </span>
                    </button>
                </network>
                <network network="facebook" class="column is-12 social-sharing-item">
                    <button class="button is-fullwidth social-sharing-item-button social-sharing-item-button--fb">
                        <span class="icon">
                            <i class="fab fa-facebook-f"></i>
                        </span>
                        <span>
                                Share on Facebook
                        </span>
                    </button>
                </network>
                <network network="linkedin" class="column is-12 social-sharing-item">
                    <button class="button is-fullwidth social-sharing-item-button social-sharing-item-button--li">
                        <span class="icon">
                            <i class="fab fa-linkedin-in"></i>
                        </span>
                        <span>
                                Share on LinkedIn
                        </span>
                    </button>
                </network>
                <network network="whatsapp" class="column is-12 social-sharing-item">
                    <button class="button is-fullwidth social-sharing-item-button social-sharing-item-button--wa">
                        <span class="icon">
                            <i class="fab fa-whatsapp"></i>
                        </span>
                        <span>
                                Share on Whatsapp
                        </span>
                    </button>
                </network>
                <network network="email" class="column is-12 social-sharing-item">
                    <button class="button is-fullwidth">
                        <span class="icon">
                            <i class="fa fa-envelope"></i>
                        </span>
                        <span>
                                Share by E-mail
                        </span>
                    </button>
                </network>
            </div>
        </social-sharing>
        <div class="columns is-centered">
            <a href="https://www.producthunt.com/posts/stopusingfacebook-co?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-stopusingfacebook-co"
               target="_blank" rel="nofollow noreferrer noopener column is-narrow"><img
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=153793&theme=light"
                    alt="StopUsingFacebook.co - A curated list of reasons to stop using Facebook and how-to. | Product Hunt Embed"
                    style="width: 250px; height: 45px;" width="250px" height="45px"/></a>
        </div>
    </div>
</template>
<style lang="scss">
    $facebook_color: hsla(222, 47%, 40%, 1); // #365397
    $twitter_color: hsla(198, 100%, 47%, 1); // #00a9f1
    $linkedin_color: hsla(203, 100%, 35%, 1); // #006db3
    $whatsapp_color: #25D366; // #006db3

    .social-sharing-item {
        padding: 0.5rem 0.75rem;

        &-button {
            &--fb {
                background: $facebook_color !important;
            }

            &--tw {
                background: $twitter_color !important;
            }

            &--li {
                background: $linkedin_color !important;
            }

            &--wa {
                background: $whatsapp_color !important;
            }

            color: white !important;
        }


    }


</style>

<script>
    export default {
        name: 'sf-social-sharer-modal'
    }
</script>
