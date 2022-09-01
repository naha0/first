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
          field:'realname',
          type:'input',
          label: "真实姓名",
          rules: [],
          placeholder: "请输入真实姓名",
        },
        {
          field:'enable',
          type:'select',
          label: "用户状态",
          rules: [],
          placeholder: "请选择用户状态",
          options:[
              {
                  title:'启用',
                  value:'1'
              },
              {
                  title:'禁用',
                  value:'0'
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