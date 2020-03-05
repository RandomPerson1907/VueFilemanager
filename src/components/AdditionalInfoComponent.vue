<template>
    <div class="additional-info" :class="{ active : isVisibleAdditionalInfoSidebar }">
        <div class="additional-info__backdrop" @click="close"></div>
        <div class="additional-info__content">
            <div class="additional-info__content__header">
                <div class="title__text" v-show="!editing">{{ object.name }}</div>
                <input class="title__input" v-model="object.name" v-show="editing" ref="fileName">
                <div class="actions">
                    <div class="action action__start-edit" @click="startEdit" v-show="!editing">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="32" height="32"
                             viewBox="0 0 172 172"
                             style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#475f7b"><path d="M128.49609,21.33203c-5.62695,0 -11.25391,2.18359 -15.62109,6.55078l-84.99219,84.99219l-0.33594,1.67969l-5.87891,29.5625l-1.67969,7.89453l7.89453,-1.67969l29.5625,-5.87891l1.67969,-0.33594l84.99219,-84.99219c8.73438,-8.73437 8.73438,-22.50781 0,-31.24219c-4.36719,-4.36719 -9.99414,-6.55078 -15.62109,-6.55078zM128.49609,31.57813c2.70849,0 5.43799,1.23877 8.0625,3.86328c5.22803,5.22803 5.22803,10.89697 0,16.125l-3.86328,3.69531l-15.95703,-15.95703l3.69531,-3.86328c2.62451,-2.62451 5.35401,-3.86328 8.0625,-3.86328zM109.17969,46.86328l15.95703,15.95703l-65.00391,65.00391c-3.52734,-6.88672 -9.07031,-12.42969 -15.95703,-15.95703zM37.28906,120.60156c6.4458,2.60352 11.50586,7.66357 14.10938,14.10938l-17.63672,3.52734z"></path></g></g></svg>
                    </div>
                    <div class="action action__stop-edit" @click="stopEdit" v-show="editing">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="50" height="50"
                             viewBox="0 0 172 172"
                             style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#475f7b"><path d="M44.72,144.48c-1.81406,0 -3.57437,-0.72562 -4.86437,-2.01562l-37.84,-37.84c-2.6875,-2.6875 -2.6875,-7.04125 0,-9.72875c2.6875,-2.6875 7.04125,-2.6875 9.72875,0l32.49187,32.49187l77.74938,-93.92812c2.41875,-2.94281 6.75906,-3.34594 9.675,-0.91375c2.92937,2.41875 3.34594,6.75906 0.91375,9.675l-82.56,99.76c-1.22281,1.505 -3.03688,2.40531 -4.97188,2.48594c-0.1075,0.01344 -0.215,0.01344 -0.3225,0.01344zM82.8825,144.46656c1.935,-0.08063 3.73563,-0.98094 4.97188,-2.48594l82.56,-99.76c2.43219,-2.91594 2.01562,-7.25625 -0.91375,-9.675c-2.91594,-2.43219 -7.25625,-2.01563 -9.675,0.91375l-77.74938,93.92812l-1.53187,-1.53187c-2.6875,-2.6875 -7.04125,-2.6875 -9.72875,0c-2.6875,2.6875 -2.6875,7.04125 0,9.72875l6.88,6.88c1.29,1.29 3.05031,2.01562 4.86437,2.01562c0.1075,0 0.215,0 0.3225,-0.01344z"></path></g></g></svg>
                    </div>
                    <div class="action action__delete">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60" xml:space="preserve" data-shift="x" data-animoptions="{'duration':'1.4', 'repeat':'0', 'repeatDelay':'0.5'}" preserveAspectRatio="xMinYMin meet" style="left: 0.333374px; top: -0.150002px;"><g class="lievo-setrotation"><g class="lievo-setsharp" style="transform-origin: 0px 0px 0px;" data-svg-origin="31.25 30" transform="matrix(1,0,0,1,-1.2500002980232194,-0.25000029802321944)"><g class="lievo-setflip"><g class="lievo-main">
		<g class="lievo-common">
			<g opacity="1" style="opacity: 0;" data-svg-origin="63 1.1200001239776611" transform="matrix(1,0,0,1,-43,37)">
				<path class="lievo-donotdraw lievo-likestroke lievo-altstroke" fill="#596778" d="M68.38,7.91l-2.74,1.08c0,0-1.08,0.91-1.5,0.66c-0.46-0.27-0.1-1.8-0.1-1.8l0.88-1.12L63,4.48l2.43-1.12c0,0,0.96-1.68,1.19-1.68c0.52,0,2.58,1.68,2.58,1.68l-1.19-1.29l1.19-0.95l3.62,1.12c0,0-1.03,1.68-0.52,2.24c0.52,0.56,0.98,5.16,0.47,5.16C72.26,9.65,68.9,6,68.9,6l3.72,4.09l-1.97-0.21l-2.02,0.99l-3.46-1.07L68.38,7.91z" style="stroke-width: 0px; transform-origin: 0px 0px 0px;" stroke="none" data-svg-origin="67.99589538574219 5.995000123977661" transform="matrix(0,1,-1,0,73.99089550971985,-62.000895261764526)"></path>
			</g>
		</g>

		<g class="lievo-filledicon lievo-lineicon">
			<g style="" data-svg-origin="15 49" transform="matrix(1,0,0,1,0,0)">
				<g>
					<path fill="none" stroke="#596778" stroke-width="2.5px" stroke-linecap="square" stroke-miterlimit="10" d="M30,15H17l1.88,32c0.06,1.1,1.01,2,2.12,2h18c1.1,0,2.05-0.89,2.12-2L43,15H30" style=""></path>
                    <line class="lievo-altstroke" fill="none" stroke="#596778" stroke-width="2.5px" stroke-linecap="square" stroke-miterlimit="10" x1="24" y1="23" x2="24" y2="41" style=""></line>
                    <line class="lievo-altstroke" fill="none" stroke="#596778" stroke-width="2.5px" stroke-linecap="square" stroke-miterlimit="10" x1="30" y1="23" x2="30" y2="41" style=""></line>
                    <line class="lievo-altstroke" fill="none" stroke="#596778" stroke-width="2.5px" stroke-linecap="square" stroke-miterlimit="10" x1="36" y1="23" x2="36" y2="41" style=""></line>
				</g>
                <g style="" data-svg-origin="15 15" transform="matrix(1,0,0,1,0,0)">
					<path fill="none" stroke="#596778" stroke-width="2.5px" stroke-linecap="square" stroke-miterlimit="10" d="M25,15v-3c0-0.55,0.45-1,1-1h8c0.55,0,1,0.45,1,1v3" style=""></path>
                    <line fill="none" stroke="#596778" stroke-width="2.5px" stroke-linecap="square" stroke-miterlimit="10" x1="15" y1="15" x2="45" y2="15" style=""></line>
				</g>
			</g>
		</g>


	<rect x="-20" y="-19" width="4" height="4" class="lievo-checkshift lievo-donotdraw lievo-nohoverstroke lievo-nohovercolor" style="stroke-width: 2px; stroke-linecap: butt; stroke-linejoin: round; opacity: 0;" fill="none" stroke="#596778" stroke-width="2.5px"></rect></g></g></g></g>

                            <desc>LivIcons Evolution</desc><defs></defs></svg>
                    </div>
                    <div class="action action__close" @click="close">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="16" height="16"
                             viewBox="0 0 172 172"
                             style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#727e8c"><path d="M31.4975,21.715l-9.7825,9.7825l54.5025,54.5025l-54.825,54.9325l9.675,9.675l54.9325,-54.825l54.825,54.825l9.7825,-9.7825l-54.825,-54.825l54.5025,-54.5025l-9.7825,-9.7825l-54.5025,54.5025z"></path></g></g></svg>
                    </div>
                </div>
            </div>
            <div class="additional-info__content__tabs">
                <div class="tabs__headers">
                    <div class="tab__header" :class="{ active : activeTab === 'details'}" @click="changeTab('details')">
                        <div class="header-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                 width="32" height="32"
                                 viewBox="0 0 172 172"
                                 style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#475f7b"><path d="M43,14.33333c-7.84216,0 -14.33333,6.49117 -14.33333,14.33333v114.66667c0,7.84216 6.49117,14.33333 14.33333,14.33333h86c7.84216,0 14.33333,-6.49117 14.33333,-14.33333v-86l-43,-43zM43,28.66667h50.16667v35.83333h35.83333v78.83333h-86zM57.33333,86v14.33333h57.33333v-14.33333zM57.33333,114.66667v14.33333h57.33333v-14.33333z"></path></g></g></svg>
                        </div>
                        Details
                    </div>
                    <div class="tab__header" :class="{ active : activeTab === 'activity'}" @click="changeTab('activity')">
                        <div class="header-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                 width="30" height="30"
                                 viewBox="0 0 172 172"
                                 style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#475f7b"><path d="M85.92161,11.46667c-2.47903,0.03223 -4.65656,1.65408 -5.39739,4.02005l-24.08672,77.08646l-6.67396,-15.22917v-0.0112c-4.66788,-10.65559 -20.5079,-11.06571 -25.71042,-0.66067l-1.79167,3.59453h-10.79479c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h14.33333c2.17174,0.00015 4.15718,-1.22667 5.12865,-3.16901l3.38177,-6.76354c1.21744,-2.43488 3.85643,-2.36529 4.94948,0.13438l12.82162,29.29375c0.95737,2.19331 3.17624,3.56136 5.56588,3.43165c2.38963,-0.12971 4.44739,-1.7299 5.16173,-4.01394l19.9211,-63.72734l9.02552,108.36224c0.2208,2.63463 2.2144,4.77675 4.82641,5.18596c2.61201,0.40921 5.1652,-1.02059 6.18115,-3.46148l27.18854,-65.27266h14.93802c2.0447,3.54154 5.82076,5.7261 9.91016,5.73333c6.33287,0 11.46667,-5.1338 11.46667,-11.46667c0,-6.33287 -5.1338,-11.46667 -11.46667,-11.46667c-4.09341,0.00324 -7.87465,2.18834 -9.92136,5.73333h-18.74531c-2.31586,-0.00173 -4.40541,1.38983 -5.29661,3.52734l-19.61875,47.07604l-9.50703,-114.15156c-0.25274,-2.99852 -2.78043,-5.29154 -5.78933,-5.25182z"></path></g></g></svg>
                        </div>
                        Activity
                    </div>
                </div>
                <div class="tabs__contents">
                    <transition name="fade">
                        <div class="tab__content tab__content_details" v-show="activeTab === 'details'" :class="{ active : activeTab === 'details'}">
                        <div class="details__main" v-if="object.type">
                            <div class="details__preview">
                                <img src="../assets/file-types/avi.png" alt="avi" v-if="object.type === 'avi'">
                                <img src="../assets/file-types/css.png" alt="css" v-else-if="object.type === 'css'">
                                <img src="../assets/file-types/csv.png" alt="csv" v-else-if="object.type === 'csv'">
                                <img src="../assets/file-types/dbf.png" alt="dbf" v-else-if="object.type === 'dbf'">
                                <img src="../assets/file-types/doc.png" alt="doc" v-else-if="object.type === 'doc'">
                                <img src="../assets/file-types/dwg.png" alt="dwg" v-else-if="object.type === 'dwg'">
                                <img src="../assets/file-types/exe.png" alt="exe" v-else-if="object.type === 'exe'">
                                <img src="../assets/file-types/fla.png" alt="fla" v-else-if="object.type === 'fla'">
                                <img src="../assets/file-types/html.png" alt="html" v-else-if="object.type === 'html'">
                                <img src="../assets/file-types/iso.png" alt="iso" v-else-if="object.type === 'iso'">
                                <img src="../assets/file-types/javascript.png" alt="javascript" v-else-if="object.type === 'js'">
                                <img src="../assets/file-types/json-file.png" alt="json" v-else-if="object.type === 'json'">
                                <img src="../assets/file-types/mp3.png" alt="mp3" v-else-if="object.type === 'mp3'">
                                <img src="../assets/file-types/mp4.png" alt="mp4" v-else-if="object.type === 'mp4'">
                                <img src="../assets/file-types/pdf.png" alt="pdf" v-else-if="object.type === 'pdf'">
                                <img src="../assets/file-types/powerpoint.png" alt="pptx" v-else-if="object.type === 'pptx'">
                                <img src="../assets/file-types/psd.png" alt="psd" v-else-if="object.type === 'psd'">
                                <img src="../assets/file-types/rtf.png" alt="rtf" v-else-if="object.type === 'rtf'">
                                <img src="../assets/file-types/sketch.png" alt="sketch" v-else-if="object.type === 'sketch'">
                                <img src="../assets/file-types/svg.png" alt="svg" v-else-if="object.type === 'svg'">
                                <img src="../assets/file-types/txt.png" alt="txt" v-else-if="object.type === 'txt'">
                                <img src="../assets/file-types/xls.png" alt="xls" v-else-if="object.type === 'xls'">
                                <img src="../assets/file-types/xml.png" alt="xml" v-else-if="object.type === 'xml'">
                                <img src="../assets/file-types/zip.png" alt="zip" v-else-if="object.type === 'zip'">
                                <img src="../assets/file-types/other.png" alt="other" v-else>
                            </div>
                            <div class="details__file_size">{{ object.size }}</div>
                        </div>
                        <div class="details__info">
                            <div class="details__info__header">Settings</div>
                            <div class="details__info__rows">
                                <div class="details__info__row">
                                    <label class="details__info__row__label changeable" for="file-sharing__checkbox">File Sharing</label>
                                    <div class="details__info__row__value">
                                        <input
                                                type="checkbox"
                                                id="file-sharing__checkbox"
                                                v-model="object.share"
                                                :disabled="!editing"
                                        >
                                        <label class="custom-checkbox" for="file-sharing__checkbox"></label>
                                    </div>
                                </div>
                                <div class="details__info__row">
                                    <label class="details__info__row__label changeable" for="synchronization__checkbox">Synchronization</label>
                                    <div class="details__info__row__value">
                                        <input
                                                type="checkbox"
                                                id="synchronization__checkbox"
                                                v-model="object.synchronization"
                                                :disabled="!editing"
                                        >
                                        <label class="custom-checkbox" for="synchronization__checkbox"></label>
                                    </div>
                                </div>
                                <div class="details__info__row">
                                    <label class="details__info__row__label changeable" for="backup__checkbox">Backup</label>
                                    <div class="details__info__row__value">
                                        <input
                                                type="checkbox"
                                                id="backup__checkbox"
                                                v-model="object.backup"
                                                :disabled="!editing"
                                        >
                                        <label class="custom-checkbox" for="backup__checkbox"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="details__info">
                            <div class="details__info__header">Info</div>
                            <div class="details__info__rows">
                                <label class="details__info__row" v-if="object.type">
                                    <span class="details__info__row__label">Type</span>
                                    <span class="details__info__row__value">{{ type }}</span>
                                </label>
                                <label class="details__info__row" v-if="object.size">
                                    <span class="details__info__row__label">Size</span>
                                    <span class="details__info__row__value">{{ object.size }}</span>
                                </label>
                                <label class="details__info__row" v-if="object.location">
                                    <span class="details__info__row__label">Location</span>
