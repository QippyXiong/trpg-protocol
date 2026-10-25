import test from 'node:test';
import assert from 'node:assert/strict';
import {contract,apiPath,isEvent} from '../index.js';
import {readFile} from 'node:fs/promises';
test('routes are same-origin and stable',()=>{assert.equal(apiPath('message'),'/api/message');assert.throws(()=>apiPath('missing'));for(const r of Object.values(contract.routes)){assert.match(r.path,/^\/api\/[a-z][a-z0-9_/-]*$/);assert.ok(['GET','POST'].includes(r.method))}});
test('event guard and schemas agree',async()=>{const schema=JSON.parse(await readFile(new URL('../schemas/event.schema.json',import.meta.url)));assert.deepEqual(schema.properties.kind.enum,Object.keys(contract.eventLabels));assert.equal(isEvent({id:1,ts:1,username:'x',display:'x',kind:'action',body:'inspect'}),true);assert.equal(isEvent({id:-1}),false);assert.equal(Object.isFrozen(contract.routes),true)});
