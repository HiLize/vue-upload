<template>
    <Select
        v-model="selectValue"
        filterable
        transfer
        clearable
        @on-change="handleChangeSelect"
        size="default"
        :class="className"
        :placeholder="placeholder"
    >
        <Option v-for="item in data" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
</template>

<script>
import { Select, Option } from "iview";
const selectJson = [
    {
        value: 'New York',
        label: 'New York'
    },
    {
        value: 'London',
        label: 'London'
    },
    {
        value: 'Sydney',
        label: 'Sydney'
    },
    {
        value: 'Ottawa',
        label: 'Ottawa'
    },
    {
        value: 'Paris',
        label: 'Paris'
    },
    {
        value: 'Canberra',
        label: 'Canberra'
    }
]
export default {
    components: { Select, Option },
    props: {
        placeholder: {
            type: String,
            default: '请选择'
        },
        className: {
            type: String,
            default: 'selectStyle'
        },
        data: {
            type: Array,
            default: () => {
                return selectJson
            }
        },
        onChange: {
            type:Function,
            default: null
        }
    },
    data() {
        return {
            selectValue: ''
        }
    },
    methods: {
        handleChangeSelect(value) {
            if (typeof value !== 'undefined' && this.onChange) {
                this.onChange(value)
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .selectStyle {
        width: 17rem;
    }
</style>


