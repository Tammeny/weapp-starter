/**
 * 校验器
 */


// 手机号
export const ValidatePhone = (value) => !/^1[123456789]\d{9}$/.test(value);