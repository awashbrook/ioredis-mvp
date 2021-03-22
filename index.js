
import config from './config.js'

import Redis from 'ioredis'
const client = new Redis(config.redisParams); 

client.on("error", function(error) {
    console.error(error);
  });

const startTime = new Date().getTime(); 

console.log(`Took ${new Date().getTime() - startTime} ms`);


client.quit();
