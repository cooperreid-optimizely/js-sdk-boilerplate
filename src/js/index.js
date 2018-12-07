/**
*
* Source that gets webpack'd into a client-side bundle
* The same SDK can be imported for use on a Node server as well
*/
const optimizelySDK  = require('@optimizely/optimizely-sdk')
let datafileContents = null
try {
    datafileContents  = require('../datafile/{DATAFILE}')
}
catch(err) {
    console.log('Error: Add datafile JSON to ./src/datafile/ directory')
}

let optimizelyClient  = optimizelySDK.createInstance({'datafile': datafileContents})
let bucketingDecision = optimizelyClient.activate('sorting_experiment', 'userId-123')

console.log('Variation Bucket': bucketingDecision)