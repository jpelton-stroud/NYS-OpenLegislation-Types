import fetch from "node-fetch";
import { TESTKEY } from "./api-key";

const req: URL = new URL("https://legislation.nysenate.gov");

interface Params {
  [key: string]: string;
}

export function getBill(
  printNo: string,
  args: Params
): Promise<Response<Bill>> {
  req.pathname = "api/3/bills/" + printNo.split("-").reverse().join("/");
  req.search = "";
  for (let key in args) req.searchParams.append(key, args[key]);

  return fetch(req).then((res) => res.json());
}

export function getBillUpdates(
  printNo: string,
  args: Params,
  since = new Date(0).toJSON(),
  until = new Date().toJSON()
): Promise<Response<BillUpdate[]>> {
  req.pathname =
    "api/3/bills/" +
    printNo.split("-").reverse().join("/") +
    `/updates/${since}/${until}`;
  req.search = "";
  for (let key in args) req.searchParams.append(key, args[key]);

  return fetch(req).then((res) => res.json());
}

export function getMembers(args: Params): Promise<Response<Member[]>> {
  req.pathname = "api/3/members/" + new Date().getFullYear();
  req.search = "";

  for (let key in args) req.searchParams.append(key, args[key]);

  return fetch(req).then((res) => res.json());
}

interface ResponseBase {
  success: boolean;
  message: string;
  responseType: string;
}

interface ResponseSuccess<T> extends ResponseBase {
  success: true;
  result: T | Items<T>;
}

interface ResponseError extends ResponseBase {
  success: false;
  errorCode: number;
  errorData?: {};
  errorDataType?: string;
}

type Response<T> = ResponseSuccess<T> | ResponseError;

interface Items<T> {
  items: T;
  size: number;
}

interface Bill {}
interface BillUpdate {}
interface Member extends SessionMemberMapItem {
  chamber?: "ASSEMBLY" | "SENATE";
  fullName?: string;
  imgName?: string;
  sessionShortNameMap?: {
    [key: string]: SessionMemberMapItem;
  };
  person?: {
    personId: number;
    fullName: string;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    prefix: string;
    suffix: string;
    verified: boolean;
    imgName: string;
  };
}
interface SessionMemberMapItem {
  sessionMemberId: number;
  shortName: string;
  sessionYear: number;
  districtCode: number;
  alternate: boolean;
  memberId: number;
}

