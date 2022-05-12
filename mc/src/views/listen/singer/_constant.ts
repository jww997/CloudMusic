import * as T from './_type'
import type { TAGS } from "@/types"

export const PARAMS: T.PARAMS = {
  area: -1,
  type: -1,
  initial: -1,
  limit: 30, // 取出数量
  offset: 0, // 偏移数量
}

export const RESULT: T.RESULT = {
  artists: [],
  more: false,
}

export const LANGUANGE: TAGS[] = [
  { title: '全部', value: -1, },
  { title: '华语', value: 7, },
  { title: '欧美', value: 96, },
  { title: '日本', value: 8, },
  { title: '韩国', value: 16, },
  { title: '其他', value: 0, },
];
export const CLASSIFICATION: TAGS[] = [
  { title: '全部', value: -1, },
  { title: '男歌手', value: 1, },
  { title: '女歌手', value: 2, },
  { title: '乐队', value: 3, },

];
export const FILTER: TAGS[] = [
  { title: '热门', value: -1, },
  { title: 'A', value: 'a', },
  { title: 'B', value: 'b', },
  { title: 'C', value: 'c', },
  { title: 'D', value: 'd', },
  { title: 'E', value: 'e', },
  { title: 'F', value: 'f', },
  { title: 'G', value: 'g', },
  { title: 'H', value: 'h', },
  { title: 'I', value: 'i', },
  { title: 'J', value: 'j', },
  { title: 'K', value: 'k', },
  { title: 'L', value: 'l', },
  { title: 'M', value: 'm', },
  { title: 'N', value: 'n', },
  { title: 'O', value: 'o', },
  { title: 'P', value: 'p', },
  { title: 'Q', value: 'q', },
  { title: 'R', value: 'r', },
  { title: 'S', value: 's', },
  { title: 'T', value: 't', },
  { title: 'U', value: 'u', },
  { title: 'V', value: 'v', },
  { title: 'W', value: 'w', },
  { title: 'X', value: 'x', },
  { title: 'Y', value: 'y', },
  { title: 'Z', value: 'z', },
  { title: '#', value: 0, },
];

