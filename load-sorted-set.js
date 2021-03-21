
import config from './config.js'

let client = config.redisClient;

client.unlink(config.qualificationKey);

console.log('Starting data load at:' + new Date());

// TODO ZREVRANGE
client.zadd(config.qualificationKey, 0, "car", 0, "bike");

// TODO Separate Retrieve
client.zrange(config.qualificationKey, 0, -1, "WITHSCORES").then((res) => console.log(res));
// Promise
console.log('Ending data load at:' + new Date());

client.quit();
