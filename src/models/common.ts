export enum StorageKEY {
  deviceToken = "glx_device_token",
  authToken = "glx_auth_token",
  refreshToken = "glx_rf_token",
  campaignStatus = "glx_campaign_status",
  ipAddress = "glx_ipAddress",
  booking = "glx_booking",
}

export enum VariantsType {
  hide = "hide",
  default = "default",
  card = "card",
  text = "text",
  button = "button",
}

export interface CursorContextType {
  cursorText: string;
  setCursorText: (arg: string) => void;
  cursorVariant: string;
  setCursorVariant: (arg: string) => void;
}
