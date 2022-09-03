export const contentTableConfig = {
    title: '商品列表',
    propList: [
        { prop: "name", label: "商品名称", minWidth: "100"},
        {
            prop: "desc",
            label: "描述",
            minWidth: "100",
        },
        {
            prop: "oldPrice",
            label: "原价",
            minWidth: "100",
            slotName:"oldPrice"
        },
        {
            prop: "newPrice",
            label: "现价",
            minWidth: "100",
        },
        {
            prop: "imgUrl",
            label: "图片",
            minWidth: "100",
            slotName:"image"
        },
        {
            prop: "createAt",
            label: "创建时间",
            minWidth: "100",
            slotName: "createAt",
        },
        {
            prop: "updateAt",
            label: "更新时间",
            minWidth: "100",
            slotName: "updateAt",
        },
        {
            prop: "",
            label: "操作",
            minWidth: "120",
            slotName: "handler",
        },
    ],
    showIndexColumn: true,
    showSelectColumn: true
}