
import config from './config.js'

let client = config.redisClient;

client.unlink(config.qualificationKey);

let pipeline = client.pipeline();

console.log('Starting Redis Pipeline List data load at:' + new Date());
 
for(var i = 0; i < config.maxNumRange ;i++) {
   pipeline.lpush(config.qualificationKey, i);
}
 
console.log('Ending data load at:' + new Date());

pipeline.exec();
client.quit();
