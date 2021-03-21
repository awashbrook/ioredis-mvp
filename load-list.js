
import config from './config.js'

let client = config.redisClient;

client.unlink(config.qualificationKey);
// TODO Pipeline for more efficiency
// let pipeline = client.pipeline();

console.log('Starting data load at:' + new Date());
 
for(var i = 0; i < config.maxNumRange ;i++) {
   client.lpush(config.qualificationKey, i);
}
 
console.log('Ending data load at:' + new Date());

client.quit();
