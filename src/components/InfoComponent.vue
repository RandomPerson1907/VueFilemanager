<template>
    <div class="info" :class="{type, showed}">
        {{ message }}
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

    export default {
        name: "InfoComponent",
        data() {
            return {
                showed: false,
                type: false,
                message: false,
                duration: 5000,
            }
        },
        computed: {
            ...mapState(['info', 'infoUpdated'])
        },
        watch: {
            infoUpdated() {
                if (this.showed) {
                    this.showed = false;
                    setTimeout(() => {
                        this.showNextMessage();
                    }, 350);
                } else {
                    this.showNextMessage();
                }
            }
        },
        methods: {
            ...mapMutations(['setInfoMessage', 'removeFirstInfo']),
            ...mapGetters(['getFirstInfo']),
            showNextMessage() {
                if (this.getFirstInfo) {
                    const infoIndex = this.infoUpdated;

                    this.type = this.getFirstInfo().type || false;
                    this.message = this.getFirstInfo().message || false;
                    this.duration = this.getFirstInfo().duration || false;
                    this.removeFirstInfo();
                    this.showed = true;
                    setTimeout(() => {
                        if (infoIndex === this.infoUpdated) {
                            this.showed = false;
                            setTimeout(() => {
                                this.type = false;
                                this.message = false;
                                this.duration = false;
                            }, 350);
                        }
                    }, parseInt(this.duration));
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .info {
        box-sizing: border-box;
        position: absolute;
        bottom: -50px;
        left: 260px;
        right: 0;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 1rem;
        margin-left: 1rem;
        padding-left: 2rem;
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
        background: rgba(31,95,123,.5);
        transition: all .3s ease-in-out;

        &.showed {
             bottom: 0;
         }
    }
</style>