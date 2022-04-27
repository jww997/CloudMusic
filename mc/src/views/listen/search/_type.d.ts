import { OFFSET } from '@/apis/_type'
interface PARAMS extends OFFSET { type?: number }
export type INIT = (
  params: PARAMS,
  callback?: (v: listen_R.RESULT_CLOUDSEARCH) => void
) => void;