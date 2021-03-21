import Redis from 'ioredis'

const config = {
  qualificationKey: "qualification:node:test:1",
  maxNumRange: 100,
  redisParams: {
    host: 'localhost',
    port: '6379'  
  }
};

console.log('Using Redis Params:');
console.log(config.redisParams);
let params = process.argv.slice(2);
if (params[0]) {
  config.redisParams.password = params[0];
} 

config.redisClient = new Redis(config.redisParams); 

config.redisClient.on("error", function(error) {
  console.error(error);
});

export default config
