<template>
    <div class="modal__window" :class="{active : image !== false}">
        <div class="modal__backdrop" @click="clearImage"></div>
        <div class="modal">
            <div class="modal__header">
                {{ image.name }}
            </div>
            <div class="modal__body">
                <img :src="image.link">
            </div>
        </div>
    </div>
</template>

<script>
    import {mapMutations, mapState} from "vuex";

    export default {
        name: "PreviewComponent",
        computed: {
            ...mapState(['image'])
        },
        created() {
            console.log(this.image)
        },
        methods: {
            ...mapMutations(['clearImage'])
        }
    }
</script>

<style lang="scss" scoped>
    .modal__window {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .modal__backdrop {
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

        .modal {
            position: relative;
            bottom: -100%;
            width: 80%;
            height: 80%;
            border-radius: .5rem;
            box-shadow: -8px 0 18px 0 rgba(25,42,70,.13);
            background: #fff;
            transition: all .3s ease-in-out;
            z-index: 10;

            .modal__header {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 1rem;
                border-bottom: 1px solid #EDEDED;
                font-size: 1.2rem;
            }

            .modal__body {
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: 100%;
                height: 92%;
                padding: 1rem;

                img {
                    width: 100%;
                    height: auto;
                    max-height: 100%;
                }
            }

            .modal__buttons {
                display: flex;
                justify-content: center;
                align-items: center;
                padding-top: 1rem;
                padding-bottom: 1rem;
                border-top: 1px solid #EDEDED;

                .modal__button {
                    margin-left: 1rem;
                    margin-right: 1rem;
                    padding: .2rem 1rem;
                    box-shadow: 0 0 12px 0 rgba(90,141,238,.3);
                    border: 1px solid transparent;
                    border-radius: .25rem;
                    color: #fff;
                    font-size: 1rem;
                    opacity: .8;
                    cursor: pointer;
                    user-select: none;
                    transition: all .3s ease-in-out;

                    &:hover {
                        box-shadow: 0 0 12px 0 rgba(90,141,238,.6);
                        opacity: 1;
                    }

                    &.modal__button_submit {
                        background: rgba(72,180,127,.8);
                    }

                    &.modal__button_cancel {
                        background: rgba(217, 34, 34, 0.8);
                    }
                }
            }
        }

        &, * {
            pointer-events: none;
        }

        &.active {
            &, * {
                pointer-events: all;
            }

            .modal {
                bottom: 0;
            }

            .modal__backdrop {
                opacity: 1;
            }
        }
    }
</style>