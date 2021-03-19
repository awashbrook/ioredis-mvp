const Redis = require("ioredis");

const qualificationKey = "qualification:node:test:1";
const maxNumRange = 100;

var params = process.argv.slice(2);
var redisParams = {
    host: 'localhost',
    port: '6379'
  };
  if (params[0]) {
    redisParams.password = params[0];
  } 
//   console.log(redisParams);
  
const client = new Redis(redisParams); 

client.on("error", function(error) {
    console.error(error);
  });
  
client.unlink(qualificationKey);
// TODO Pipeline for more efficiency
// for(var i = 0; i < maxNumRange ;i++) {
//     client.lpush(qualificationKey, i, client.print);
// }
client.set(qualificationKey, "Hello from Ember!");

// use the promise instead of callback
client.get(qualificationKey).then((result) => console.log(result));

client.zadd("vehicles", 0, "car", 0, "bike");
client.zrange("vehicles", 0, -1, "WITHSCORES").then((res) => console.log(res));
// TODO ZREVRANGE
