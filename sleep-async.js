const sleep = (n) => new Promise((res) => setTimeout(res, n));

console.log(new Date()); 
// 2021-03-22T19:24:18.595Z

// Reduce
const arr = [1, 2, 3];

const startTime = new Date().getTime(); 

const asyncRes = await arr.reduce(async (memo, e) => {
	await sleep(10);
	return (await memo) + e;
}, 0);

console.log(`Took ${new Date().getTime() - startTime} ms`);
// Took 11-13 ms

// Map
const asynchMapRes = await Promise.all([1,2].map(async (i) => {
    await sleep(100);
    return i + 1;
}));

console.log(asynchMapRes);
console.log(new Date());

