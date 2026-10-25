import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import * as protocol from '../dist/routes.js';
test('only three contract source files',async()=>assert.deepEqual((await readdir(new URL('../src/',import.meta.url))).sort(),['errors.ts','routes.ts','types.ts']));
test('paths and error codes are pure transport data',()=>{for(const route of Object.values(protocol.ROUTES)){assert.match(route.path,/^\/api\//);assert.ok(['GET','POST'].includes(route.method));assert.equal('flow' in route,false)}assert.equal(protocol.ERROR_CODES.CONFLICT,409);assert.equal(protocol.ROUTES.message.path,'/api/message');assert.equal(Object.values(protocol).some(x=>typeof x==='function'),false)});
test('generated contract matches exported types and constants',async()=>{const c=JSON.parse(await readFile(new URL('../dist/contract.json',import.meta.url)));assert.equal(c.version,protocol.PROTOCOL_VERSION);assert.deepEqual(c.eventKinds,protocol.EVENT_KINDS);assert.deepEqual(c.errorCodes,protocol.ERROR_CODES);assert.equal('eventLabels' in c,false)});
