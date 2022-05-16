import * as T from './_type';

export const PARAMS: T.PARAMS = {
  area: '内地',
  limit: 30, // 取出数量
  offset: 0, // 偏移数量
}

export const RESULT: T.RESULT = {
  data: [],
  hasMore: false,
  updateTime: 0,
  current: 1, // 当前页数
}

export const AREA: T.TAG[] = [
  // { title: '全部', value: '全部' },
  { title: '内地', value: '内地' },
  { title: '港台', value: '港台' },
  { title: '欧美', value: '欧美' },
  { title: '韩国', value: '韩国' },
  { title: '日本', value: '日本' },
]
