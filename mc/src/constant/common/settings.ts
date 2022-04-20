/**
 * @description 全局设置常量
 * @author Gavin
 */

// 语言
export enum LanguageEnum {
  En = 'en',
  Zh = 'zh-cn',
}

// 环境
export enum EnvironmentEnum {
  Development = 'development',
  Production = 'production',
}

// 路由导出方式
export enum RouterSourceEnum {
  Frontend = 'frontend',
  Backend = 'backend',
}

// 路由模式
export enum RouterModeEnum {
  Hash = 'hash',
  HISTORY = 'history',
}

// 存储位置命名
export enum TokenStorageNameEnum {
  LocalStorage = 'localStorage',
  SessionStorage = 'sessionStorage',
  Cookie = 'cookie',
}
