type IFormType =  'input' | 'select' | 'password' | 'datepicker'

export interface IFormItem{
    field:string,
    type:IFormType
    label:string
    rules?:any[]
    placeholder?:any,
    options?:any[],
    otherOptions?:any,
}

export interface IForm{
    formItem:IFormItem[]
    labelWidth:string
    colLayout:any
    itemStyle:any
}