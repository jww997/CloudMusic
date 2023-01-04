import P from "@/apis/listen/typeParams"
import R from "@/apis/listen/typeResult"

export interface PARAMS extends P.PARAMS_CLOUDSEARCH {
}

export interface PARAMS2 extends P.PARAMS_SEARCH {
}

export interface RESULT extends R.RESULT_CLOUDSEARCH {
}

export interface RESULT2 extends R.RESULT_SEARCH {
}
