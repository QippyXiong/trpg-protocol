import contractJSON from './contract.json' with {type:'json'};
function freeze(value){if(value&&typeof value==='object'){Object.values(value).forEach(freeze);Object.freeze(value)}return value}
export const contract=freeze(contractJSON);
export const VERSION=contract.version;
export const EVENT_LABELS=contract.eventLabels;
export const ROUTES=contract.routes;
export function apiPath(name){const route=ROUTES[name];if(!route)throw new Error('Unknown API route: '+name);return route.path}
export function isEvent(value){return !!value&&typeof value==='object'&&Number.isInteger(value.id)&&value.id>0&&typeof value.ts==='number'&&['username','display','body'].every(k=>typeof value[k]==='string')&&Object.hasOwn(EVENT_LABELS,value.kind)}
