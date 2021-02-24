interface BillId {
  basePrintNo: string;
  session: number;
  basePrintNoStr: string;
}

interface BillUpdateToken {
  id: BillId;
  contentType: string;
  sourceId: string;
  sourceDateTime: string; // YYYY-mm-DDTHH:mm:ss.ssssss
  processedDateTime: string; // YYYY-mm-DDTHH:mm:ss.ssssss
}

interface BillUpdateDigest extends BillUpdateToken {
  action: string; // "Insert" | "Update" | "Delete";
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

interface BillCosponsorUpdate {
  scope: "Bill Amendment Cosponsor";
  fields: {
    "Created Date Time": string; // YYYY-mm-DD HH:mm:ss.ssssss
    "Bill Amend Version": string; // single space character for base bill, then A, B, C, etc. for subsequent versions
    "Sequence No": string; // Number used to order the actions sequentially,formatted as a string
    "Session Member Id": string; // value will be numeric digits in string format
  };
  fieldCount: 4;
}
