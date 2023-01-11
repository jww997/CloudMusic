import P from "@/apis/account/typeParams"
import R from "@/apis/account/typeResult"

export interface PARAMS extends P.PARAMS_USERCOMMENT_FOLLOWS {
}

export interface PARAMS2 extends P.PARAMS_USERCOMMENT_FOLLOWEDS {
}

export interface RESULT extends R.RESULT_USERCOMMENT_FOLLOWS {
}

export interface RESULT2 extends R.RESULT_USERCOMMENT_FOLLOWEDS {
}
