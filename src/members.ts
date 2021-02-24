interface SessionMember {
    sessionMemberId: number
    shortName: string
    sessionYear: number
    districtCode: number
    alternate: boolean
    memberId: number
}

interface Person {
    personId: number
    fullName: string
    firstName: string
    middleName: string
    lastName: string
    email: string
    prefix: string
    suffix: string
    verified: boolean
    imgName: string
}

interface Member extends SessionMember {
    chamber: "ASSEMBLY" | "SENATE"
    incumbent: boolean
    fullName: string
    imgName: string
    person: Person
    sessionShortNameMap: {
        [key: string]: SessionMember[]
    }
}
