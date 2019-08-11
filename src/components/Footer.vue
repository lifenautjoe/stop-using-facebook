<template>
    <footer class="hero is-black footer">
        <div class="hero-body">
            <div class="columns">
                <div class="column">
                    <p class="title">
                        {{ $t('what.start') }} <span class="facebook-highlight">{{ $t('what.middle') }}</span>{{ $t('what.end') }}
                    </p>
                </div>
                <div class="column">
                    <div class="content has-text-centered">
                        <p class="is-size-5">
                            <span>{{ $t('footer.projectBy.start') }} </span>
                            <a href="https://twitter.com/lifenautjoe" rel="nofollow noreferrer nofollow"
                               target="_blank">
                                <i class="fab fa-twitter"></i> &nbsp;@lifenautjoe
                            </a>
                            <span>{{ $t('footer.projectBy.end') }}</span>
                        </p>
                    </div>
                    <div class="content">
                        <a href="https://www.producthunt.com/posts/stopusingfacebook-co?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-stopusingfacebook-co"
                           target="_blank"><img
                                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=153793&theme=light"
                                :alt="$t('common.productHuntAlt')"
                                style="width: 250px; height: 45px;" width="250px" height="45px"/></a>
                        <p class="is-size-6 has-text-grey-light">
                            <a href="https://github.com/lifenautjoe/stop-using-facebook" rel="nofollow noreferrer nofollow"
                               target="_blank">
                                <span>{{ $t('footer.contribute') }}</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style>

</style>

<script>
    export default {
        name: 'sf-footer'
    }
</script>