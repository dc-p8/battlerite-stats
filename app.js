let is_production = process.env.NODE_ENV == 'production';

const request = require('request')
const querystring = require('querystring')
const fs = require('fs')

let api_key;
let rate_limit;

if(!is_production){
    let env = require('./env');
    api_key = env.api_key;
    rate_limit = env.rate_limit;
}
else{
    api_key = process.env.API_KEY;
    rate_limit = process.env.RATE_LIMIT;
}

console.log('production : ' + is_production);
console.log('using api key : ' + api_key);
console.log('rate limit : ' + rate_limit);

let options = {
    headers:{
        Authorization: 'Bearer ' + api_key,
        Accept: 'application/json'
    },
}

var queryObject = querystring.stringify({
    "sort": "createdAt",
    "filter[createdAt-start]": "2017-11-10T13:25:30Z",
    "page[limit]": "3"
});
  
/*

request.get('https://api.developer.battlerite.com/shards/global/matches',options, (resp, err, body) => {
    //console.dir(JSON.parse(body), {depth:null})
    fs.writeFileSync("./out.txt", JSON.stringify(JSON.parse(body), null, 4));
})
*/