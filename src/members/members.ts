import { Chamber } from "../shared/shared"

export interface SessionMember {
    sessionMemberId: number
    shortName: string
    sessionYear: number
    districtCode: number
    alternate: boolean // appears to be "true" only if the member's shortName code changed during the session
    memberId: number
}

export interface Member extends SessionMember {
    chamber: Chamber
    incumbent: boolean
    fullName: string
    imgName: string
}

export interface MemberFullDetail extends Member {
    person: Person
    sessionShortNameMap: {
        [key: string]: SessionMember[] // key is the 4 digit year in which the session began
    }
}

interface Person {
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
