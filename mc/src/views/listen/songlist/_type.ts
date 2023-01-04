import P from "@/apis/listen/typeParams"
import R from "@/apis/listen/typeResult"

export interface PARAMS extends P.PARAMS_PLAYLIST_HOT {
}

export interface PARAMS2 extends P.PARAMS_PLAYLIST_CATLIST {
}

export interface PARAMS3 extends P.PARAMS_TOP_PLAYLIST {
}

export interface RESULT extends R.RESULT_PLAYLIST_HOT {
}

export interface RESULT2 extends R.RESULT_PLAYLIST_CATLIST {
}

export interface RESULT3 extends R.RESULT_TOP_PLAYLIST {
}
