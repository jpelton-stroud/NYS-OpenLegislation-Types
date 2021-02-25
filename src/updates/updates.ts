import { AgendaId, CalendarId, BillId } from "../bills/bills"

export interface UpdateToken {
    id: Omit<BillId, "version" | "printNo"> | AgendaId | CalendarId
    contentType: UpdateContentType
    sourceId: string
    sourceDateTime: Date
    processedDateTime: Date
}

export interface Update extends UpdateToken {
    action: UpdateAction
    scope: UpdateScope
    fields: {}
    fieldCount: number
}

export type BillScopes =
    | "Bill"
    | "Bill Amendment"
    | "Bill Amendment Action"
    | "Bill Amendment Cosponsor"
    | "Bill Amendment Multi Sponsor"
    | "Bill Amendment Publish Status"
    | "Bill Amendment Same As"
    | "Bill Amendment Vote Info"
    | "Bill Approval"
    | "Bill Previous Version"
    | "Bill Sponsor"
    | "Bill Veto"

export type CalendarScopes =
    | "Calendar"
    | "Calendar Active List"
    | "Calendar Supplemental"

export type AgendaScopes =
    | "Agenda"
    | "Agenda Info Addendum"
    | "Agenda Info Committee"
    | "Agenda Vote Adendum"
    | "Agenda Vote Committee"

export type LawScopes = "Law Tree"
export type UpdateScope = BillScopes & CalendarScopes & AgendaScopes & LawScopes
export type UpdateAction = "Insert" | "Update" | "Delete"
export type UpdateContentType = "AGENDA" | "BILL" | "CALENDAR" | "LAW"
