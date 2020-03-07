<template>
    <div class="directory" @contextmenu.prevent="$refs.menu.open">
        <div class="directory__context">
            <vue-context ref="menu">
                <li>
                    <a href="#" @click.prevent="openDirectory">Open</a>
                </li>
                <li>
                    <a href="#" @click.prevent="showInfo">Info</a>
                </li>
                <li>
                    <a href="#" @click.prevent="shareDirectory">Share</a>
                </li>
                <li>
                    <a href="#" @click.prevent="deleteDirectory">Delete</a>
                </li>
            </vue-context>
        </div>
        <div class="directory__more" @click="openAdditionalInfo({object: directory, index, type})">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 width="24" height="24"
                 viewBox="0 0 172 172"
                 style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#727e8c"><path d="M21.5,64.5c-11.86979,0 -21.5,9.63021 -21.5,21.5c0,11.86979 9.63021,21.5 21.5,21.5c11.86979,0 21.5,-9.63021 21.5,-21.5c0,-11.86979 -9.63021,-21.5 -21.5,-21.5zM86,64.5c-11.86979,0 -21.5,9.63021 -21.5,21.5c0,11.86979 9.63021,21.5 21.5,21.5c11.86979,0 21.5,-9.63021 21.5,-21.5c0,-11.86979 -9.63021,-21.5 -21.5,-21.5zM150.5,64.5c-11.86979,0 -21.5,9.63021 -21.5,21.5c0,11.86979 9.63021,21.5 21.5,21.5c11.86979,0 21.5,-9.63021 21.5,-21.5c0,-11.86979 -9.63021,-21.5 -21.5,-21.5z"></path></g></g></svg>
        </div>
        <div class="directory__icon">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 width="24" height="24"
                 viewBox="0 0 172 172"
                 style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b3c0ce"><path d="M28.66667,28.66667c-7.84216,0 -14.33333,6.49117 -14.33333,14.33333v86c0,7.84216 6.49117,14.33333 14.33333,14.33333h114.66667c7.84216,0 14.33333,-6.49117 14.33333,-14.33333v-71.66667c0,-7.84216 -6.49117,-14.33333 -14.33333,-14.33333h-57.33333l-14.33333,-14.33333zM28.66667,43h37.0651l14.33333,14.33333h63.26823v71.66667h-114.66667z"></path></g></g></svg>
        </div>
        <div class="directory__info">
            <div class="directory__info__name">{{ directory.name }}</div>
            <div class="directory__info__size">{{ directory.filesCount }}, {{ directory.size }}</div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapMutations} from "vuex";

    export default {
        name: "DirectoryComponent",
        props: {
            directory : {
                required: true
            },
            type : {
                required: true
            },
            index : {
                required: true
            }
        },
        methods: {
            ...mapActions(['openAdditionalInfo']),
            ...mapMutations(['setCurrentObject']),
            openDirectory() {
                console.log('open directory')
            },
            shareDirectory() {
                console.log('shared directory')
            },
            deleteDirectory() {
                console.log('delete directory');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .directory {
        box-sizing: border-box;
        position: relative;
        display: flex;
        align-items: center;
        padding: .5rem .75rem;
        border: 1px solid #DFE3E7;
        border-radius: .25rem;
        cursor: pointer;
        transition: box-shadow .3s ease-in-out;

        &:hover {
            box-shadow: 0 0 6px 0 rgba(90,141,238,.6);
        }

        .directory__context {
            .v-context {
                padding: 0;
                border-radius: .15rem;

                a {
                    margin-left: 2px;
                    padding: .35rem .5rem;
                    color: #475F7B;
                    font-family: 'Rubik', 'sans-serif';
                    font-weight: 400;
                    font-size: .8rem;
                    line-height: 1.4;
                    letter-spacing: .01rem;
                    box-sizing: border-box;
                    border-left: 0 solid #F2F4F4;
                    transition: border-color .3s ease-in-out;

                    &:hover {
                        border-left: 2px solid #5a8dee;
                        margin-left: 0;
                    }
                }
            }
        }

        .directory__more {
            position: absolute;
            right: 0;
            top: calc(50% - 1rem);
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