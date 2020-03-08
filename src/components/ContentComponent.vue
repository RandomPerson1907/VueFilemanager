<template>
    <div class="content">
        <h2 class="content__title">All Files</h2>
        <div class="section section_with-recently-accessed">
            <h3 class="section__header">Recently accessed files</h3>
            <div class="section__files">
                <file-component
                        v-for="(file, index) in recentlyAccessedFiles"
                        :file="file"
                        type="recentlyAccessedFiles"
                        :index="index"
                ></file-component>
            </div>
        </div>
        <div class="section section_with-directories">
            <h3 class="section__header">Folders</h3>
            <div class="section__files">
                <directory-component
                        v-for="(directory, index) in directories"
                        :directory="directory"
                        type="directories"
                        :index="index"
                ></directory-component>
            </div>
        </div>
        <div class="section section_with-files" :class="{dragging}" @dragenter.prevent="dragStart" @dragover.prevent="dragStart" @dragleave.prevent="dragStop" @drop.prevent="addFile">
            <h3 class="section__header">Files</h3>
            <div class="section__files">
                <file-component
                        v-for="(file, index) in files"
                        :file="file"
                        type="files"
                        :index="index"
                ></file-component>
            </div>
            <div class="section__upload-icon">
                Uploading
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

    export default {
        name: "ContentComponent",
        data() {
            return {
                dragging : false
            }
        },
        computed: {
            ...mapState(["directories", "files", "recentlyAccessedFiles"])
        },
        methods: {
            ...mapGetters(['getFiles', 'getDirectories', 'getRecentlyAccessedFiles']),
            ...mapActions(['pushInfo']),
            dragStart(event) {
                event.stopPropagation();
                this.dragging = true;
            },
            dragStop() {
                this.dragging = false;
            },
            addFile(e) {
                let droppedFiles = e.dataTransfer.files;
                if(!droppedFiles) return;
                this.dragStop();
                let message = '';
                ([...droppedFiles]).forEach(f => {
                    message = f.name;
                    let status = getRandomInt(3);
                    let statuses = [
                        'success',
                        'error',
                        'warning'
                    ];
                    this.pushInfo({type: statuses[status], message: 'Files has been uploaded ' + message});
                });

                function getRandomInt(max) {
                    return Math.floor(Math.random() * Math.floor(max));
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    .content {
        position: relative;
        height: 100%;
        width: 100%;
        padding: 0 1.5rem;
        overflow-x: hidden;
        overflow-y: auto;

        .content__title {
            margin: 1.5rem 1rem 0;
            font-size: 1.1rem;
            font-weight: 400;
            cursor: default;
            user-select: none;
        }

        .section {
            padding-top: .5rem;
            padding-bottom: .5rem;

            &:last-of-type {
                padding-bottom: 1.8rem;
            }

            .section__header {
                color: #BAC0C7;
                text-transform: uppercase;
                letter-spacing: 1px;
                line-height: 1.4;
                font-size: .7rem;
                font-weight: 500;
                cursor: default;
                user-select: none;
            }

            .section__files {
                display: flex;
                flex-wrap: wrap;
                width: 100%;

                .file,
                .directory {
                    width: calc(25% - 2rem);
                    min-width: calc(25% - 2rem);
                    margin: .5rem 1rem;
                }
            }

            &.section_with-recently-accessed,
            &.section_with-directories {
                padding: 1rem;
            }

            &.section_with-recently-accessed {
                .section__files {
                    overflow-x: auto;
                    box-sizing: border-box;
                    flex-wrap: nowrap;
                    padding-right: 1rem;

                    &:after {
                        content: "";
                        min-width: .05rem;
                    }
                }
            }

            &.section_with-files {
                position: relative;
                padding: 1rem;
                border: 2px dashed transparent;
                border-radius: 3px;
                transition: border-color .15s ease-in-out;

                &.dragging {
                    border-color: #5A8DEE;
                }

                .section__upload-icon {
                    position: fixed;
                    bottom: auto;
                    top: auto;
                    left: 25%;
                    width: 50%;
                    height: 40px;
                }
            }
        }
    }
</style>