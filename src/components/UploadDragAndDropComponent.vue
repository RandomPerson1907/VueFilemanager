<template>
    <div class="upload-drag-and-drop" :class="{active}" @drop.prevent="addFile">
        DRAG AND DROP!!!!!
    </div>
</template>

<script>
    export default {
        name: "UploadDragAndDropComponent",
        props: {
            active: {
                default: false
            }
        },
        methods: {
            addFile(e) {
                let droppedFiles = e.dataTransfer.files;
                if(!droppedFiles) return;
                ([...droppedFiles]).forEach(f => {
                    console.log(f);
                    this.$emit('stopDragging');
                });
            },
        }
    }
</script>

<style lang="scss" scoped>
    .upload-drag-and-drop {
        box-sizing: border-box;
        position: absolute;
        bottom: -100%;
        left: 15%;
        width: 70%;
        height: 70%;
        border: 2px dashed #5A8DEE;
        border-radius: 3px;
        background: rgba(255,255,255,.6);
        z-index: 2;
        transition: all .3s ease-in-out;

        &.active {
             bottom: 15%;
         }
    }
</style>