const functions = require('firebase-functions');

const airtableProxy = require('./airtable_proxy');

exports.airtable = functions.https.onRequest(airtableProxy);