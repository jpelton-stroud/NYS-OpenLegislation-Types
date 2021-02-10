interface NyApiResponse {
  success: boolean;
  message: string;
  responseType: ApiResponseType;
  result: {};
}

type ApiResponseType =
  | "member-sessions"
  | "member-session list"
  | "member-sessions list"
  | "update-digest list"
  | "update-token list"
  | "update-token-with-item list"
  | string;

interface ApiResponseList extends NyApiResponse {
  total: number;
  offsetStart: number;
  offsetEnd: number;
  limit: number;
  result: {
    items: [];
    size: number;
  };
}