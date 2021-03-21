
import config from './config.js'

import Redis from 'ioredis'
const client = new Redis(config.redisParams); 

client.on("error", function(error) {
    console.error(error);
  });

client.unlink(config.qualificationKey);

// TODO ZREVRANGE
client.zadd(config.qualificationKey, 0, "car", 0, "bike");
client.zrange(config.qualificationKey, 0, -1, "WITHSCORES").then((res) => console.log(res));

client.quit();
