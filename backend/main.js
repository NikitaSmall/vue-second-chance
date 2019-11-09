var graphql = require ('graphql').graphql
var express = require('express')
var morgan = require('morgan')
var graphQLHTTP = require('express-graphql')
var Schema = require('./schema')
var query = 'query { todos { id, desc, status } }'

graphql(Schema, query).then(function(result) {
  console.log(JSON.stringify(result));
  // Prints
  // {
  //   "data":{
  //     "todos":[
  //       {
  //         "id":1446412739542,
  //         "title":"Read emails",
  //         "completed":false
  //       },
  //       {
  //         "id":1446412740883,
  //         "title":"Buy orange",
  //         "completed":true
  //       }
  //     ]
  //   }
  // }
});

morgan('tiny');

var app = express()
  .use('/graphql', graphQLHTTP({ schema: Schema, pretty: true }))
  .listen(3000, function (err) {
    console.log('GraphQL Server is now running on localhost:3000');
  });
