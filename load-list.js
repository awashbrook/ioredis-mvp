
import config from './config.js'

let client = config.redisClient;

client.unlink(config.qualificationKey);

console.log('Starting Redis List data load at: ' + new Date());
 
for(var i = 0; i < config.maxNumRange ;i++) {
   client.lpush(config.qualificationKey, i)
      .then(function (numberOfItems) { 
         // console.log("Number of Items " + numberOfItems);
         if (numberOfItems == config.maxNumRange) {
            console.log('Ending data load of ' + numberOfItems + ' items at: ' + new Date());
         }
      });
}
 
// console.log('Ending data load at:' + new Date());

client.quit();
