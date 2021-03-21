
import config from './config.js'

import Redis from 'ioredis'
const client = new Redis(config.redisParams); 

client.on("error", function(error) {
    console.error(error);
  });

client.unlink(config.qualificationKey);

// client.set(config.qualificationKey, "Hello!");
// // use the promise instead of callback
// client.get(config.qualificationKey).then((result) => console.log(result));

client.quit();
