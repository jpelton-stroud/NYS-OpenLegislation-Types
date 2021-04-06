import fetch from "node-fetch";
import { TESTKEY } from "./api-key";

const req: URL = new URL("https://legislation.nysenate.gov");

interface RequestOptions {
  [key: string]: string;
}

export function getBill(printNo: string, args: RequestOptions) {
  req.pathname = "api/3/bills/" + printNo.split("-").reverse().join("/");
  req.search = "";
  for (let key in args) req.searchParams.append(key, args[key]);

  return fetch(req).then((res) => res.json());
}

export function getBillUpdates(
  printNo: string,
  args: RequestOptions,
  since = new Date(0).toJSON(),
  until = new Date().toJSON()
) {
  req.pathname =
    "api/3/bills/" +
    printNo.split("-").reverse().join("/") +
    `/updates/${since}/${until}`;
  req.search = "";
  for (let key in args) req.searchParams.append(key, args[key]);

  return fetch(req).then((res) => res.json());
}

export function getMembers(args: RequestOptions) {
  req.pathname = "api/3/members/" + new Date().getFullYear();
  req.search = "";

  for (let key in args) req.searchParams.append(key, args[key]);

  return fetch(req).then((res) => res.json());
}

