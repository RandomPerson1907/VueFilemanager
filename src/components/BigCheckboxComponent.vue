<template>
    <label class="details__info__row__label changeable"><slot></slot>
        <div class="details__info__row__value">
            <input
                    type="checkbox"
                    v-model="checked"
                    :disabled="isDisabled"
            >
            <span class="custom-checkbox"></span>
        </div>
    </label>
</template>

<script>
    export default {
        name: "BigCheckboxComponent",
        props: {
            checked: {
                default: false
            },
            isDisabled: {
                default: false
            }
        },
        data() {
            return {
                isChecked: this.checked
            }
        },
        watch: {
            checked() {
                this.isChecked = this.checked;
            },
            isChecked() {
                this.$emit("input", this.isChecked);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .details__info__row__label {
        font-size: .85rem;
        user-select: none;
        transition: all .3s ease-in-out;

        &.changeable:hover {
            color: #5A8DEE;
            cursor: pointer;
        }
    }

    .details__info__row__value {
        font-size: .85rem;
        font-weight: 500;

        .custom-checkbox {
            position: relative;
            display: block;
            width: 42px;
            height: 20px;
            padding: 0;
            border-radius: .8rem;
            background-color: #E7EDF3;
            cursor: pointer;
            transition: all .3s ease-in-out;

            &:before {
                content: "";
                position: absolute;
                left: 1px;
                top: 1px;
                height: 18px;
                width: 18px;
                border-radius: 50%;
                background: #fff;
                transition: all .3s ease-in-out;
            }
        }

        input[type=checkbox] {
            display: none;

            &:checked + .custom-checkbox {
                background-color: #5A8DEE;
                box-shadow: 0 0 8px 0 rgba(90,141,238,.8);

                &:before {
                    left: calc(100% - 19px);
                }
            }
        }
    }
</style>