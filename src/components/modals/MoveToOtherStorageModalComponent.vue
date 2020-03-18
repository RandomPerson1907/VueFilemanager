<template>
    <modal-component
            :active="modalAction === 'moveToOtherStorage'"
            @modal-close="fireCloseModal"
            @modal-submit="fireMoveToOtherStorage"
    >
        <template v-slot:header>
            Move {{ currentObject.name }} to other storage
        </template>
        <template v-slot:body>
            <div class="modal__section">
                <label class="modal__label">
                    <div class="modal__text">Select storage:</div>
                    <span class="modal__input__wrapper">
                            <select
                                class="modal__input"
                                :class="{error: storageError}"
                                v-model="selectedStorageId"
                            >
                                <option
                                    v-for="storage in storages"
                                    :value="storage.id"
                                >
                                    {{ storage.name }}
                                </option>
                            </select>
                        </span>
                </label>
            </div>
        </template>
    </modal-component>
</template>

<script>
    import {mapActions, mapMutations, mapState} from "vuex";

    export default {
        name: "MoveToOtherStorageModalComponent",
        data() {
            return {
                storageError: false,
                selectedStorageId: false,
            }
        },
        computed: {
            ...mapState(['modalAction', 'storages', 'currentObject'])
        },
        methods: {
            ...mapActions(['moveToOtherStorage']),
            ...mapMutations(['setModalAction', 'clearCurrentObject']),
            fireMoveToOtherStorage() {
                if (this.selectedStorageId !== false) {
                    this.moveToOtherStorage(this.selectedStorageId);
                    this.storageError = '';
                    this.selectedStorageId = false;
                    this.fireCloseModal();
                } else {
                    this.storageError = '';
                }
            },
            fireCloseModal() {
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