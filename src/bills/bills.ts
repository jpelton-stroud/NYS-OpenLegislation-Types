import { Items, Chamber, BillVersion } from "../shared/shared"
import { Member } from "../members/members"
import { AgendaId } from "../agendas/agendas"
import { CalendarId } from "../calendars/calendars"
import { CommitteeId } from "../committees/committees"

export interface BillId {
    basePrintNo: string
    session: number
    basePrintNoStr: string
    printNo: string
    version: BillVersion
}

export interface Bill {
    basePrintNo: string
    session: number
    basePrintNoStr: string
    printNo: string
    billType: {
        chamber: Chamber
        desc: Capitalize<Chamber>
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
    publishStatusMap: Items<BillPublishEvents>
    programInfo: unknown | null

    // default
    amendmentVersions?: Items<string[]>
    amendments?: Items<BillAmendments>
    votes?: Items<BillVoteRecord[]>
    vetoMessages?: Items<unknown>
    approvalMessage?: unknown
    additionalSponsors?: Items<unknown>
    pastCommittees?: Items<BillReferral[]>
    previousVersions?: Items<BillId[]>
    committeeAgendas?: Items<CommitteeAgenda[]>
    calendars?: Items<CalendarId[]>
}

interface BillAction {
    billId: BillId
    date: Date
    chamber: Chamber
    sequenceNo: number
    text: string
}

interface BillVoteRecord {
    billId: BillId
    version: BillVersion
    voteType: string
    voteDate: Date
    committee: CommitteeId
    memberVotes: Items<MemberVoteRecord>
}

type MemberVoteRecord = Record<VoteCodes, Items<Member[]>>
type VoteCodes = "AYE" | "NAY" | "AYEWR" | "EXC"

interface BillReferral extends CommitteeId {
    sessionYear: number
    referenceDate: Date
}

interface BillStatus {
    statusType: string
    statusDesc: string
    actionDate: string
    committeeName: string | null
    billCalNo: number | null
}

type CommitteeAgenda = {
    agendaId: AgendaId
    committeeId: CommitteeId
}

type BillPublishEvents = {
    [key: string]: {
        version: BillVersion
        published: boolean
        effectDateTime: Date
    }
}

type BillAmendments = {
    [key: string]: BillId & {
        publishDate: Date
        memo: string
        lawSection: string
        lawCode: string
        actClause: string
        fullTextFormats: string[]
        fullText?: string
        fullTextHtml: string
        fullTextTemplate: string
        uniBill: boolean
        sameAs: Items<BillId[]>
        coSponsors: Items<Member[]>
        multiSponsors: Items<Member[]>
        relatedLaws: Items<unknown>
        stricken: boolean
    }
}
