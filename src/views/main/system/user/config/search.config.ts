import {IForm} from '@/base-ui/form'

export const formConfig:IForm = {
    formItem: [
        {
          field:'id',
          type:'input',
          label:'id',
          placeholder:'请输入id'
        },
        {
          field:'name',
          type:'input',
          label: "用户名",
          rules: [],
          placeholder: "请输入用户名",
        },
        {
          field:'password',
          type:'password',
          label: "密码",
          rules: [],
          placeholder: "请输入密码",
        },
        {
          field:'sport',
          type:'select',
          label: "喜欢的运动",
          rules: [],
          placeholder: "请选择喜欢的运动",
          options:[
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

export interface UserTable {
  cellphone: number;
  createAt: string;
  departmentId: number;
  enable: number;
  id: number;
  name: string;
  realname: string;
  roleId: number;
  updateAt: string;
}