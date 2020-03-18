<template>
    <div class="queue">
        <div class="queue__wrapper">
            <div class="queue__header">
                <div class="queue__title">Queue</div>
                <div class="queue__close"><button>x</button></div>
            </div>
            <div class="queue__items">
                <div
                    class="queue__item"
                    v-for="queueItem in queue"
                >
                    <div class="queue__item__name">{{ queueItem.name }}</div>
                    <div class="queue__item__cancel"><button>x</button></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "QueueComponent",
        computed: {
            ...mapState(['queue'])
        }
    }
</script>

<style lang="scss" scoped>
    .queue {
        position: absolute;
        right: 0;
        bottom: 0;
        min-width: 320px;
        padding: 1.5rem;
        box-shadow: -8px 0 18px 0 rgba(25, 42, 70, .13);
        background: #DFE3E7;

        .queue__wrapper {
            .queue__header {
                display: flex;
                justify-content: space-between;
                margin-bottom: .5rem;
                padding-bottom: .5rem;
            }

            .queue__item {
                display: flex;
                justify-content: space-between;
                font-size: .85rem;
            }
        }
    }
</style>