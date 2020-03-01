<template>
    <div class="file">
        <div class="file__more">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 width="24" height="24"
                 viewBox="0 0 172 172"
                 style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#727e8c"><path d="M21.5,64.5c-11.86979,0 -21.5,9.63021 -21.5,21.5c0,11.86979 9.63021,21.5 21.5,21.5c11.86979,0 21.5,-9.63021 21.5,-21.5c0,-11.86979 -9.63021,-21.5 -21.5,-21.5zM86,64.5c-11.86979,0 -21.5,9.63021 -21.5,21.5c0,11.86979 9.63021,21.5 21.5,21.5c11.86979,0 21.5,-9.63021 21.5,-21.5c0,-11.86979 -9.63021,-21.5 -21.5,-21.5zM150.5,64.5c-11.86979,0 -21.5,9.63021 -21.5,21.5c0,11.86979 9.63021,21.5 21.5,21.5c11.86979,0 21.5,-9.63021 21.5,-21.5c0,-11.86979 -9.63021,-21.5 -21.5,-21.5z"></path></g></g></svg>
        </div>
        <div class="file__preview">
            <img src="../assets/file-types/pdf.png" alt="PDF">
        </div>
        <div class="file__info">
            <div class="file__info__name">Felecia Resume.pdf</div>
            <div class="file__info__size">12.85kb</div>
            <div class="file__info__last-accessed">Last accessed : 3 hours ago</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FileComponent"
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
            transform: scale(1.01);
            box-shadow: 0 0 6px 0 rgba(90,141,238,.6);
        }

        * {
            box-sizing: border-box;
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
                height: 38px;
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