/**
 * @description 请求方法类型
 * @author Gavin
 */





// 取出数量
export interface Limit {
  limit?: number;
}

// 状态码
export interface CODE {
  code: number;
}

// 返回的数据结构
export interface RootObject<T> extends CODE {
  result: T;
  categorye: number;
  hasTaste: boolean;
}

// export interface RootObject1<T> extends CODE {
//   playlists: T;
//   total: number;
//   more: boolean;
//   cat: string;
// }
