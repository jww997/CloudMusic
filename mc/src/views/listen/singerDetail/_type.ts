import P from '@/apis/listen/typeParams';
import R from '@/apis/listen/typeResult';

export interface PARAMS extends P.PARAMS_ARTIST_DETAIL { }
export interface PARAMS2 extends P.PARAMS_ARTIST_SONGS { }

export interface RESULT extends R.RESULT_ARTIST_DETAIL { }
export interface RESULT2 extends R.RESULT_ARTIST_SONGS { }