
<template>
    <section class="hero is-large stop-facebook" id="what">
        <div class="hero-body">
            <div class="container">
                <h1 class="is-size-1">
                    <strong>{{ $t('what.start') }} <span class="facebook-highlight">{{ $t('what.middle') }}</span>{{ $t('what.end') }}</strong>
                </h1>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

    .stop-facebook{
        background: url('~@/assets/background.png') no-repeat center center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
</style>

<script>
    export default{
        name: 'sf-what'
    }
</script>