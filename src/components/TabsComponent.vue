<template>
    <div class="tabs" v-if="tabs.length > 1">
        <div
            class="previous-tabs"
            :class="{ disable: startIndex <= 0}"
            v-if="tabs.length > maxTabsCount"
            @click="goToPreviousTabs"
        >
            <
        </div>
        <div
            class="tab"
            :class="{active : index === currentTabIndex}"
            v-for="(tab, index) in tabs"
            :key="index"
            v-if="index < startIndex + maxTabsCount && index >= startIndex"
        >
            <div class="tab__header">
                {{ tab.name }}
            </div>
            <div class="tab__controls">
                <div class="tab__control tab__control__close" @click="closeTab(index)">x</div>
            </div>
        </div>
        <div
                class="next-tabs"
                :class="{ disable: currentTabIndex >= tabs.length - 1}"
                v-if="tabs.length > maxTabsCount"
                @click="goToNextTabs"
        >
            >
        </div>
    </div>
</template>

<script>
    import {mapMutations, mapState} from "vuex";

    export default {
        name: "TabsComponent",
        data() {
            return {
                maxTabsCount: 3,
                startIndex: 0,
            }
        },
        computed: {
            ...mapState(['tabs', 'currentTabIndex']),
        },
        watch: {
            currentTabIndex() {
                this.startIndex = this.currentTabIndex;
                if (this.startIndex < 0) {
                    this.startIndex = 0;
                } else if (this.startIndex > this.tabs.length - this.maxTabsCount) {
                    this.startIndex = this.tabs.length - this.maxTabsCount;
                }
            }
        },
        methods: {
            ...mapMutations(['removeTab', 'setCurrentTab']),
            closeTab(index) {
                this.removeTab(index);
                console.log('Closed tab ' + index);
            },
            goToPreviousTabs() {
                this.startIndex--;
                this.setCurrentTab(this.currentTabIndex - 1);
                if (this.startIndex < 0) {
                    this.startIndex = 0;
                }

                if (this.currentTabIndex < 0) {
                    this.setCurrentTab(0);
                }
            },
            goToNextTabs() {
                this.startIndex++;
                this.setCurrentTab(this.currentTabIndex + 1);
                if (this.startIndex > this.tabs.length - this.maxTabsCount) {
                    this.startIndex = this.tabs.length - this.maxTabsCount;
                }
                if (this.currentTabIndex >= this.tabs.length - 1) {
                    this.setCurrentTab(this.tabs.length - 1);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tabs {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 100%;
        height: 40px;
        transition: all .3s ease-in-out;

        .previous-tabs,
        .next-tabs {
            height: 100%;
            width: 150px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #DFE3E7;
            border-top-color: transparent;
            cursor: pointer;
            user-select: none;
            transition: all .3s ease-in-out;

            &:hover {
                border: 1px solid #93b4f3;
                box-shadow: 0 0 6px 0 rgba(90, 141, 238, 0.6);
            }

            &.disable {
                cursor: not-allowed;

                &:hover {
                    border: 1px solid #DFE3E7;
                    border-top-color: transparent;
                    box-shadow: none;
                }
            }
        }

        .tab {
            height: 100%;
            width: 100%;
            min-width: 240px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #DFE3E7;
            border-top-color: transparent;
            cursor: pointer;
            transition: all .3s ease-in-out;

            &:hover {
                border: 1px solid #93b4f3;
                box-shadow: 0 0 6px 0 rgba(90, 141, 238, 0.6);

                .tab__controls {
                    visibility: visible;
                    opacity: 1;
                }
            }

            &.active {
                border: 1px solid #93b4f3;
                box-shadow: 0 0 6px 0 rgba(90, 141, 238, 0.6);
            }

            .tab__header {
                margin-left: 40px;
                padding: .5rem;
                width: calc(100% - 80px);
                text-align: center;
            }

            .tab__controls {
                visibility: hidden;
                opacity: 0;
                display: flex;
                align-items: center;
                height: 100%;
                margin-left: auto;
                transition: all .3s ease-in-out;

                .tab__control {
                    display: flex;
                    align-items: center;
                    height: 100%;
                    width: 40px;
                    margin: 0;
                    padding: .5rem 0 .5rem .5rem;
                    user-select: none;
                    transition: all .3s ease-in-out;

                    &:hover {
                        color: #93b4f3;
                    }
                }
            }
        }
    }
</style>