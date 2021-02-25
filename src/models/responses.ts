export interface ResponseBase {
    success: boolean
    message: string
    responseType: string
}

export interface ErrorResponse extends ResponseBase {
    errorCode: number
}

export interface Response extends ResponseBase {
    <T>(result: T): T
}

export interface ListResponse extends Response {
    result: {
        <T>(items: T): T[]
        size: number
    }
    total: number
    offsetStart: number
    offsetEnd: number
    limit: number
    fromDateTime: Date
    toDateTime: Date
}
