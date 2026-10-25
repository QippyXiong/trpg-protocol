import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,readFile,writeFile,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const script=fileURLToPath(new URL('../scripts/sync.js',import.meta.url));
test('sync and check detect edits in every consumer output',async()=>{
 const dir=await mkdtemp(join(tmpdir(),'trpg-contract-'));
 try{
  for(const kind of ['server','web','cli']){
   const run=(...args)=>spawnSync(process.execPath,[script,kind,...args],{cwd:dir,encoding:'utf8'});
   assert.equal(run().status,0);assert.equal(run('--check').status,0);
   const target=join(dir,{server:'protocol.json',web:'static/protocol.js',cli:'nighttable_cli/protocol.json'}[kind]);
   await writeFile(target,(await readFile(target,'utf8'))+'tampered');assert.equal(run('--check').status,1);
  }
 }finally{await rm(dir,{recursive:true,force:true})}
});
