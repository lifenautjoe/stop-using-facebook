<template>
    <div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-end">
                    <a class="navbar-item">
                        what
                    </a>

                    <a class="navbar-item">
                        why
                    </a>
                    <a class="navbar-item">
                        how
                    </a>
                </div>
            </div>
        </nav>
    </div>
</template>


<script>
    export default{
        name: 'sf-navbar'
    }
</script>