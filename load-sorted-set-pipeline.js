
import config from './config.js'

let client = config.redisClient;

client.unlink(config.qualificationKey);

let pipeline = client.pipeline();

console.log('Starting Redis Pipeline Sorted Set data load at:' + new Date());

for(var i = 0; i < config.maxNumRange ;i++) {
  pipeline.zadd(config.qualificationKey, i, i);
}

console.log('Ending data load at:' + new Date());

pipeline.exec();
client.quit();
