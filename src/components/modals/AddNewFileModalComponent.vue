<template>
    <modal-component
            :active="modalAction === 'addNewFile'"
            @modal-close="fireCloseModal"
            @modal-submit="uploadFiles"
    >
        <template v-slot:header>
            Upload new file
        </template>
        <template v-slot:body>
            <div class="modal__section" v-if="!files.length">
                <label
                    class="modal__label modal__label_file"
                    @dragenter.prevent
                    @dragover.prevent
                    @dragleave.prevent
                    @drop.prevent="addFilesFromDrag"
                >
                    <span class="modal__text">Drag & Drop or click to select</span>
                    <input class="modal__file" type="file" multiple @change="addFiles">
                </label>
            </div>
            <div class="modal__section" v-if="files.length">
                <div class="modal__header">
                    <div class="modal__header__item">File name</div>
                    <div class="modal__header__item">File size</div>
                </div>
                <div
                    class="modal__label"
                    v-for="file in files"
                >
                    <div class="modal__text">{{ file.name }}{{ fileType(file.type) }}</div>
                    <div class="modal__text">{{ file.size }}</div>
                </div>
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
                files: [],
                newFile: {},
            }
        },
        computed: {
            ...mapState(['modalAction', 'currentDirectory']),
        },
        methods: {
            ...mapMutations(['setModalAction', 'clearCurrentObject', 'clearTargetObject', 'setProgressMaxValue']),
            ...mapActions(['updateProgress', 'addNewFile']),
            fileType(type) {
                return type ? `.${type}` : "";
            },
            addFilesFromDrag(event) {
                let droppedFiles = event.dataTransfer.files;
                if(!droppedFiles) return;
                ([...droppedFiles]).forEach(file => {
                    this.addFile(file);
                });
            },
            addFiles(event) {
                for (const file of event.target.files) {
                    this.addFile(file)
                }
            },
            addFile(file) {
                this.fillFileInfo(file);
                this.files.push(Object.assign({}, this.newFile));
                this.newFile = {};
            },
            async uploadFiles() {
                for (const file of this.files) {
                    await this.addNewFile(file);
                }
                this.fireCloseModal();
            },
            getFileExtension(filename) {
                return filename.split('.').pop()
            },
            getFileName(filename) {
                let fileNameArray = filename.split('.');
                fileNameArray.pop();
                return fileNameArray.join();
            },
            fillFileInfo(file) {
                this.setFileName(this.getFileName(file.name))
                    .setFileLink("#")
                    .setFileType(this.getFileExtension(file.name))
                    .setFileSize(file.size)
                    .setFileModified(file.lastModified)
                    .setAdditionalDefaultInfo();
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
            fireCloseModal() {
                setTimeout(() => {
                    this.files = [];
                }, 350);
                this.setModalAction('');
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