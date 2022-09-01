import {IForm} from '@/base-ui/form'

export const formConfig:IForm = {
    formItem: [
        {
          field:'name',
          type:'input',
          label: "角色名称",
          rules: [],
          placeholder: "请输入角色名称",
        },
        {
            field:'intro',
            type:'input',
            label: "权限介绍",
            rules: [],
            placeholder: "请输入权限介绍",
          },
        {
          field:'createTime',
          type:'datepicker',
          label: "创建时间",
          otherOptions:
              {   
                  type:'daterange',
                  startPlaceholder:'开始时间',
                  endPlaceholder:'结束时间',   
                  rangeSeparator:'-'
              }
        }
    ],
    labelWidth: '120px',
    colLayout:{
        span:8
    },
    itemStyle: {
        padding: '20px 10px'
    }

}
