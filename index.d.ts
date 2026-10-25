export type Visibility='public'|'private'|'after_review';
export interface RoomEvent { id:number; game_id?:number; ts:number; username:string; display:string; kind:string; body:string; visibility?:Visibility; recipient?:string|null; payload?:Record<string,unknown> }
export interface PreparedAction { game_id:number; round_no:number; kind:'action'; text:string; check_id:string; request_id:string; item_ids?:string[]; take_item_ids?:string[] }
export interface ProtocolContract { version:string; apiPrefix:string; routes:Record<string,{path:string;method:'GET'|'POST';flow:boolean}>; eventLabels:Record<string,string>; visibility:Visibility[]; decisionKinds:string[]; requiredActionFields:string[]; ownership:string }
export const contract:Readonly<ProtocolContract>;
export const VERSION:string;
export const EVENT_LABELS:Readonly<Record<string,string>>;
export const ROUTES:Readonly<ProtocolContract['routes']>;
export function apiPath(name:string):string;
export function isEvent(value:unknown):value is RoomEvent;
