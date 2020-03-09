<template>
    <div id="vue-file-manager" class="file-manager">
        <preloader-component></preloader-component>
        <div class="file-manager__wrapper">
            <div class="file-manager__sidebar" :class="{active : sidebarVisible}">
                <div class="sidebar__primary-buttons">
                    <primary-button-component
                            title="Add file"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="24" height="24"
                             viewBox="0 0 172 172"
                             style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M26.46154,0c-14.57452,0 -26.46154,11.88702 -26.46154,26.46154v112.46154c0,14.57452 11.88702,26.46154 26.46154,26.46154h66.15385c-3.30769,-3.95372 -6.04687,-8.39844 -8.0625,-13.23077h-58.09135c-7.3131,0 -13.23077,-5.91767 -13.23077,-13.23077v-112.46154c0,-7.3131 5.91767,-13.23077 13.23077,-13.23077h41.55288c4.78065,1.21454 4.75481,6.95132 4.75481,12.81731v20.25962c0,3.64363 2.97176,6.61538 6.61538,6.61538h19.84615c6.58954,0 13.23077,0.02584 13.23077,6.61538v25.01442c4.16046,-1.73137 8.60517,-2.92007 13.23077,-3.51442v-28.11538c0,-7.02885 -6.43449,-13.69591 -17.98558,-25.01442c-1.60216,-1.57632 -3.33353,-3.33353 -4.96154,-4.96154c-1.62801,-1.62801 -3.38522,-3.15264 -4.96154,-4.75481c-11.31851,-11.55108 -17.98558,-18.19231 -25.01442,-18.19231zM132.30769,93.85577c-21.24158,0 -38.45192,17.21034 -38.45192,38.45192c0,21.24159 17.21034,38.45192 38.45192,38.45192c21.24159,0 38.45192,-17.21033 38.45192,-38.45192c0,-21.24158 -17.21033,-38.45192 -38.45192,-38.45192zM125.69231,112.46154h13.23077v13.23077h13.23077v13.23077h-13.23077v13.23077h-13.23077v-13.23077h-13.23077v-13.23077h13.23077z"></path></g></g></svg>
                    </primary-button-component>
                    <primary-button-component
                            title="Add directory"
                            @click="addNewDirectory">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="24" height="24"
                             viewBox="0 0 172 172"
                             style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M19.84615,0c-10.95673,0 -19.84615,8.88942 -19.84615,19.84615v105.84615c0,10.95673 8.88942,19.84615 19.84615,19.84615h62.63942c-1.11118,-4.23798 -1.86058,-8.65685 -1.86058,-13.23077h-60.77885c-3.64363,0 -6.61538,-2.97176 -6.61538,-6.61538v-86c0,-3.64363 2.97176,-6.61538 6.61538,-6.61538h125.69231c3.64363,0 6.61538,2.97176 6.61538,6.61538v44.86058c4.83233,2.01563 9.27704,4.78065 13.23077,8.0625v-52.92308c0,-10.95673 -8.88942,-19.84615 -19.84615,-19.84615h-72.76923c0,-10.95673 -8.88942,-19.84615 -19.84615,-19.84615zM132.30769,93.85577c-21.24158,0 -38.45192,17.21034 -38.45192,38.45192c0,21.24159 17.21034,38.45192 38.45192,38.45192c21.24159,0 38.45192,-17.21033 38.45192,-38.45192c0,-21.24158 -17.21033,-38.45192 -38.45192,-38.45192zM125.69231,112.46154h13.23077v13.23077h13.23077v13.23077h-13.23077v13.23077h-13.23077v-13.23077h-13.23077v-13.23077h13.23077z"></path></g></g></svg>
                    </primary-button-component>
                </div>
                <sidebar-component></sidebar-component>
            </div>
            <div class="file-manager__main">
                <div class="file-manager__header">
                    <div @click="toggleSidebar" class="toggle-sidebar-button" :class="{active : sidebarVisible}">
                        <svg v-show="sidebarVisible" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="20" height="20"
                             viewBox="0 0 172 172"
                             style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#9f9f9f"><path d="M68.74625,17.15297c-0.16665,0.00361 -0.33282,0.01933 -0.49719,0.04703h-51.04906c-5.66036,0 -10.32,4.65964 -10.32,10.32v116.96c0,5.66037 4.65964,10.32 10.32,10.32h51.02219c0.37149,0.0614 0.75054,0.0614 1.12203,0h85.45578c5.66037,0 10.32,-4.65963 10.32,-10.32v-116.96c0,-5.66036 -4.65963,-10.32 -10.32,-10.32h-85.46922c-0.19315,-0.03228 -0.3887,-0.04802 -0.58453,-0.04703zM17.2,24.08h48.16v123.84h-48.16c-1.90764,0 -3.44,-1.53237 -3.44,-3.44v-116.96c0,-1.90764 1.53236,-3.44 3.44,-3.44zM72.24,24.08h82.56c1.90763,0 3.44,1.53236 3.44,3.44v116.96c0,1.90763 -1.53237,3.44 -3.44,3.44h-82.56zM24.08,37.84c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM37.84,37.84c-1.24059,-0.01754 -2.39452,0.63425 -3.01993,1.7058c-0.62541,1.07155 -0.62541,2.39684 0,3.46839c0.62541,1.07155 1.77935,1.72335 3.01993,1.7058h17.2c1.24059,0.01754 2.39452,-0.63425 3.01993,-1.7058c0.62541,-1.07155 0.62541,-2.39684 0,-3.46839c-0.62541,-1.07155 -1.77935,-1.72335 -3.01993,-1.7058zM103.13281,41.2464c-0.89371,0.02663 -1.74194,0.40014 -2.365,1.04141l-17.2,17.2c-1.34287,1.34342 -1.34287,3.52095 0,4.86437l17.2,17.2c0.86281,0.89867 2.14404,1.26068 3.34956,0.94641c1.20552,-0.31427 2.14696,-1.2557 2.46122,-2.46122c0.31427,-1.20552 -0.04774,-2.48675 -0.94641,-3.34956l-14.76781,-14.76781l14.76781,-14.76781c1.01742,-0.98897 1.32333,-2.50111 0.77034,-3.80778c-0.55299,-1.30667 -1.85145,-2.13983 -3.26971,-2.098zM24.08,51.6c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM37.84,51.6c-1.24059,-0.01754 -2.39452,0.63425 -3.01993,1.7058c-0.62541,1.07155 -0.62541,2.39684 0,3.46839c0.62541,1.07155 1.77935,1.72335 3.01993,1.7058h17.2c1.24059,0.01754 2.39452,-0.63425 3.01993,-1.7058c0.62541,-1.07155 0.62541,-2.39684 0,-3.46839c-0.62541,-1.07155 -1.77935,-1.72335 -3.01993,-1.7058zM24.08,65.36c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM37.84,65.36c-1.24059,-0.01754 -2.39452,0.63425 -3.01993,1.7058c-0.62541,1.07155 -0.62541,2.39684 0,3.46839c0.62541,1.07155 1.77935,1.72335 3.01993,1.7058h17.2c1.24059,0.01754 2.39452,-0.63425 3.01993,-1.7058c0.62541,-1.07155 0.62541,-2.39684 0,-3.46839c-0.62541,-1.07155 -1.77935,-1.72335 -3.01993,-1.7058zM24.08,79.12c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM37.84,79.12c-1.24059,-0.01754 -2.39452,0.63425 -3.01993,1.7058c-0.62541,1.07155 -0.62541,2.39684 0,3.46839c0.62541,1.07155 1.77935,1.72335 3.01993,1.7058h17.2c1.24059,0.01754 2.39452,-0.63425 3.01993,-1.7058c0.62541,-1.07155 0.62541,-2.39684 0,-3.46839c-0.62541,-1.07155 -1.77935,-1.72335 -3.01993,-1.7058z"></path></g></g></svg>
                        <svg v-show="!sidebarVisible" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="30" height="30"
                             viewBox="0 0 172 172"
                             style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#9f9f9f"><path d="M68.74625,17.15297c-0.16665,0.00361 -0.33282,0.01933 -0.49719,0.04703h-51.04906c-5.66036,0 -10.32,4.65964 -10.32,10.32v116.96c0,5.66037 4.65964,10.32 10.32,10.32h51.02219c0.37149,0.0614 0.75054,0.0614 1.12203,0h85.45578c5.66037,0 10.32,-4.65963 10.32,-10.32v-116.96c0,-5.66036 -4.65963,-10.32 -10.32,-10.32h-85.46922c-0.19315,-0.03228 -0.3887,-0.04802 -0.58453,-0.04703zM17.2,24.08h48.16v123.84h-48.16c-1.90764,0 -3.44,-1.53237 -3.44,-3.44v-116.96c0,-1.90764 1.53236,-3.44 3.44,-3.44zM72.24,24.08h82.56c1.90763,0 3.44,1.53236 3.44,3.44v116.96c0,1.90763 -1.53237,3.44 -3.44,3.44h-82.56zM24.08,37.84c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM37.84,37.84c-1.24059,-0.01754 -2.39452,0.63425 -3.01993,1.7058c-0.62541,1.07155 -0.62541,2.39684 0,3.46839c0.62541,1.07155 1.77935,1.72335 3.01993,1.7058h17.2c1.24059,0.01754 2.39452,-0.63425 3.01993,-1.7058c0.62541,-1.07155 0.62541,-2.39684 0,-3.46839c-0.62541,-1.07155 -1.77935,-1.72335 -3.01993,-1.7058zM85.9664,41.2464c-1.39982,0.00037 -2.65984,0.84884 -3.18658,2.14577c-0.52674,1.29693 -0.21516,2.7837 0.78799,3.76001l14.76781,14.76781l-14.76781,14.76781c-0.89867,0.86281 -1.26068,2.14404 -0.94641,3.34956c0.31427,1.20552 1.2557,2.14696 2.46122,2.46122c1.20552,0.31427 2.48675,-0.04774 3.34956,-0.94641l17.2,-17.2c1.34287,-1.34342 1.34287,-3.52095 0,-4.86437l-17.2,-17.2c-0.64765,-0.66575 -1.53698,-1.04135 -2.46578,-1.04141zM24.08,51.6c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM37.84,51.6c-1.24059,-0.01754 -2.39452,0.63425 -3.01993,1.7058c-0.62541,1.07155 -0.62541,2.39684 0,3.46839c0.62541,1.07155 1.77935,1.72335 3.01993,1.7058h17.2c1.24059,0.01754 2.39452,-0.63425 3.01993,-1.7058c0.62541,-1.07155 0.62541,-2.39684 0,-3.46839c-0.62541,-1.07155 -1.77935,-1.72335 -3.01993,-1.7058zM24.08,65.36c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM37.84,65.36c-1.24059,-0.01754 -2.39452,0.63425 -3.01993,1.7058c-0.62541,1.07155 -0.62541,2.39684 0,3.46839c0.62541,1.07155 1.77935,1.72335 3.01993,1.7058h17.2c1.24059,0.01754 2.39452,-0.63425 3.01993,-1.7058c0.62541,-1.07155 0.62541,-2.39684 0,-3.46839c-0.62541,-1.07155 -1.77935,-1.72335 -3.01993,-1.7058zM24.08,79.12c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44zM37.84,79.12c-1.24059,-0.01754 -2.39452,0.63425 -3.01993,1.7058c-0.62541,1.07155 -0.62541,2.39684 0,3.46839c0.62541,1.07155 1.77935,1.72335 3.01993,1.7058h17.2c1.24059,0.01754 2.39452,-0.63425 3.01993,-1.7058c0.62541,-1.07155 0.62541,-2.39684 0,-3.46839c-0.62541,-1.07155 -1.77935,-1.72335 -3.01993,-1.7058z"></path></g></g></svg>
                    </div>
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
                Send "{{ currentObject.name }}{{ currentObject.type ? `.${currentObject.type}` : '' }}" to email
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
            ...mapState(['modalAction', 'currentObject', 'sidebarVisible'])
        },
        mounted() {
            this.startLoading();
            setTimeout(() => this.stopLoading(), 1000);
            console.log("File manager has been mounted");
        },
        methods: {
            ...mapActions(['toggleSidebar', 'startLoading', 'stopLoading', 'sendToMail', 'createDirectory']),
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

    body {
        margin: 0;
    }

    .file-manager {
        box-sizing: border-box;
        position: relative;
        width: 100vw;
        height: 100vh;
        margin: 0;
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
                width: 0;
                min-width: 0;
                overflow: hidden;
                transition: all .2s linear .3s;

                * {
                    opacity: 0;
                    transition: opacity .2s linear;
                }

                &.active {
                    width: 260px;
                    min-width: 260px;
                    transition: all .2s linear 0s;

                    * {
                        opacity: 1;
                        transition: opacity .2s linear .3s;
                    }
                }

                .sidebar__primary-buttons {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    padding: 0 1rem;

                    .primary-button {
                        margin: 1rem .5rem;
                    }
                }
            }

            .file-manager__main {
                width: auto;
                background: #fff;

                .file-manager__header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    height: 3.5rem;
                    padding: .6rem 1.5rem;
                    border-bottom: 1px solid #DFE3E7;

                    .toggle-sidebar-button {
                        height: 30px;
                        margin-right: 1rem;
                        cursor: pointer;

                        &:hover {
                            svg {
                                g > g {
                                    fill: #475F7B;
                                }
                            }
                        }

                        svg {
                            width: 100%;
                            height: 100%;

                            * {
                                transition: all .3s ease-in-out;
                            }
                        }
                    }
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
