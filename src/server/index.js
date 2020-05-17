const functions = require('firebase-functions');

const proxy = require('./airtable_proxy');

exports.proxy = functions.https.onRequest(proxy);