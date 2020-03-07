<template>
    <div id="vue-file-manager" class="file-manager" :class="{dragging}">
        <preloader-component></preloader-component>
        <div class="file-manager__wrapper">
            <div class="file-manager__sidebar">
                <primary-button-component>
                    <span class="plus-icon">+</span> Add File
                </primary-button-component>
                <sidebar-component></sidebar-component>
            </div>
            <div class="file-manager__main">
                <div class="file-manager__header">
                    <search-component></search-component>
                    <control-component></control-component>
                </div>
                <div class="file-manager__content">
                    <content-component></content-component>
                </div>
            </div>
            <div class="file-manager__additional">
                <additional-info-component></additional-info-component>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "VueFilemanager",
        props: {},
        mounted() {
            this.startLoading();
            setTimeout(() => this.stopLoading(), 1000);
            console.log("File manager has been mounted");
        },
        methods: {
            ...mapActions(['startLoading', 'stopLoading']),
        }
    };
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Rubik:400,500&display=swap');

    .file-manager {
        position: relative;
        margin: 3% auto auto;
        width: 1594px;
        height: 822px;
        border: 1px solid #DFE3E7;
        border-radius: .267rem;
        background-color: #F2F4F4;

        * {
            color: #475F7B;
            font-family: 'Rubik', 'sans-serif';
            font-weight: 400;
            line-height: 1.4;
            letter-spacing: .01rem;
            box-sizing: border-box;
        }

        &.dragging {

        }

        .file-manager__wrapper {
            position: relative;
            display: flex;
            justify-content: space-between;
            height: 100%;
            width: 100%;

            .file-manager__sidebar,
            .file-manager__content {
                height: 100%;
            }

            .file-manager__sidebar {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: start;
                width: 260px;

                .primary-button {
                    margin: 1.5rem;
                }
            }

            .file-manager__main {
                width: calc(100% - 260px);
                background: #fff;

                .file-manager__header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    height: 3.5rem;
                    padding: .6rem 1.5rem;
                    border-bottom: 1px solid #DFE3E7;
                }

                .file-manager__content {
                    position: relative;
                    height: calc(100% - 3.5rem);
                    overflow: hidden;
                }
            }
        }
    }
</style>
