<template>
    <div class="upload-drag-and-drop" :class="{active}">
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
        }
    }
</script>

<style lang="scss" scoped>
    .upload-drag-and-drop {
        box-sizing: border-box;
        position: absolute;
        bottom: -100%;
        left: 3%;
        width: 94%;
        height: 50%;
        border: 2px dashed #5A8DEE;
        border-bottom: none;
        border-radius: 3px;
        background: rgba(255,255,255,.6);
        z-index: 2;
        transition: all .3s ease-in-out;

        &.active {
             bottom: 0;
         }
    }
</style>