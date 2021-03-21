
import config from './config.js'

let client = config.redisClient;

// Fails without promises!
client.zrevrange(config.qualificationKey, 0, -1).then((res) => console.log(res));
// client.zrange(config.qualificationKey, 0, -1, "WITHSCORES").then((res) => console.log(res));

client.quit();
