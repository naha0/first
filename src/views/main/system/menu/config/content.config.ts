export const contentTableConfig = {
    title: '菜单列表',
    propList: [
        { prop: "name", label: "用户名", minWidth: "100" },
        {
            prop: "type",
            label: "类型",
            minWidth: "100",
        },
        {
            prop: "url",
            label: "菜单url",
            minWidth: "100",
        },
        { prop: "icon", label: "菜单icon", minWidth: "100" },
        { prop: "permission", label: "按钮权限", minWidth: "100" },
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
    showIndexColumn: false,
    showSelectColumn: false,
    childrenProps:{
        rowKey:'id',
        treeProp:{
            children:'children'
        }
    }
}