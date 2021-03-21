
import config from './config.js'

let client = config.redisClient;

client.unlink(config.qualificationKey);

console.log('Starting Redis List data load at:' + new Date());
 
for(var i = 0; i < config.maxNumRange ;i++) {
   client.lpush(config.qualificationKey, i);
}
 
console.log('Ending data load at:' + new Date());

client.quit();
