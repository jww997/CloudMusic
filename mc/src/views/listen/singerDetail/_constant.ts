import { TableColumn } from '@arco-design/web-vue/es/table/interface';
import * as T from './_type';

export const PARAMS: T.PARAMS = { id: '' }
export const PARAMS2: T.PARAMS2 = { id: '', limit: 50, offset: 0 }
export const RESULT: T.RESULT = {
  artist: {
    alias: [],
    id: 0,
    img1v1Url: '',
    name: '',
    picId: 0,
    picUrl: '',
    trans: ''
  },
  hotSongs: [],
  more: false
}
export const RESULT2: T.RESULT2 = {
  songs: [],
  more: false,
  total: 0
}

export const COLUMNS: TableColumn[] = [
  { title: '歌曲', dataIndex: 'name' },
  { title: '专辑', dataIndex: 'al' },
  { title: '时长', dataIndex: 'dt' },
];