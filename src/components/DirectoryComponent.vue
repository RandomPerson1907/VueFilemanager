<template>
    <div class="directory">
        <div class="directory__icon">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 width="24" height="24"
                 viewBox="0 0 172 172"
                 style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b3c0ce"><path d="M28.66667,28.66667c-7.84216,0 -14.33333,6.49117 -14.33333,14.33333v86c0,7.84216 6.49117,14.33333 14.33333,14.33333h114.66667c7.84216,0 14.33333,-6.49117 14.33333,-14.33333v-71.66667c0,-7.84216 -6.49117,-14.33333 -14.33333,-14.33333h-57.33333l-14.33333,-14.33333zM28.66667,43h37.0651l14.33333,14.33333h63.26823v71.66667h-114.66667z"></path></g></g></svg>
        </div>
        <div class="directory__info">
            <div class="directory__info__name">Project</div>
            <div class="directory__info__size">2 files, 14.05mb</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DirectoryComponent"
    }
</script>

<style lang="scss" scoped>
    .directory {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        padding: .5rem .75rem;
        border: 1px solid #DFE3E7;
        border-radius: .25rem;
        cursor: pointer;
        transition: box-shadow .3s ease-in-out;

        &:hover {
            transform: scale(1.01);
            box-shadow: 0 0 6px 0 rgba(90,141,238,.6);
        }

        .directory__info {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            padding-left: 1rem;
            background-color: #fff;


            * {
                width: 100%;
            }

            .directory__info__name {
                font-size: 12.8px;
                font-weight: 500;
            }

            .directory__info__size {
                font-size: 10px;
                font-weight: 400;
                color: #828D99;
            }
        }
    }
</style>