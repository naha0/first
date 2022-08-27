import {IForm} from '@/base-ui/form'

export const formConfig:IForm = {
    formItem: [
        {
          type:'input',
          label:'id',
          placeholder:'请输入id'
        },
        {
          type:'input',
          label: "用户名",
          rules: [],
          placeholder: "请输入用户名",
        },
        {
          type:'password',
          label: "密码",
          rules: [],
          placeholder: "请输入密码",
        },
        {
          type:'select',
          label: "喜欢的运动",
          rules: [],
          placeholder: "请选择喜欢的运动",
          option:[
              {
                  title:'篮球',
                  value:'basketball'
              },
              {
                  title:'足球',
                  value:'football'
              }
          ]
        },
        {
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