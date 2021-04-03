
import config from './config.js'

let client = config.redisClient;

client.unlink(config.qualificationKey);

console.log('Starting Redis Sorted Set data load...');
const startTime = new Date().getTime(); 

// TODO Refactor with async array map
for(var i = 0; i < config.maxNumRange ;i++) {
  client.zadd(config.qualificationKey, i, i);
  // TODO Promise returned 1 rather than number of items in the sorted set
}

console.log(`Took ${new Date().getTime() - startTime} ms`);

client.quit();
