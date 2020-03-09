<template>
    <button class="primary-button" @click="buttonClicked"><slot></slot></button>
</template>

<script>
    export default {
        name: "ButtonComponent",
        methods: {
            buttonClicked() {
                this.$emit('click');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .primary-button {
        width: 100%;
        height: 38px;
        padding: .5rem 1.5rem;
        border: 0;
        box-shadow: 0 4px 12px 0 rgba(90,141,238,.6);
        background-color: #5a8dee;
        color: #FFF;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.6rem;
        border-radius: .25rem;
        transition: all .3s ease;
        cursor: pointer;
        
        * {
            color: #FFF;
        }

        &:hover {
            background-color: #719DF0;
            box-shadow: 0 7px 13px 0 rgba(90,141,238,.6);
        }
    }
</style>