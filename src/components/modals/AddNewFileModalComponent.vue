<template>
    <modal-component
            :active="modalAction === 'addNewFile'"
            @modal-close="fireCloseModal"
            @modal-submit="fireAddNewFile"
    >
        <template v-slot:header>
            Upload new file
        </template>
        <template v-slot:body>
            <div class="modal__section" v-if="!fileAdded">
                <label class="modal__label">
                    <span class="modal__text">Drag & Drop file or click to select</span>
                    <input type="file" @change="addFile">
                </label>
            </div>
            <div class="modal__section" v-else>
                <label class="modal__label">
                    <div class="modal__text">Name:</div>
                    <span class="modal__input__wrapper">
                        <input
                                type="text"
                                class="modal__input"
                                :class="{error: errors.name}"
                                placeholder="Input name of new file"
                                v-model="newFile.name"
                        >
                    </span>
                </label>
                <label class="modal__label">
                    <div class="modal__text">Backup:</div>
                    <span
                        class="modal__input__wrapper"
                        :class="{error: errors.backup}"
                    >
                        <checkbox-component
                                v-model="newFile.backup"
                        ></checkbox-component>
                    </span>
                </label>
                <label class="modal__label">
                    <div class="modal__text">Share:</div>
                    <span
                            class="modal__input__wrapper"
                            :class="{error: errors.share}"
                    >
                        <checkbox-component
                                v-model="newFile.share"
                        ></checkbox-component>
                    </span>
                </label>
                <label class="modal__label">
                    <div class="modal__text">Syncronization:</div>
                    <span
                            class="modal__input__wrapper"
                            :class="{error: errors.syncronization}"
                    >
                        <checkbox-component
                                v-model="newFile.syncronization"
                        ></checkbox-component>
                    </span>
                </label>
                <label class="modal__label">
                    <div class="modal__text">Type:</div>
                    <span class="modal__text">{{ newFile.type }}</span>
                </label>
                <label class="modal__label">
                    <div class="modal__text">Size:</div>
                    <span class="modal__text">{{ newFile.size }}</span>
                </label>
                <label class="modal__label">
                    <div class="modal__text">Created:</div>
                    <span class="modal__text">{{ newFile.created }}</span>
                </label>
                <label class="modal__label">
                    <div class="modal__text">Modified:</div>
                    <span class="modal__text">{{ newFile.modified }}</span>
                </label>
                <label class="modal__label">
                    <div class="modal__text">Opened:</div>
                    <span class="modal__text">{{ newFile.opened }}</span>
                </label>
                <label class="modal__label">
                    <div class="modal__text">Owner:</div>
                    <span class="modal__text">{{ newFile.owner }}</span>
                </label>
                <label class="modal__label">
                    <div class="modal__text">Location:</div>
                    <span class="modal__text">{{ newFile.location }}</span>
                </label>
            </div>
        </template>
    </modal-component>
</template>

<script>
    import {mapActions, mapMutations, mapState} from "vuex";
    import moment from "moment";

    export default {
        name: "AddNewFileModalComponent",
        data() {
            return {
                fileAdded: false,
                newFile : {
                    name: ''
                },
                errors : {

                }
            }
        },
        computed: {
            ...mapState(['modalAction', 'currentDirectory'])
        },
        methods: {
            ...mapMutations(['setModalAction', 'clearCurrentObject', 'clearTargetObject', 'setProgressMaxValue']),
            ...mapActions(['updateProgress', 'addNewFile']),
            addFile(event) {
                let file = event.target.files;
                file = this.validateFile(file);

                if (!file)
                    return;

                this.fillFileInfo(file);
            },
            validateFile(file) {
                if (file[0])
                    return file[0];
                else {
                    this.errors.general = 'File has not been uploaded';
                    return false;
                }
            },
            getFileExtension(filename) {
                return filename.split('.').pop()
            },
            fillFileInfo(file) {
                this.setFileName(file.name)
                    .setFileLink("#")
                    .setFileType(this.getFileExtension(file.name))
                    .setFileSize(file.size)
                    .setFileModified(file.lastModified)
                    .setAdditionalDefaultInfo();

                this.fileAdded = true;
            },
            setFileName(filename) {
                this.newFile.name = filename;
                return this;
            },
            setFileLink(filelink) {
                this.newFile.link = filelink;
                return this;
            },
            setFileType(extension) {
                this.newFile.type = extension;
                return this;
            },
            setFileSize(size) {
                this.newFile.size = this.humanFileSize(size);
                return this;
            },
            setFileModified(date) {
                this.newFile.modified = moment(date).format('M D YYYY');
                return this;
            },
            setAdditionalDefaultInfo() {
                this.newFile.share = false;
                this.newFile.synchronization = false;
                this.newFile.backup = false;
                this.newFile.location = this.currentDirectory.location + this.currentDirectory.name;
                this.newFile.owner = "Unknown";
                this.newFile.opened = "Unknown";
                this.newFile.created = moment().format('M D YYYY');
                this.newFile.activities = [
                    {
                        type        : "add",
                        title       : `${this.newFile.owner} added file`,
                        description : `${this.newFile.owner} added file`,
                        date        :  this.newFile.created
                    }
                ];
                return this;
            },
            fireAddNewFile() {
                this.addNewFile(newFile);
                this.fireCloseModal();
            },
            fireCloseModal() {
                this.setModalAction('');
                setTimeout(() => {
                    this.clearCurrentObject();
                    this.clearTargetObject;
                }, 350);
            },
            humanFileSize(bytes, si = true) {
                var thresh = si ? 1000 : 1024;
                if(Math.abs(bytes) < thresh) {
                    return bytes + ' B';
                }
                var units = si
                    ? ['kB','MB','GB','TB','PB','EB','ZB','YB']
                    : ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];
                var u = -1;
                do {
                    bytes /= thresh;
                    ++u;
                } while(Math.abs(bytes) >= thresh && u < units.length - 1);
                return bytes.toFixed(1)+' '+units[u];
            }
        }
    }
</script>