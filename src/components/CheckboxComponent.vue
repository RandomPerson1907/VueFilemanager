<template>
    <div class="checkbox">
        <label>
            <input class="checkbox__input" type="checkbox" v-model="checked">
            <div class="checkbox__icon">
                <div class="checkbox__icon__circle"></div>
            </div>
        </label>
    </div>
</template>

<script>
    export default {
        name: "CheckboxComponent",
        props: {
            isChecked: {
                default: false
            }
        },
        data() {
            return {
                checked : this.isChecked
            }
        },
        watch: {
            isChecked() {
                this.checked = this.isChecked;
            },
            checked() {
                this.$emit('input');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .checkbox {
        width: 18px;
        height: 18px;

        .checkbox__input {
            display: none;
        }

        .checkbox__icon {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            border: 1px solid #E7EDF3;
            border-radius: 50%;
            background: #fff;
            cursor: pointer;
            transition: all .3s ease-in-out;
            animation: ease-in-out pulse 2s infinite;

            .checkbox__icon__circle {
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: #fff;
                transition: all .3s ease-in-out;
            }
        }

        .checkbox__input:checked + .checkbox__icon {
            animation: none;
            box-shadow: 0 0 8px 0 rgba(90, 141, 238, 0.8);

            .checkbox__icon__circle {
                background: #5A8DEE;
            }
        }
    }

    @keyframes pulse {
        0% {
            box-shadow: 0 0 8px 0 rgba(90, 141, 238, 0);
        }

        50% {
            box-shadow: 0 0 8px 0 rgba(90, 141, 238, 0.8);
        }

        100% {
            box-shadow: 0 0 8px 0 rgba(90, 141, 238, 0);
        }
    }
</style>