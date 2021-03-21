
import config from './config.js'

import Redis from 'ioredis'
const client = new Redis(config.redisParams); 

client.on("error", function(error) {
    console.error(error);
  });

client.unlink(config.qualificationKey);

// Fails without promises!
// for(var i = 100; i > 0 ;i--) {
//     client.lpop(config.qualificationKey).then((res) => console.log(res));
// }

// client.set(config.qualificationKey, "Hello!");
// // use the promise instead of callback
// client.get(config.qualificationKey).then((result) => console.log(result));

client.quit();
