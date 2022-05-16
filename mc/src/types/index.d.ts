import { RawRouteComponent } from 'vue'

export type TAG = { title: string; value: number | string; }
export type TAB = {
  title: string
  unit?: string
  type: number
  is: DefineComponent<{}, {}, any>
}