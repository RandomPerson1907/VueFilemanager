<template>
    <div class="loading-bar">
        <div class="loading-bar-line" :style="{ width: `${validatedProgress}%` }"></div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "LoadingBarComponent",
        computed: {
            ...mapState(['loading', 'progress']),
            validatedProgress() {
                return this.progress > 100 ? 100 : this.progress;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .loading-bar {
        width: 100%;
        height: 3px;

        .loading-bar-line {
            height: 100%;
            background: rgb(131,58,180);
            background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
            transition: all .3s ease-in-out;
        }
    }
</style>