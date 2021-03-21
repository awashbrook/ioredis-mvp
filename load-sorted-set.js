
import config from './config.js'

let client = config.redisClient;

client.unlink(config.qualificationKey);

console.log('Starting Redis Sorted Set data load at:' + new Date());

for(var i = 0; i < config.maxNumRange ;i++) {
  client.zadd(config.qualificationKey, i, i);
}

client.quit();
