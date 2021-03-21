
import config from './config.js'

let client = config.redisClient;

// Fails without promises!
for(var i = 100; i > 0 ;i--) {
    client.lpop(config.qualificationKey).then((res) => console.log(res));
}

client.quit();
