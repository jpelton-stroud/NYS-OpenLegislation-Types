import { ChamberType } from "./shared"

export interface Person {
    personId: number
    fullName: string
    firstName: string
    middleName: string | null
    lastName: string
    email: string | null
    prefix: string | null
    suffix: string | null
    verified: boolean // TODO: what is this?
    imgName: "no_image.jpg" | string // imgName can be appended to "https://legislation.nysenate.gov/static/img/business_assets/members/mini/"
}

export interface MemberToken {
    sessionMemberId: number
    shortName: string
    sessionYear: number
    districtCode: number
    alternate: boolean // appears to be "true" only if the member's shortName code changed during the session
    memberId: number
}

export interface Member extends MemberToken {
    chamber: ChamberType
    incumbent: boolean
    fullName: string
    imgName: string
}

export interface MemberMap extends Member {
    person: Person
    sessionShortNameMap: {
        [key: string]: MemberToken[] // key is the 4 digit year in which the session began
    }
}
