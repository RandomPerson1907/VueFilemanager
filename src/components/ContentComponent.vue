<template>
    <div class="content">
        <h2 class="content__title">All Files</h2>
        <div class="section recently_accessed">
            <h3 class="section__header">Recently accessed files</h3>
            <div class="section__files">
                <file-component>1</file-component>
                <file-component>2</file-component>
                <file-component>3</file-component>
                <file-component>4</file-component>
                <file-component>5</file-component>
                <file-component>6</file-component>
                <file-component>7</file-component>
                <file-component>8</file-component>
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
        height: 100%;
        width: 100%;
        padding: 0 1.5rem;
        overflow-x: hidden;
        overflow-y: auto;

        .content__title {
            margin: 1.5rem 0 0;
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

            &.recently_accessed {
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
        }
    }
</style>