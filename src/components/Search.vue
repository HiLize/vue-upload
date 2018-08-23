<template>
    <div class="searchInputContent">
        <Icon type="ios-search" class="searchIconStyle"/>
        <iInput
            v-model="value"
            :placeholder="placeholder"
            enter-button="搜索"
            size="default"
            :search="true"
            :class="className"
            @on-search="handleSearch"
        >
            <Icon type="ios-search" slot="prefix" />
        </iInput>
    </div>
</template>

<script>
import { Input, Icon } from "iview";

export default {
    components: { iInput: Input, Icon },
    props: {
        placeholder: {
            type: String,
            default: '请输入搜索内容'
        },
        onSearch: {
            type: Function,
            default: null
        },
        className: {
            type: String,
            default: 'defaultClass'
        }
    },
    data() {
        return {
            value: ""
        }
    },
    methods: {
        handleSearch(value) {
            if (typeof value !== 'undefined' && this.onSearch) {
                this.onSearch(value)
            }
        }
    }
}
</script>

<style lang="less" scoped>
.searchInputContent {
    position: relative;
    height: 32px;

    .searchIconStyle {
        position: absolute;
        top: 0;
        left: 0;
        width: 32px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        z-index: 1;
    }
    .defaultClass {
        position: absolute;
        top: 0;
        left: 0;
        width: 25rem;
        z-index: 0;
    }
}
</style>


