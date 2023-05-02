import { _initSettings } from "./essentials";

const _Api_Scheme = "http";
const _Api_Host_Fqdn = "localhost:5000";
const _Api_Path = "api";
const ApiHost = `${_Api_Scheme}://${_Api_Host_Fqdn}`;
export const ApiBaseUrl = `${ApiHost}/${_Api_Path}`;

_initSettings(ApiBaseUrl);

export { createStore } from "./essentials";