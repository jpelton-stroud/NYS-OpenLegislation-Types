import { AgendaId } from "../agendas/agendas"
import { BillId } from "../bills/bills"
import { CalendarId } from "../calendars/calendars"

interface UpdateToken {
    id: Omit<BillId, "version" | "printNo"> | AgendaId | CalendarId
    contentType: UpdateContentType
    sourceId: string
    sourceDateTime: Date
    processedDateTime: Date
}

interface Update extends UpdateToken {
    action: UpdateAction
    scope: UpdateScope
    fields: {}
    fieldCount: number
}

type BillScopes =
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

type CalendarScopes =
    | "Calendar"
    | "Calendar Active List"
    | "Calendar Supplemental"

type AgendaScopes =
    | "Agenda"
    | "Agenda Info Addendum"
    | "Agenda Info Committee"
    | "Agenda Vote Adendum"
    | "Agenda Vote Committee"

type LawScopes = "Law Tree"
type UpdateScope = BillScopes & CalendarScopes & AgendaScopes & LawScopes
type UpdateAction = "Insert" | "Update" | "Delete"
type UpdateContentType = "AGENDA" | "BILL" | "CALENDAR" | "LAW"
