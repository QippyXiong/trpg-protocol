/** Transport types and enums only. No game rules. */
export const EVENT_KINDS = [
  "action",
  "chat",
  "settlement",
  "dice",
  "system",
  "opening",
  "state_change",
  "item_change",
  "item_intent",
  "item_found",
  "objective_change",
  "turn_started",
  "turn_skipped",
  "turn_order",
  "turn_order_reveal",
  "final",
  "retraction",
  "private_choice",
  "review",
  "round_timeout",
  "moderation"
] as const;
export const VISIBILITY = ['public','private','after_review'] as const;
export const DECISION_KINDS = ['action','chat','settlement'] as const;
export const REQUIRED_ACTION_FIELDS = ['game_id','round_no','text','check_id'] as const;
export type EventKind = typeof EVENT_KINDS[number];
export type Visibility = typeof VISIBILITY[number];
export interface RoomEvent { id:number; game_id?:number; ts:number; username:string; display:string; kind:EventKind; body:string; visibility?:Visibility; recipient?:string|null; payload?:Record<string,unknown> }
export interface PreparedAction { game_id:number; round_no:number; kind:'action'; text:string; check_id:string; request_id:string; item_ids?:string[]; take_item_ids?:string[] }
