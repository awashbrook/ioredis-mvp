const Redis = require("ioredis");

var redisParams = {
    host: 'localhost',
    port: '6379'
  };
  redisParams.password = "CAROLINA-regiment-mere-shot";
  // console.log(redisParams);
  
const redis = new Redis(redisParams);

redis.set("mykey", "Hello from io-redis!");
redis.get("mykey", function(err, result){
    if (err) { throw err; }

    console.log(result);
});

// use the promise instead of callback
redis.get("mykey").then(function (result) {
    console.log(result);
});

redis.zadd("vehicles", 0, "car", 0, "bike");
redis.zrange("vehicles", 0, -1, "WITHSCORES").then((res) => console.log(res));
