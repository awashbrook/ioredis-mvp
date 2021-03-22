
import config from './config.js'

let client = config.redisClient;

client.unlink(config.qualificationKey);

console.log('Starting Redis List data load');
console.log(new Date());
// Focus on test array from outset
const items = [1,2,3,4];
// Promise.all(arr.map(async (...) => ...)).  
const asynchRes = await Promise.all(items.map(async (i) => {
    let maxNumItems = 0;
    await client.lpush(config.qualificationKey, i).then((numberOfItems) => {
        // console.log("Number of Items under this Redis key: " + numberOfItems); 
        maxNumItems = numberOfItems
    });
    return maxNumItems;
}));
console.log(new Date());
console.log(asynchRes);

client.quit();