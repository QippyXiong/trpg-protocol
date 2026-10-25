/** Versioned transport paths. No dispatch or decision logic. */
export const PROTOCOL_VERSION = '0.1.1';
export const API_PREFIX = '/api/';
export const ROUTES = {
  "action/retract": {
    "path": "/api/action/retract",
    "method": "POST"
  },
  "audio/": {
    "path": "/api/audio/",
    "method": "GET"
  },
  "character": {
    "path": "/api/character",
    "method": "POST"
  },
  "dice": {
    "path": "/api/dice",
    "method": "POST"
  },
  "export": {
    "path": "/api/export",
    "method": "GET"
  },
  "final": {
    "path": "/api/final",
    "method": "POST"
  },
  "game/create": {
    "path": "/api/game/create",
    "method": "POST"
  },
  "game/end": {
    "path": "/api/game/end",
    "method": "POST"
  },
  "game/image": {
    "path": "/api/game/image",
    "method": "POST"
  },
  "game/join": {
    "path": "/api/game/join",
    "method": "POST"
  },
  "game/launch": {
    "path": "/api/game/launch",
    "method": "POST"
  },
  "game/ready": {
    "path": "/api/game/ready",
    "method": "POST"
  },
  "game/start": {
    "path": "/api/game/start",
    "method": "POST"
  },
  "games": {
    "path": "/api/games",
    "method": "GET"
  },
  "history": {
    "path": "/api/history",
    "method": "GET"
  },
  "login": {
    "path": "/api/login",
    "method": "POST"
  },
  "logout": {
    "path": "/api/logout",
    "method": "POST"
  },
  "message": {
    "path": "/api/message",
    "method": "POST"
  },
  "narration": {
    "path": "/api/narration",
    "method": "POST"
  },
  "objective/update": {
    "path": "/api/objective/update",
    "method": "POST"
  },
  "player/kick": {
    "path": "/api/player/kick",
    "method": "POST"
  },
  "player/state": {
    "path": "/api/player/state",
    "method": "POST"
  },
  "portrait": {
    "path": "/api/portrait",
    "method": "POST"
  },
  "portraits/": {
    "path": "/api/portraits/",
    "method": "GET"
  },
  "random/audit": {
    "path": "/api/random/audit",
    "method": "GET"
  },
  "random/consume": {
    "path": "/api/random/consume",
    "method": "POST"
  },
  "random/discard": {
    "path": "/api/random/discard",
    "method": "POST"
  },
  "random/reveal": {
    "path": "/api/random/reveal",
    "method": "POST"
  },
  "ready": {
    "path": "/api/ready",
    "method": "POST"
  },
  "review/host": {
    "path": "/api/review/host",
    "method": "POST"
  },
  "role/select": {
    "path": "/api/role/select",
    "method": "POST"
  },
  "round/next": {
    "path": "/api/round/next",
    "method": "POST"
  },
  "scenario/opening-image": {
    "path": "/api/scenario/opening-image",
    "method": "POST"
  },
  "scenario/template": {
    "path": "/api/scenario/template",
    "method": "POST"
  },
  "scenario/update": {
    "path": "/api/scenario/update",
    "method": "POST"
  },
  "scene": {
    "path": "/api/scene",
    "method": "POST"
  },
  "settlement": {
    "path": "/api/settlement",
    "method": "POST"
  },
  "state": {
    "path": "/api/state",
    "method": "GET"
  }
} as const;
export type RouteName = keyof typeof ROUTES;
export { EVENT_KINDS, VISIBILITY, DECISION_KINDS, REQUIRED_ACTION_FIELDS } from './types.js';
export type { EventKind, Visibility, RoomEvent, PreparedAction } from './types.js';
export { ERROR_CODES } from './errors.js';
export type { ErrorCode, ErrorStatus, ApiError } from './errors.js';
