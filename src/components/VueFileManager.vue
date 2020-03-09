<template>
    <div id="vue-file-manager" class="file-manager">
        <preloader-component></preloader-component>
        <div class="file-manager__wrapper">
            <div class="file-manager__sidebar">
                <div class="sidebar__primary-buttons">
                    <primary-button-component>
                        <span class="plus-icon">+</span> Add File
                    </primary-button-component>
                    <primary-button-component @click="addNewDirectory">
                        <span class="plus-icon">+</span> Add Directory
                    </primary-button-component>
                </div>
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
        <info-component></info-component>
        <modal-component
                :active="modalAction === 'sendToMail'"
                @modal-close="fireCloseModal"
                @modal-submit="fireSendToMail"
        >
            <template v-slot:header>
                Send "{{ currentObject.name }}{{ currentObject.type ? `.${currentObject}` : '' }}" to email
            </template>
            <template v-slot:body>
                <div class="modal__section">
                    <label class="modal__label">
                        <div class="modal__text">Email:</div>
                        <input
                                type="text"
                                class="modal__input"
                                :class="{error: emailError}"
                                placeholder="Input email"
                                v-model="email"
                        >
                    </label>
                </div>
            </template>
        </modal-component>
        <modal-component
                :active="modalAction === 'createDirectory'"
                @modal-close="fireCloseModal"
                @modal-submit="fireCreateDirectory"
        >
            <template v-slot:header>
                Create directory
            </template>
            <template v-slot:body>
                <div class="modal__section">
                    <label class="modal__label">
                        <div class="modal__text">Directory name:</div>
                        <input
                                type="text"
                                class="modal__input"
                                :class="{error: directoryNameError}"
                                placeholder="Input name of new directory"
                                v-model="directoryName"
                        >
                    </label>
                </div>
            </template>
        </modal-component>
    </div>
</template>

<script>
    import {mapActions, mapMutations, mapState} from "vuex";

    export default {
        name: "VueFilemanager",
        props: {},
        data() {
            return {
                email : '',
                emailError: false,
                directoryName: '',
                directoryNameError: false
            }
        },
        computed: {
            ...mapState(['modalAction', 'currentObject'])
        },
        mounted() {
            this.startLoading();
            setTimeout(() => this.stopLoading(), 1000);
            console.log("File manager has been mounted");
        },
        methods: {
            ...mapActions(['startLoading', 'stopLoading', 'sendToMail', 'createDirectory']),
            ...mapMutations(['setModalAction', 'clearCurrentObject']),
            addNewDirectory() {
                this.setModalAction('createDirectory');
            },
            fireSendToMail() {
                this.emailError = false;

                if (this.email.length) {
                    this.sendToMail(this.email);
                    this.email = '';
                    this.fireCloseModal();
                } else {
                    this.emailError = true;
                }
            },
            fireCreateDirectory() {
                this.directoryNameError = false;

                if (this.directoryName.length) {
                    this.createDirectory(this.directoryName);
                    this.directoryName = '';
                    this.fireCloseModal();
                } else {
                    this.directoryNameError = true;
                }
            },
            fireCloseModal() {
                this.emailError = false;
                this.directoryNameError = false;
                this.setModalAction('');
                setTimeout(() => this.clearCurrentObject(), 350);
            }
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
        overflow: hidden;

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

                .sidebar__primary-buttons {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    width: 100%;
                    margin-bottom: 1rem;
                    padding: 0 1rem;

                    .primary-button {
                        width: 100%;
                        margin-top: 1rem;
                    }
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

    @keyframes rotating {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
