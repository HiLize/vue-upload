<template>
    <div class="tableContent">
        <iTable
            border
            ref="selection"
            size="small"
            :data="tableData1"
            :columns="tableColumns1"
            @on-selection-change="handleSelect"
        />
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <iPage size="small"
                    transfer
                    :total="100"
                    :current="1"
                    @on-change="changePage"
                    show-elevator
                    show-sizer
                    show-total
                    class="pageStyle"
                ></iPage>
            </div>
        </div>
    </div>
</template>
<script>
import { Table, Page, Button } from "iview";
export default {
    name: "upload",
    components: {
        iTable: Table,
        iPage: Page,
        Button
    },
    data () {
        return {
            tableData1: this.mockTableData1(),
            tableColumns1: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '群名称',
                    key: 'groupChatName'
                },
                {
                    title: '群ID',
                    key: 'groupChatID',
                    render: (h, params) => {
                        return h('div', params.row.groupChatID);
                    }
                },
                {
                    title: '群介绍',
                    key: 'describe'
                },
                {
                    title: '学校',
                    key: 'school'
                },
                {
                    title: '人数',
                    key: 'count'
                },
                {
                    title: '创建时间',
                    key: 'creatTime',
                    render: (h, params) => {
                        // 可用render方法统一修改显示内容格式
                        return h('div', this.formatDate(this.tableData1[params.index].creatTime));
                    }
                },
                {
                    title: '操作',
                    key: 'operation',
                    width: 300,
                    align: 'left',
                    render: (h, params) => {
                        return h('div', this.creatButton(h, ['查看详情', '解散', '添加成员', '群公告'], params));
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
                    groupChatName: `群聊${i}`,
                    groupChatID: '群ID' + Math.floor(Math.random () * 100 + 1),
                    describe: '群描述'+i,
                    school: '学校'+Math.floor(Math.random () * 100 + 1),
                    count: Math.floor(Math.random () * 100 + 1),
                    creatTime: new Date()
                })
            }
            return data;
        },
        creatButton(h, array, params) {
            var btn = []
            for (let i = 0; i < array.length; i++) {
                let button = h(
                    'span',
                    {
                        props: {
                            type: 'text',
                            size: 'small',
                            ghost: true
                        },
                        style: {
                            color: '#2d8cf0',
                            marginRight: '5px',
                            cursor: 'pointer'
                        },
                        on: {
                            click: () => {
                                console.log(array[i], params.index)
                            }
                        }
                    },
                    array[i]
                )
                btn.push(button)
            }
            return btn
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
            // 翻页调用抓取新一页数据
            console.log('changePage')
            this.tableData1 = this.mockTableData1();
        },
        handleSelect(selectionArray) {
            // 每次修改都把该数据返回到父组件中 
            console.log(selectionArray, 'select', this.tableData1)
        }
    }
}
</script>

<style>
.tableContent {
    width: 100%;
    margin: auto;
}
.pageStyle {
    font-size: 0.75rem;
}
</style>

