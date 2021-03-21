
import config from './config.js'

const Redis = require("ioredis");  
const client = new Redis(redisParams); 

client.on("error", function(error) {
    console.error(error);
  });

client.unlink(qualificationKey);

// TODO Pipeline for more efficiency

for(var i = 0; i < maxNumRange ;i++) {
    client.lpush(qualificationKey, i); // Doesn't print with IORedis
}

// TODO Split these up

// Fails without promises!
// for(var i = 100; i > 0 ;i--) {
//     client.lpop(qualificationKey).then((res) => console.log(res));
// }

// client.set(qualificationKey, "Hello!");
// // use the promise instead of callback
// client.get(qualificationKey).then((result) => console.log(result));

// TODO ZREVRANGE
client.zadd("vehicles", 0, "car", 0, "bike");
client.zrange("vehicles", 0, -1, "WITHSCORES").then((res) => console.log(res));

