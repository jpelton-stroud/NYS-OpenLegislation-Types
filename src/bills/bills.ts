import { Items, ChamberType, BillVersion } from "../shared/shared"
import { Member } from "../members/members"
import { AgendaId } from "../agendas/agendas"

export interface BillInfo {
    basePrintNo: string
    session: number
    basePrintNoStr: string
    printNo: string
    billType: {
        chamber: ChamberType
        desc: Capitalize<ChamberType>
        resolution: boolean
    }
    title: string
    activeVersion: BillVersion
    year: number
    publishedDateTime: Date
    substitutedBy: Pick<BillId, "basePrintNo" | "session"> | null
    sponsor: {
        member: Member
        budget: boolean
        rules: boolean // Sponsored by Rules Committee
    }
    reprintOf: unknown | null
    summary: string
    signed: boolean
    adopted: boolean
    vetoed: boolean
    status: BillStatus
    milestones: Items<BillStatus[]>
    actions: Items<BillAction[]>
    publishStatusMap: Items<PublishStatusMap>
    programInfo: unknown | null
}

export interface Bill extends BillInfo {
    amendmentVersions: Items<string[]>
    amendments: Items<Record<BillVersion, BillAmendment>>
    votes: Items<Votes[]>
    vetoMessages: Items<unknown>
    approvalMessage: unknown
    additionalSponsors: Items<unknown>
    pastCommittees: Items<PastCommittees[]>
    previousVersions: Items<BillId[]>
    committeeAgendas: Items<{ agendaId: AgendaId; committeeId: CommitteeId }[]>
    calendars: Items<CalendarId[]>
}

export type MemberVotes = Record<VoteCodes, Items<Member[]>>
export type VoteCodes = "AYE" | "NAY" | "AYEWR" | "EXC"

export type PublishStatusMap = Record<
    BillVersion,
    { version: BillVersion; published: boolean; effectDateTime: Date }
>

export interface BillAction {
    billId: BillId
    date: Date
    chamber: ChamberType
    sequenceNo: number
    text: string
}

export interface Votes {
    billId: BillId
    version: BillVersion
    voteType: string
    voteDate: Date
    committee: CommitteeId
    memberVotes: Items<MemberVotes>
}

export interface CommitteeId {
    chamber: ChamberType
    name: string
}

export interface PastCommittees {
    chamber: ChamberType
    name: string
    sessionYear: number
    referenceDate: Date
}

export interface BillAmendment extends BillId {
    publishDate: Date
    memo: string
    lawSection: string
    lawCode: string
    actClause: string
    fullTextFormats: string[]
    fullText: string
    fullTextHtml: string
    fullTextTemplate: string
    uniBill: boolean
    sameAs: Items<BillId[]>
    coSponsors: Items<Member[]>
    multiSponsors: Items<Member[]>
    relatedLaws: Items<{ [key: string]: string[] }>
    stricken: boolean
}

export interface BillStatus {
    statusType: string
    statusDesc: string
    actionDate: string
    committeeName: string | null
    billCalNo: number | null
}

export interface BillId {
    basePrintNo: string
    session: number
    basePrintNoStr: string
    printNo: string
    version: BillVersion
}
