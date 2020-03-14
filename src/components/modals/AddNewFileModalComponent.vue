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
                <label class="modal__label modal__label_file">
                    <span class="modal__text">Drag & Drop or click to select</span>
                    <input class="modal__file" type="file" multiple @change="addFiles">
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
                    name: '',
                    link: '',
                    type: '',
                    size: '',
                    modified: '',
                    share: false,
                    synchronization: false,
                    backup: false,
                    location: '',
                    owner: '',
                    opened: '',
                    created: '',
                    activities: []
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
            async addFiles(event) {
                let files = event.target.files;

                for (const file of files) {
                    this.fillFileInfo(file);
                    await this.addNewFile(
                        this.cloneNewFile()
                    );
                    this.clear();
                }
            },
            cloneNewFile() {
                return Object.assign({}, this.newFile)
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
            clear() {
                this.newFile = Object.assign({}, {
                    name: '',
                    link: '',
                    type: '',
                    size: '',
                    modified: '',
                    share: false,
                    synchronization: false,
                    backup: false,
                    location: '',
                    owner: '',
                    opened: '',
                    created: '',
                    activities: []
                });
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