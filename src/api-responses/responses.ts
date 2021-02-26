import { Items } from "../shared/shared"

export interface ResponseBase {
    success: boolean
    message: string
    responseType: string
}

export interface ErrorResponse extends ResponseBase {
    errorCode: number
}

export interface Response<T> extends ResponseBase {
    result: T
}

export interface ListResponse<T> extends ResponseBase {
    result: Items<T[]>
    total: number
    offsetStart: number
    offsetEnd: number
    limit: number
    fromDateTime: Date
    toDateTime: Date
}
