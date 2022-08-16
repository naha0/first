// 编写好规则
export const rules = {
    num: [
        {required: true, message: "请输入账号", trigger: "blur" },
        { pattern: /^[a-z0-9]{5,10}$/, message: "账号必须是5~10个字母或者数字" },
      ],
    code: [
        { required: true, message: "请输入密码", trigger: "blur" },
        { pattern: /^[a-z0-9]{3,}$/, message: "密码为3个以上的字母或者数字" },
      ]
}