<!--                                    Change directory-->
                                    <span class="details__info__row__value">{{ object.location }}</span>
                                </label>
                                <label class="details__info__row" v-if="object.owner">
                                    <span class="details__info__row__label">Owner</span>
                                    <span class="details__info__row__value">{{ object.owner }}</span>
                                </label>
                                <label class="details__info__row" v-if="object.modified">
                                    <span class="details__info__row__label">Modified</span>
                                    <span class="details__info__row__value">{{ object.modified }}</span>
                                </label>
                                <label class="details__info__row" v-if="object.opened">
                                    <span class="details__info__row__label">Opened</span>
                                    <span class="details__info__row__value">{{ object.opened }}</span>
                                </label>
                                <label class="details__info__row" v-if="object.created">
                                    <span class="details__info__row__label">Created</span>
                                    <span class="details__info__row__value">{{ object.created }}</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    </transition>
                    <transition name="fade">
                        <div class="tab__content tab__content_activity" v-show="activeTab === 'activity'" :class="{ active : activeTab === 'activity'}">
                            <div class="activity__wrapper">
                                <div
                                    :class="activity.type"
                                    class="activity__section"
                                    v-for="activity in object.activities"
                                >
                                    <div class="activity__section__title">
                                        <div class="title__text">{{ activity.title }}</div>
                                        <div class="title__datetime">{{ activity.date }}</div>
                                    </div>
                                    <div class="activity__section__description">{{ activity.description }}</div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "AdditionalInfoComponent",
        data() {
            return {
                activeTab: "details",
                editing : false,
            }
        },
        computed: {
            isVisibleAdditionalInfoSidebar() {
                return this.isVisibleAdditionalInfo();
            },
            object() {
                return this.getCurrentObject();
            },
            type() {
                return this.object.type ? this.object.type.toUpperCase() : "";
            }
        },
        methods: {
            ...mapGetters(['isVisibleAdditionalInfo', 'getCurrentObject', 'getCurrentObjectIndex', 'getCurrentObjectType']),
            ...mapActions(['hideAdditionalInfo', 'updateCurrentObject']),
            changeTab(tabName) {
                this.activeTab = tabName;
            },
            startEdit() {
                this.editing = true;
                this.$nextTick(function () {
                    this.$refs.fileName.focus()
                })
            },
            stopEdit() {
                this.$store.dispatch('updateCurrentObject');
                this.editing = false;
            },
            close() {
                this.activeTab = "details";
                this.hideAdditionalInfo();
            }
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

    .additional-info {
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

        .additional-info__backdrop {
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

            .additional-info__content {
                right: 0;
            }

            .additional-info__backdrop {
                opacity: 1;
            }
        }

        .additional-info__content {
            position: absolute;
            right: -100%;
            height: 100%;
            width: 320px;
            box-shadow: -8px 0 18px 0 rgba(25,42,70,.13);
            background: #fff;
            transition: all .5s ease-in-out;

            .additional-info__content__header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-radius: .25rem .25rem 0 0;
                border-bottom: 1px solid #EDEDED;
                padding: 1rem 1.5rem;

                .title__text,
                .title__input {
                    font-size: .95rem;
                }

                .title__input {
                    padding: 0;
                    border: none;
                    color: #475F7B;
                    font-family: 'Rubik', 'sans-serif';
                    font-weight: 400;
                    line-height: 1.4;
                    letter-spacing: .01rem;
                    box-sizing: border-box;
                    max-width: 65%;
                }

                .actions {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;

                    .action {
                        height: 22px;
                        width: 22px;
                        margin-left: .5rem;
                        cursor: pointer;

                        svg {
                            width: 100%;
                            height: 100%;

                            * {
                                transition: all .3s ease-in-out;
                            }
                        }

                        &:hover {
                            svg {
                                path, rect, circle,
                                polyline, line, polygon {
                                    stroke: #719DF0;
                                }
                            }
                        }

                        &.action__start-edit {


                            &:hover {
                                svg {
                                    g > path {
                                        stroke: #fff;
                                    }
                                    g > g > path {
                                        fill: #719DF0;
                                    }
                                }
                            }
                        }

                        &.action__stop-edit {
                            width: 22px;
                            height: 22px;

                            svg {
                                g > g > path {
                                    animation-name: pulse;
                                    animation-duration: 2s;
                                    animation-iteration-count: infinite;
                                }
                            }
                        }

                        @keyframes pulse {
                            0% {
                                fill: #475F7B;
                            }

                            50% {
                                fill: #719DF0;
                            }

                            100% {
                                fill: #475F7B;
                            }
                        }

                        &.action__close {
                            height: 16px;

                            &:hover {
                                svg {
                                    g > g > path {
                                        fill: #719DF0;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            .additional-info__content__tabs {
                .tabs__headers {
                    display: flex;
                    border-bottom: 1px solid #EDEDED;

                    .tab__header {
                        box-sizing: border-box;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        padding: .7rem 0;
                        text-align: center;
                        border-right: 1px solid #EDEDED;
                        font-size: .85rem;
                        font-weight: 400;
                        cursor: pointer;
                        transition:
                                color .3s ease-in-out,
                                box-shadow .3s ease-in-out,
                                border-color .3s ease-in-out;
                        user-select: none;

                        &:hover {
                            color: #5A8DEE;

                            svg {
                                g > g > path {
                                    fill: #719DF0;
                                }
                            }
                        }

                        &:last-of-type {
                            border-right: none;
                        }

                        &.active {
                            color: #5A8DEE;
                            border: 1px solid #5A8DEE;
                            box-shadow: 0 0 6px 0 rgba(90,141,238,.6);

                            &:first-of-type {
                                border-left: none;
                            }

                            &:last-of-type {
                                border-right: none;
                            }

                            svg {
                                g > g > path {
                                    fill: #719DF0;
                                }
                            }
                        }

                        .header-icon {
                            width: 18px;
                            height: 18px;
                            margin-right: .3rem;

                            svg {
                                width: 100%;
                                max-height: 100%;

                                * {
                                    transition: all .3s ease-in-out;
                                }
                            }
                        }
                    }
                }

                .tabs__contents {
                    overflow: hidden;

                    .tab__content {
                        display: none;
                        overflow: auto;

                        &.active {
                            display: block;
                        }
                        
                        &.tab__content_details {
                            .details__main {
                                box-sizing: border-box;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                flex-wrap: wrap;
                                flex-direction: column;
                                height: auto;
                                width: 100%;
                                padding: 1.5rem;
                                border-bottom: 1px solid #ededed;

                                .details__preview {
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    height: 100px;
                                    width: 100%;
                                }

                                .details__file_size {
                                    margin-top: 2rem;
                                    font-size: .8rem;
                                    font-weight: 400;
                                }
                            }

                            .details__info {
                                padding: .5rem 1.5rem 0 1.5rem;

                                .details__info__header {
                                    margin: .7rem 0 0 0;
                                    color: #BAC0C7;
                                    text-transform: uppercase;
                                    letter-spacing: 1px;
                                    line-height: 1.4;
                                    font-size: .65rem;
                                    font-weight: 500;
                                    user-select: none;
                                }

                                .details__info__rows {
                                    .details__info__row {
                                        display: flex;
                                        justify-content: space-between;
                                        align-items: center;
                                        margin-top: 1rem;

                                        .details__info__row__label {
                                            font-size: .85rem;
                                            user-select: none;
                                            transition: all .3s ease-in-out;

                                            &.changeable:hover {
                                                color: #5A8DEE;
                                                cursor: pointer;
                                            }
                                        }

                                        .details__info__row__value {
                                            font-size: .85rem;
                                            font-weight: 500;

                                            .custom-checkbox {
                                                position: relative;
                                                display: block;
                                                width: 42px;
                                                height: 20px;
                                                padding: 0;
                                                border-radius: .8rem;
                                                background-color: #E7EDF3;
                                                cursor: pointer;
                                                transition: all .3s ease-in-out;

                                                &:before {
                                                    content: "";
                                                    position: absolute;
                                                    left: 1px;
                                                    top: 1px;
                                                    height: 18px;
                                                    width: 18px;
                                                    border-radius: 50%;
                                                    background: #fff;
                                                    transition: all .3s ease-in-out;
                                                }
                                            }

                                            input[type=checkbox] {
                                                display: none;

                                                &:checked + .custom-checkbox {
                                                    background-color: #5A8DEE;
                                                    box-shadow: 0 0 8px 0 rgba(90,141,238,.8);

                                                    &:before {
                                                        left: calc(100% - 19px);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        &.tab__content_activity {
                            box-sizing: border-box;
                            width: 100%;
                            height: 100%;
                            padding: .5rem 1.5rem 0 1.5rem;

                            .activity__wrapper {
                                width: 100%;
                                height: 100%;
                                margin-top: 1rem;
                                border-left: 1px solid #EDEDED;

                                .activity__section {
                                    position: relative;
                                    margin-top: 1.5rem;
                                    margin-bottom: 1.5rem;
                                    padding-left: 1.6rem;

                                    &:first-of-type {
                                        margin-top: 0;
                                    }

                                    &:before {
                                        content: "";
                                        position: absolute;
                                        top: 0;
                                        left: -7px;
                                        display: block;
                                        width: 14px;
                                        height: 14px;
                                        border-radius: 50%;
                                        border: 0 solid #fff;
                                        background: #fff;
                                        box-shadow: 0 2px 6px 0 rgba(25,42,70,.3);
                                    }

                                    &:after {
                                        content: "";
                                        position: absolute;
                                        top: 3px;
                                        left: -4px;
                                        display: block;
                                        width: 8px;
                                        height: 8px;
                                        border-radius: 50%;
                                        box-shadow: 1px 2px 6px 0 rgba(25,42,70,.3);
                                    }

                                    &.add:after {
                                        background: #39DA8A;
                                    }

                                    &.edit:after {
                                        background: #00CFDD;
                                    }

                                    &.delete:after {
                                        background: #FF5B5C;
                                    }

                                    &.share:after {
                                        background: #FDAC41;
                                    }

                                    .activity__section__title {
                                        display: flex;
                                        justify-content: space-between;
                                        align-items: center;
                                        margin-bottom: .5rem;

                                        .title__text {
                                            font-size: .9rem;
                                            margin-right: 1rem;
                                        }

                                        .title__datetime {
                                            color: #828D99;
                                            font-size: .65rem;
                                        }
                                    }

                                    .activity__section__description {
                                        color: #828D99;
                                        font-size: .65rem;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>