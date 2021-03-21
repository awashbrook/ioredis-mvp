const config = {
  qualificationKey: "qualification:node:test:1",
  maxNumRange: 2,
  redisParams: {
    host: 'localhost',
    port: '6379'  
  }
  // REDIS_URL: process.env.BIGFOOT_DATA_SERVICE_REDIS_URL ?? 'redis://localhost:6379/0'
};

var params = process.argv.slice(2);
if (params[0]) {
  redisParams.password = params[0];
} 

export default config
