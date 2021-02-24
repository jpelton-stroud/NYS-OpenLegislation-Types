interface Response {
  success: boolean;
  message: string;
  responseType: string;
}

interface ItemResponse extends Response {
  result: {};
}

interface ListResponse extends Response {
  total: number;
  offsetStart: number;
  offsetEnd: number;
  limit: number;
  result: {
    items: [];
    size: number;
  };
}
