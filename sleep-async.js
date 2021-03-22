const sleep = (n) => new Promise((res) => setTimeout(res, n));

console.log(new Date());

// Reduce
const asyncRes = [1, 2, 3].reduce(async (memo, e) => {
    console.log(new Date());
    await sleep(10);
    return (await memo) + e;
},0)

console.log(asyncRes);
console.log(new Date());

// Map
const asynchMapRes = await Promise.all([1,2].map(async (i) => {
    await sleep(100);
    return i + 1;
}));

console.log(asynchMapRes);
console.log(new Date());
