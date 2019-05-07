<template>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-menu" id="navbarBasicExample">
                <div class="navbar-end">
                    <a class="navbar-item" href="#what" v-scroll-to="'#what'">
                        what
                    </a>
                    <a class="navbar-item" href="#why" v-scroll-to="'#why'">
                        why
                    </a>
                    <a class="navbar-item" href="#how" v-scroll-to="'#how'">
                        how
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">
    .navbar-menu{
        box-shadow: none !important;
        display: flex !important;
        flex-direction: row-reverse;

        .navbar-end{
            display: flex !important;
        }
    }
</style>

<script>
    export default{
        name: 'sf-navbar'
    }
</script>