export interface Option{
  code: string;
  label: string;
}

export enum RequestState {
  None = "None",
  Waiting = "Waiting",
  Error = "Error",
  Success = "Success",
}