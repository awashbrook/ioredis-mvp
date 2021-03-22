
import config from './config.js'

let client = config.redisClient;

client.unlink(config.qualificationKey);

let pipeline = client.pipeline();

console.log('Starting Redis Pipeline Sorted Set data load at...');
const startTime = new Date().getTime(); 

for(var i = 0; i < config.maxNumRange ;i++) {
  pipeline.zadd(config.qualificationKey, i, i);
}

pipeline.exec().then(() => {
    console.log('Ending data load of ' + config.maxNumRange + ` items took ${new Date().getTime() - startTime} ms`);
});

client.quit();
