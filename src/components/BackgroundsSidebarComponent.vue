<template>
    <div class="backgrounds" :class="{ active : backgroundsSidebarVisible }">
        <div class="backgrounds__backdrop" @click="close"></div>
        <div class="backgrounds__content">
            <div class="backgrounds__content__header">
                <div class="title">Changing backgrounds</div>
            </div>
            <div class="backgrounds__content__wrapper">
                <div
                    class="backgrounds__content__item"
                    :class="{ selected : background.id === selectedBackground.id }"
                    v-for="background in backgrounds"
                    @click="selectBackground(background)"
                >
                    <img :src="background.url" :alt="background.name">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapState} from "vuex";
    import {AxiosInstance as Axios} from "axios";

    export default {
        name: "BackgroundsSidebarComponent",
        data() {
            return {

            }
        },
        computed: {
            ...mapState(['backgroundsSidebarVisible', 'backgrounds', 'selectedBackground']),
        },
        methods: {
            ...mapGetters(['isVisibleAdditionalInfo', 'getCurrentObject', 'getCurrentObjectIndex', 'getCurrentObjectType']),
            ...mapActions(['hideBackgroundsSidebar', 'changeBackground']),
            selectBackground(background) {
                  this.changeBackground(background);
                  this.close();
            },
            close() {
                this.hideBackgroundsSidebar();
            },
        }
    }
</script>

<style lang="scss" scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter {
        opacity: 0;
    }

    .backgrounds {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 0 .25rem .25rem 0;
        transition: all .3s ease-in-out;

        &, * {
            pointer-events: none;
        }

        .backgrounds__backdrop {
            position: absolute;
            right: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            background: rgba(0,0,0,.35);
            transition: all .3s ease-in-out;
            pointer-events: none;
        }

        &.active {
            &, * {
                pointer-events: all;
            }

            .backgrounds__content {
                right: 0;
            }

            .backgrounds__backdrop {
                opacity: 1;
            }
        }

        .backgrounds__content {
            position: absolute;
            right: -100%;
            height: 100%;
            width: 640px;
            box-shadow: -8px 0 18px 0 rgba(25,42,70,.13);
            background: #fff;
            transition: all .5s ease-in-out;

            .backgrounds__content__header {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                border-radius: .25rem .25rem 0 0;
                border-bottom: 1px solid #EDEDED;

                .title {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 1rem 0;
                    font-size: .95rem;
                }
            }

            .backgrounds__content__wrapper {
                display: flex;
                flex-wrap: wrap;
                padding: 1rem .5rem;

                .backgrounds__content__item {
                    box-sizing: border-box;
                    width: calc(33% - 2rem);
                    height: 130px;
                    margin: .5rem;
                    cursor: pointer;

                    &:hover {
                        img {
                            transform-origin: center;
                            transform: scale(1.01);
                            box-shadow: 0 0 15px 0 rgba(90,141,238,.8);
                        }
                    }

                    img {
                        max-height: 100%;
                        max-width: 100%;
                        transition:
                                box-shadow .3s ease-in-out,
                                transform .1s linear;
                        box-shadow: -8px 0 18px 0 rgba(25,42,70,.13);
                    }
                }
            }
        }
    }
</style>