const functions = require('firebase-functions');
const Airtable = require('airtable');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser')
const base = new Airtable({ apiKey : functions.config().airtable.api_key}).base(functions.config().airtable.base_id);

const fetch = (query) => {
  return new Promise((resolve, reject) => {
    let res = []
    base('Activities').select(query)
    .eachPage((records, fetchNextPage) =>{        
      records.forEach((record) => {
        res.push(record);
      });
      fetchNextPage();
    }, (err) => {
      if (err) { reject(err) }
      resolve(res)
    });
  })
}

const proxy = express();
proxy.use(cors({ origin: true }));
proxy.use(bodyParser.urlencoded({ extended: false }));
proxy.use(bodyParser.json());

proxy.get('/', (req, res) => {
  const query = req.body.query;
  return fetch(query)
  .then(records => {
    return res.status(200).send(records);
  })
  .catch(err => {
    console.log(err);
    return res.status(500).send(err);
  })
});

module.exports = proxy;