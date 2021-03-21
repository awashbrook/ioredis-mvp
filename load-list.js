
import config from './config.js'

import Redis from 'ioredis'
const client = new Redis(config.redisParams); 
client.on("error", function(error) {
    console.error(error);
  });

client.unlink(config.qualificationKey);

// TODO Pipeline for more efficiency

console.log('Starting data load at:' + new Date());
 
for(var i = 0; i < config.maxNumRange ;i++) {
   client.lpush(config.qualificationKey, i);
}
 
console.log('Ending data load at:' + new Date());

client.quit();
