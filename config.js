const config = {
  qualificationKey: "qualification:node:test:1",
  maxNumRange: 100,
  redisParams: {
    host: 'localhost',
    port: '6379'  
  }
  // REDIS_URL: process.env.BIGFOOT_DATA_SERVICE_REDIS_URL ?? 'redis://localhost:6379/0'
};

console.log('Using Redis Params:');
console.log(config.redisParams);
let params = process.argv.slice(2);
if (params[0]) {
  config.redisParams.password = params[0];
} 

export default config
