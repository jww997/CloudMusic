import P from '@/apis/listen/typeParams';
import R from '@/apis/listen/typeResult';
import T from '@arco-design/web-vue/es/table/interface';
export type TableColumn = T.TableColumn

export interface PARAMS extends P.PARAMS_PLAYLIST_DETAIL { }
export interface PARAMS2 extends P.PARAMS_COMMENT_PLAYLIST { }

export interface RESULT extends R.RESULT_PLAYLIST_DETAIL { }
export interface RESULT2 extends R.RESULT_COMMENT_PLAYLIST { }