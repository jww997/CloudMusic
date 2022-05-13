import * as T from './_type';

export const PARAMS3: T.PARAMS3 = {
  order: 'hot',
  cat: '全部',
  limit: 50,
  offset: 0,
}

export const RESULT: T.RESULT = { tags: [] }
export const RESULT2: T.RESULT2 = {
  all: {
    category: 0,
    hot: false,
    name: '',
    type: 0

  },
  categories: {
    1: '',
    2: '',
    3: '',
    4: '',
  },
  sub: []
}
export const RESULT3: T.RESULT3 = {
  cat: '',
  playlists: [],
  more: false,
  total: 0,
}