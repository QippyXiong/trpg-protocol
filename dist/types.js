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
];
export const VISIBILITY = ['public', 'private', 'after_review'];
export const DECISION_KINDS = ['action', 'chat', 'settlement'];
export const REQUIRED_ACTION_FIELDS = ['game_id', 'round_no', 'text', 'check_id'];
