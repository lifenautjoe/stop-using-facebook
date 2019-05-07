
<template>
    <section class="hero is-large stop-facebook">
        <div class="hero-body">
            <div class="container">
                <h1 class="is-size-1">
                    <strong>Boycott <span class="facebook-highlight">Facebook</span>.</strong>
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

    .facebook-highlight{
        background-color: #1568e0;
        color: white;

        &:hover,&:focus{
            color: white;
            background-color: red;
        }
    }
</style>

<script>
    export default{
        name: 'sf-what'
    }
</script>