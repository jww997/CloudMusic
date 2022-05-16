import * as T from './_type';

export const PARAMS: T.PARAMS = {
  area: '全部',
  type: '全部',
  order: '上升最快',
  limit: 30, // 取出数量
  offset: 0, // 偏移数量
}

export const RESULT: T.RESULT = {
  count: 0,
  data: [],
  hasMore: false,
  current: 1, // 当前页数
}

export const AREA: T.TAG[] = [
  { title: '全部', value: '全部' },
  { title: '内地', value: '内地' },
  { title: '港台', value: '港台' },
  { title: '欧美', value: '欧美' },
  { title: '韩国', value: '韩国' },
  { title: '日本', value: '日本' },
]
export const TYPE: T.TAG[] = [
  { title: '全部', value: '全部' },
  { title: '官方版', value: '官方版' },
  { title: '原声', value: '原声' },
  { title: '现场版', value: '现场版' },
  { title: '网易出品', value: '网易出品' },
]
export const ORDER: T.TAG[] = [
  { title: '上升最快', value: '上升最快' },
  { title: '最热', value: '最热' },
  { title: '最新', value: '最新' },
]