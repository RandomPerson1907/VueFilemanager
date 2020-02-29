<template>
    <div class="content">
        <h2 class="content__title">All Files</h2>
        <div class="section recently_accessed">
            <h3 class="section__header">Recently accessed files</h3>
            <div class="section__files">
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
            </div>
        </div>
        <div class="section">
            <h3 class="section__header">Folders</h3>
            <div class="section__files">
                <directory-component></directory-component>
                <directory-component></directory-component>
                <directory-component></directory-component>
                <directory-component></directory-component>
                <directory-component></directory-component>
                <directory-component></directory-component>
            </div>
        </div>
        <div class="section">
            <h3 class="section__header">Files</h3>
            <div class="section__files">
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
                <file-component></file-component>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContentComponent"
    }
</script>

<style lang="scss" scoped>
    .content {
        height: 95%;
        width: 96.4%;
        padding: 1.5rem;
        overflow-x: hidden;
        overflow-y: auto;

        .content__title {

        }

        .section {
            overflow-x: hidden;
            overflow-y: auto;
            height: max-content;

            .section__header {
                color: #BAC0C7;
                text-transform: uppercase;
                letter-spacing: 1px;
                line-height: 1.4;
                font-size: .7rem;
                font-weight: 500;
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

            &.recently_accessed {

                .section__files {
                    margin: .5rem 1rem;
                    flex-wrap: nowrap;
                    overflow-x: auto;

                    .file {
                        &:first-of-type {
                            margin-left: 0;
                        }

                        &:last-of-type {
                            margin-right: 0;
                        }
                    }
                }
            }
        }
    }
</style>