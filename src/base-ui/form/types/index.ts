type IFormType =  'input' | 'select' | 'password' | 'datepicker'

export interface IFormItem{
    type:IFormType
    label:string
    rules?:any[]
    placeholder?:any,
    option?:any[],
    otherOptions?:any,
}

export interface IForm{
    formItem:IFormItem[]
    labelWidth:string
    colLayout:any
    itemStyle:any
}