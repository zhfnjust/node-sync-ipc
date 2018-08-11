/**
 * @file child.js
 *
 * Created by mmhunter on 17/10/2017.
 */
var syncIpc = new (require("../../index").SyncIPCClient)(require("path").join(require('os').tmpdir(), 'temp.sock'));

let longStrArray = [];

for(let i = 0 ; i < 10000; i ++){
    longStrArray.push(Math.random()*1000);
}
let echoed = syncIpc.sendSync("foo",longStrArray);

syncIpc.sendSync("result",echoed);



