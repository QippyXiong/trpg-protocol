/** Versioned transport paths. No dispatch or decision logic. */
export declare const PROTOCOL_VERSION = "0.1.0";
export declare const API_PREFIX = "/api/";
export declare const ROUTES: {
    readonly "action/retract": {
        readonly path: "/api/action/retract";
        readonly method: "POST";
    };
    readonly "audio/": {
        readonly path: "/api/audio/";
        readonly method: "GET";
    };
    readonly character: {
        readonly path: "/api/character";
        readonly method: "POST";
    };
    readonly dice: {
        readonly path: "/api/dice";
        readonly method: "POST";
    };
    readonly export: {
        readonly path: "/api/export";
        readonly method: "GET";
    };
    readonly final: {
        readonly path: "/api/final";
        readonly method: "POST";
    };
    readonly "game/create": {
        readonly path: "/api/game/create";
        readonly method: "POST";
    };
    readonly "game/end": {
        readonly path: "/api/game/end";
        readonly method: "POST";
    };
    readonly "game/image": {
        readonly path: "/api/game/image";
        readonly method: "POST";
    };
    readonly "game/join": {
        readonly path: "/api/game/join";
        readonly method: "POST";
    };
    readonly "game/launch": {
        readonly path: "/api/game/launch";
        readonly method: "POST";
    };
    readonly "game/ready": {
        readonly path: "/api/game/ready";
        readonly method: "POST";
    };
    readonly "game/start": {
        readonly path: "/api/game/start";
        readonly method: "POST";
    };
    readonly games: {
        readonly path: "/api/games";
        readonly method: "GET";
    };
    readonly history: {
        readonly path: "/api/history";
        readonly method: "GET";
    };
    readonly login: {
        readonly path: "/api/login";
        readonly method: "POST";
    };
    readonly logout: {
        readonly path: "/api/logout";
        readonly method: "POST";
    };
    readonly message: {
        readonly path: "/api/message";
        readonly method: "POST";
    };
    readonly narration: {
        readonly path: "/api/narration";
        readonly method: "POST";
    };
    readonly "objective/update": {
        readonly path: "/api/objective/update";
        readonly method: "POST";
    };
    readonly "player/kick": {
        readonly path: "/api/player/kick";
        readonly method: "POST";
    };
    readonly "player/state": {
        readonly path: "/api/player/state";
        readonly method: "POST";
    };
    readonly portrait: {
        readonly path: "/api/portrait";
        readonly method: "POST";
    };
    readonly "portraits/": {
        readonly path: "/api/portraits/";
        readonly method: "GET";
    };
    readonly "random/audit": {
        readonly path: "/api/random/audit";
        readonly method: "GET";
    };
    readonly "random/consume": {
        readonly path: "/api/random/consume";
        readonly method: "POST";
    };
    readonly "random/discard": {
        readonly path: "/api/random/discard";
        readonly method: "POST";
    };
    readonly "random/reveal": {
        readonly path: "/api/random/reveal";
        readonly method: "POST";
    };
    readonly ready: {
        readonly path: "/api/ready";
        readonly method: "POST";
    };
    readonly "review/host": {
        readonly path: "/api/review/host";
        readonly method: "POST";
    };
    readonly "role/select": {
        readonly path: "/api/role/select";
        readonly method: "POST";
    };
    readonly "round/next": {
        readonly path: "/api/round/next";
        readonly method: "POST";
    };
    readonly "scenario/opening-image": {
        readonly path: "/api/scenario/opening-image";
        readonly method: "POST";
    };
    readonly "scenario/template": {
        readonly path: "/api/scenario/template";
        readonly method: "POST";
    };
    readonly "scenario/update": {
        readonly path: "/api/scenario/update";
        readonly method: "POST";
    };
    readonly scene: {
        readonly path: "/api/scene";
        readonly method: "POST";
    };
    readonly settlement: {
        readonly path: "/api/settlement";
        readonly method: "POST";
    };
    readonly state: {
        readonly path: "/api/state";
        readonly method: "GET";
    };
};
export type RouteName = keyof typeof ROUTES;
export { EVENT_KINDS, VISIBILITY, DECISION_KINDS, REQUIRED_ACTION_FIELDS } from './types.js';
export type { EventKind, Visibility, RoomEvent, PreparedAction } from './types.js';
export { ERROR_CODES } from './errors.js';
export type { ErrorCode, ErrorStatus, ApiError } from './errors.js';
