"use strict";

//-------------
// Memoization -----> Specific Form of Caching
//-------------

/*

Memoization is simply a way to remember a solution to a problem.
So you don't have to calculate it again.

Memoization is a specific form of caching that involves caching the return value.
That is the return value of this function based on its parameters.

And if the parameter of this function doesn't change like it is here, then it's memoized.

That is, it uses the cache because it's calculated the same thing before with the same parameter, and it will return a cached version of the function it's memoized 

However, if the parameter changes. Well, it's a different. Parameter that it's never seen before.
So it's going to calculate both times.


*/

//------------------
// Normal function
//-----------------

const addition = function (n) {
  console.log("long time");
  return n + 20;
};

console.log(addition(5));
console.log(addition(5));
console.log(addition(5));

/*
long time
25
long time
25
long time
25
*/

//------------------------
// 🔥 Memoized function
//------------------------

const cache = {};

const memoizedAddTo70 = function (key) {
  if (key in cache) {
    return cache[key];
  } else {
    console.log("Long running task");
    cache[key] = key + 70;
    return cache[key];
  }
};

console.log("Result 1:", memoizedAddTo70(10));
console.log("Result 2:", memoizedAddTo70(10));
console.log("Result 3:", memoizedAddTo70(10));

console.log("Result 4:", memoizedAddTo70(20));

console.log(cache);

/*
Long running task
Result 1: 80
Result 2: 80
Result 3: 80
Long running task
Result 4: 90

{10: 80, 20: 90}
*/
