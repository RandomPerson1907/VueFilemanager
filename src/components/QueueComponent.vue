<template>
    <div class="queue" :class="{ active: isActive }">
        <div class="queue__wrapper">
            <div class="queue__header">
                <div class="queue__title">Queue</div>
                <div class="queue__close">x</div>
            </div>
            <div class="queue__items">
                <div
                    class="queue__item"
                    v-for="queueItem in queue"
                >
                    <div class="queue__item__name">{{ queueItem.name }}</div>
                    <div class="queue__item__cancel">x</div>
                    <div class="queue__item__progress"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "QueueComponent",
        data() {
            return {
                isActive: false
            }
        },
        computed: {
            ...mapState(['queue'])
        },
        watch: {
            queue() {
                this.isActive = !!this.queue.length;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .queue {
        box-sizing: border-box;
        position: absolute;
        right: 0;
        bottom: -100%;
        min-width: 320px;
        height: 320px;
        padding-bottom: 3rem;
        box-shadow: -8px 0 18px 0 rgba(25, 42, 70, .13);
        background: #DFE3E7;
        transition: all .3s ease-in-out;

        &.active {
            bottom: 0;
        }

        * {
            box-sizing: border-box;
        }

        .queue__wrapper {
            width: 100%;
            height: 100%;

            .queue__header {
                display: flex;
                justify-content: space-between;
                padding: 1.5rem;
                
                .queue__close {
                    cursor: pointer;
                }
            }

            .queue__items {
                width: 100%;
                height: 85%;
                overflow-y: auto;
                padding: 0 .5rem 0 1.5rem;

                .queue__item {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    margin-bottom: 1rem;
                    font-size: .85rem;

                    .queue__item__cancel {
                        padding: 0;
                        border: none;
                        background: none;
                        font-size: 1rem;
                        cursor: pointer;
                    }

                    .queue__item__progress {
                        width: 100%;
                        height: 2px;
                        margin-top: .3rem;
                        background: #ff7965;
                    }
                }
            }
        }
    }
</style>