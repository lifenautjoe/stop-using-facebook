<template>
    <article>
        <div class="card product">
            <a :href="url" target="_blank" rel="nofollow noopener noreferrer">
                <div class="card-image">
                    <figure class="image product-image">
                        <img :src="image" :alt="name">
                    </figure>
                </div>
                <div class="product-content">
                    <h5 v-bind:class="{ 'has-text-centered': !description }">
                        <strong>{{name}}</strong>
                    </h5>
                    <p class="has-text-left product-content__description" v-if="description">
                        {{description}}
                    </p>
                </div>
            </a>
        </div>
    </article>
</template>
<style lang="scss">

    .product{
        min-height: 100%;
        border-radius: 15px;
        border: none !important;
        -webkit-box-shadow: 0 12px 15px rgba(0,0,0,.1), 0 17px 50px rgba(0,0,0,.1);
        box-shadow: 0 12px 15px rgba(0,0,0,.1), 0 17px 50px rgba(0,0,0,.1);
        color: #4a4a4a;
        padding: 1em;
        transition: 0.2s ease-in-out;
        &:hover{
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            transform: translateY(-3px);
        }

        &-content{
            color: black;
            padding: 1em;
            padding-top: 1.5em;

            &__description{
                padding-top: 1em;
                word-wrap: break-word;
            }
        }
    }

</style>
<script>
    export default {
        name: 'sf-product',
        props: {
            name: String,
            description: String,
            url: String,
            image: String,
        }
    }
</script>
