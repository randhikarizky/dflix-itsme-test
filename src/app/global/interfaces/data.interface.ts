export interface BaseResponse {
  createdAt?: string;
  updatedAt?: string | null;
  id?: any;
}

export interface BaseDataResponse extends BaseResponse {
  name: string;
}

export interface BaseDataImageResponse extends BaseResponse {
  filename: string;
  description: string;
  type?: string;
}
