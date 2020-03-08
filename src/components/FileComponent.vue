<template>
    <div class="file" @contextmenu.prevent="$refs.menu.open">
        <div class="file__context">
            <vue-context ref="menu">
                <li>
                    <a href="#" @click.prevent="showInfo">Info</a>
                </li>
                <li>
                    <a href="#" @click.prevent="shareFile">Share</a>
                </li>
                <li>
                    <a href="#" @click.prevent="openFileInNewWindow">Open in new window</a>
                </li>
                <li>
                    <a href="#" @click.prevent="deleteFile">Delete</a>
                </li>
                <li>
                    <a href="#" @click.prevent="archiveFile">Archive</a>
                </li>
            </vue-context>
        </div>
        <div class="file__more" @click="openAdditionalInfo({object: file, index, type})">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 width="24" height="24"
                 viewBox="0 0 172 172"
                 style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#727e8c"><path d="M21.5,64.5c-11.86979,0 -21.5,9.63021 -21.5,21.5c0,11.86979 9.63021,21.5 21.5,21.5c11.86979,0 21.5,-9.63021 21.5,-21.5c0,-11.86979 -9.63021,-21.5 -21.5,-21.5zM86,64.5c-11.86979,0 -21.5,9.63021 -21.5,21.5c0,11.86979 9.63021,21.5 21.5,21.5c11.86979,0 21.5,-9.63021 21.5,-21.5c0,-11.86979 -9.63021,-21.5 -21.5,-21.5zM150.5,64.5c-11.86979,0 -21.5,9.63021 -21.5,21.5c0,11.86979 9.63021,21.5 21.5,21.5c11.86979,0 21.5,-9.63021 21.5,-21.5c0,-11.86979 -9.63021,-21.5 -21.5,-21.5z"></path></g></g></svg>
        </div>
        <div class="file__preview">
            <img src="../assets/file-types/avi.png" alt="avi" v-if="file.type === 'avi'">
            <img src="../assets/file-types/css.png" alt="css" v-else-if="file.type === 'css'">
            <img src="../assets/file-types/csv.png" alt="csv" v-else-if="file.type === 'csv'">
            <img src="../assets/file-types/dbf.png" alt="dbf" v-else-if="file.type === 'dbf'">
            <img src="../assets/file-types/doc.png" alt="doc" v-else-if="file.type === 'doc'">
            <img src="../assets/file-types/dwg.png" alt="dwg" v-else-if="file.type === 'dwg'">
            <img src="../assets/file-types/exe.png" alt="exe" v-else-if="file.type === 'exe'">
            <img src="../assets/file-types/fla.png" alt="fla" v-else-if="file.type === 'fla'">
            <img src="../assets/file-types/html.png" alt="html" v-else-if="file.type === 'html'">
            <img src="../assets/file-types/iso.png" alt="iso" v-else-if="file.type === 'iso'">
            <img src="../assets/file-types/javascript.png" alt="javascript" v-else-if="file.type === 'js'">
            <img src="../assets/file-types/json-file.png" alt="json" v-else-if="file.type === 'json'">
            <img src="../assets/file-types/mp3.png" alt="mp3" v-else-if="file.type === 'mp3'">
            <img src="../assets/file-types/mp4.png" alt="mp4" v-else-if="file.type === 'mp4'">
            <img src="../assets/file-types/pdf.png" alt="pdf" v-else-if="file.type === 'pdf'">
            <img src="../assets/file-types/powerpoint.png" alt="pptx" v-else-if="file.type === 'pptx'">
            <img src="../assets/file-types/psd.png" alt="psd" v-else-if="file.type === 'psd'">
            <img src="../assets/file-types/rtf.png" alt="rtf" v-else-if="file.type === 'rtf'">
            <img src="../assets/file-types/sketch.png" alt="sketch" v-else-if="file.type === 'sketch'">
            <img src="../assets/file-types/svg.png" alt="svg" v-else-if="file.type === 'svg'">
            <img src="../assets/file-types/txt.png" alt="txt" v-else-if="file.type === 'txt'">
            <img src="../assets/file-types/xls.png" alt="xls" v-else-if="file.type === 'xls'">
            <img src="../assets/file-types/xml.png" alt="xml" v-else-if="file.type === 'xml'">
            <img src="../assets/file-types/zip.png" alt="zip" v-else-if="file.type === 'zip'">
            <img src="../assets/file-types/other.png" alt="other" v-else>
        </div>
        <div class="file__info">
            <div class="file__info__name">{{ file.name }}{{ fileType }}</div>
            <div class="file__info__size">{{ file.size }}</div>
            <div class="file__info__last-accessed">Last accessed : 3 hours ago</div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapMutations} from "vuex";

    export default {
        name: "FileComponent",
        props: {
            file: {
                required: true
            },
            type: {
                required: true
            },
            index: {
                required: true
            },
        },
        computed: {
            fileType() {
                return this.file.type ? `.${this.file.type}` : "";
            }
        },
        methods: {
            ...mapActions(['openAdditionalInfo']),
            ...mapMutations(['setCurrentObject', 'setCurrentObjectIndex', 'setCurrentObjectType']),
            shareFile() {
              console.log('shared file')
            },
            openFileInNewWindow() {
              console.log('opened file in new window');
            },
            deleteFile() {
                console.log('delete file');
            },
            archiveFile() {
                console.log('archive file');
            },
        }
    }
</script>

<style lang="scss" scoped>
    .file {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 180px;
        border-radius: .25rem;
        background-color: #F2F4F4;
        border: 1px solid #DFE3E7;
        overflow: hidden;
        cursor: pointer;
        transition: box-shadow .3s ease-in-out;

        &:hover {
            box-shadow: 0 0 6px 0 rgba(90,141,238,.6);
        }

        * {
            box-sizing: border-box;
        }

        .file__context {
            .v-context {
                padding: 0;
                border-radius: .15rem;

                a {
                    margin-left: 2px;
                    padding: .35rem .5rem;
                    color: #475F7B;
                    font-family: 'Rubik', 'sans-serif';
                    font-weight: 400;
                    font-size: .8rem;
                    line-height: 1.4;
                    letter-spacing: .01rem;
                    box-sizing: border-box;
                    border-left: 0 solid #F2F4F4;
                    transition: border-color .3s ease-in-out;

                    &:hover {
                        border-left: 2px solid #5a8dee;
                        margin-left: 0;
                    }
                }
            }
        }

        .file__more {
            position: absolute;
            right: 0;
            top: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2rem;
            height: 2rem;
            opacity: .4;

            svg {
                width: 14px;
                height: 14px;
                transform: rotate(90deg);
                transition: all .3s ease-in-out;
            }

            &:hover {
                svg {
                    g > g > path {
                        fill: #719DF0;
                    }
                }
            }
        }

        .file__preview {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 110px;
            border-bottom: 1px solid #DFE3E7;

            img {
                width: 30px;
                max-height: 38px;
            }
        }

        .file__info {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            height: 70px;
            padding: 10px 6px;
            background-color: #fff;

            * {
                width: 100%;
            }

            .file__info__name {
                font-size: 12.8px;
                font-weight: 500;
            }

            .file__info__size,
            .file__info__last-accessed {
                font-size: 10px;
                font-weight: 400;
                color: #828D99;
            }
        }
    }
</style>