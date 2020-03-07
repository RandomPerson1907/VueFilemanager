<template>
    <div class="preloader" :class="{ isLoading : isLoading() }">
        <img src="../assets/loader.png" alt="" class="preloader__image">
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "PreloaderComponent",
        methods: {
            ...mapGetters(['isLoading'])
        }
    }
</script>

<style lang="scss" scoped>
    .preloader {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        opacity: 0;
        pointer-events: none;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.4);
        z-index: 100;
        transition: all 1s ease-in-out;

        .preloader__image {
            width: 100px;
            max-height: 100px;
        }

        &.isLoading {
            opacity: 1;
            pointer-events: all;
        }
    }
</style>