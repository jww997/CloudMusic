import P from "@/apis/account/typeParams"
import R from "@/apis/account/typeResult"

export interface PARAMS extends P.PARAMS_USER_DETAIL {
}

export interface PARAMS2 extends P.PARAMS_USER_PLAYLIST {
}

export interface RESULT extends R.RESULT_USER_DETAIL {
}

export interface RESULT2 extends R.RESULT_USER_PLAYLIST {
}
