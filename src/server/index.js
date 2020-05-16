const functions = require('firebase-functions');

const proxy = require('./airtable_proxy');

exports.api = functions.https.onRequest(proxy);