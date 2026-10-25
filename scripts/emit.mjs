// Build tooling only; excluded from the published package.
import {readFile,writeFile} from 'node:fs/promises';
import {PROTOCOL_VERSION,API_PREFIX,ROUTES,EVENT_KINDS,VISIBILITY,DECISION_KINDS,REQUIRED_ACTION_FIELDS,ERROR_CODES} from '../dist/routes.js';
const root=new URL('../',import.meta.url),pkg=JSON.parse(await readFile(new URL('package.json',root)));
if(pkg.version!==PROTOCOL_VERSION)throw Error('Package and protocol version mismatch');
const contract={version:PROTOCOL_VERSION,apiPrefix:API_PREFIX,routes:ROUTES,eventKinds:EVENT_KINDS,visibility:VISIBILITY,decisionKinds:DECISION_KINDS,requiredActionFields:REQUIRED_ACTION_FIELDS,errorCodes:ERROR_CODES};
await writeFile(new URL('dist/contract.json',root),JSON.stringify(contract,null,2)+'\n');
await writeFile(new URL('dist/protocol.js',root),'// Generated transport contract; no business logic.\nglobalThis.TRPGProtocol='+JSON.stringify(contract)+';\n');
