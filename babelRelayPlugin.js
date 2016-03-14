
/** Required per docs if not using the starter kit
 * https://facebook.github.io/relay/docs/guides-babel-plugin.html
 **/

let getbabelRelayPlugin = require('babel-relay-plugin');
let schema = require('./server/data/schema.json');

module.exports = getbabelRelayPlugin(schema.data);
