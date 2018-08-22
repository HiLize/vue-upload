<template>
    <div>
        <iTable size="default" :data="tableData1" :columns="tableColumns1" stripe></iTable>
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <iPage :transfer="false" :total="100" :current="1" @on-change="changePage"></iPage>
            </div>
        </div>
    </div>
</template>
<script>
import { Table, Page, Poptip, Tag } from "iview";
export default {
    name: "upload",
    components: {
        iTable: Table,
        iPage: Page,
        Poptip,
        Tag
    },
    data () {
        return {
            tableData1: this.mockTableData1(),
            tableColumns1: [
                {
                    title: 'Name',
                    key: 'name'
                },
                {
                    title: 'Sampling Time',
                    key: 'time',
                    render: (h, params) => {
                        return h('div', 'Almost' + params.row.time + 'days');
                    }
                },
                {
                    title: 'Updated Time',
                    key: 'update',
                    render: (h, params) => {
                        return h('div', this.formatDate(this.tableData1[params.index].update));
                    }
                }
            ]
        }
    },
    methods: {
        mockTableData1 () {
            let data = [];
            for (let i = 0; i < 10; i++) {
                data.push({
                    name: 'Business' + Math.floor(Math.random () * 100 + 1),
                    time: Math.floor(Math.random () * 7 + 1),
                    update: new Date()
                })
            }
            return data;
        },
        formatDate (date) {
            const y = date.getFullYear();
            let m = date.getMonth() + 1;
            m = m < 10 ? '0' + m : m;
            let d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            return y + '-' + m + '-' + d;
        },
        changePage () {
            // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
            this.tableData1 = this.mockTableData1();
        }
    }
}
</script>
