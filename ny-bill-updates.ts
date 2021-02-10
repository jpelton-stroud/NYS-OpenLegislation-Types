interface BillId {
  basePrintNo: string;
  session: number;
  basePrintNoStr: string;
}

interface BillUpdateToken {
  id: BillId;
  contentType: string;
  sourceId: string;
  sourceDateTime: string;
  processedDateTime: string;
}

interface BillUpdateDigest extends BillUpdateToken {
  action: "Insert" | "Update" | "Delete";
  scope: BillUpdateScope;
  fields: {};
  fieldCount: number;
}

type BillUpdateScope =
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
  | string;
