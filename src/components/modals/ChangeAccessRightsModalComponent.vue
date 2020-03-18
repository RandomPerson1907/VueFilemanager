<template>
    <modal-component
            :active="modalAction === 'changeAccessRights'"
            @modal-close="fireCloseModal"
            @modal-submit="fireChangeAccessRights"
    >
        <template v-slot:header>
            Change access rights
        </template>
        <template v-slot:body>
            <div class="modal__section">
                <label class="modal__label">
                    <div class="modal__text">Access rights (for example 0777):</div>
                    <span class="modal__input__wrapper">
                            <input
                                    type="text"
                                    class="modal__input"
                                    :class="{error: accessRightsError}"
                                    placeholder="Input access rights"
                                    v-model="accessRights"
                            >
                        </span>
                </label>
            </div>
        </template>
    </modal-component>
</template>

<script>
    import {mapActions, mapMutations, mapState} from "vuex";

    export default {
        name: "ChangeAccessRightsModalComponent",
        data() {
            return {
                accessRightsError: false,
                accessRights: ''
            }
        },
        watch: {
            currentObject(currentObject) {
                this.accessRights = currentObject ? currentObject.accessRights : '';
            }
        },
        computed: {
            ...mapState(['modalAction', 'currentObject'])
        },
        methods: {
            ...mapActions(['changeAccessRights']),
            ...mapMutations(['setModalAction', 'clearCurrentObject']),
            fireChangeAccessRights() {
                this.accessRightsError = false;

                if (this.accessRights.trim().length) {
                    this.changeAccessRights(this.accessRights);
                    this.accessRights = '';
                    this.fireCloseModal();
                } else {
                    this.accessRightsError = true;
                }
            },
            fireCloseModal() {
                this.accessRightsError = false;
                this.setModalAction('');
                setTimeout(() => {
                    this.clearCurrentObject();
                }, 350);
            }
        }
    }
</script>

<style scoped>

</style>