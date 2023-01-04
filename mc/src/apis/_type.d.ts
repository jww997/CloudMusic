export interface LIMIT {
    limit: number // 返回数量
}

export interface OFFSET extends LIMIT {
    offset: number // 偏移数量
}

export interface BEFORE extends LIMIT {
    before?: string // 上一页数据返回的的数据
}

export type TIMESTAMP = { timestamp?: number }

export type CODE = { code?: number }
export type MESSAGE = { message: string }
