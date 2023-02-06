// NODE Interview

// API Endpoint: www.dog.ceo/dog-api
// https://dog.ceo/api/breed/hound/images/random

//--------------------------------------------------------------
//  LECTURE 42   ⭐⭐From CALLBACK HELL to ---> Promises
//--------------------------------------------------------------

// WE will see HOW TO CONSUME PROMISES first, and later we will see HOW TO BUILD OUR OWN PROMISES

//-----------------------------------------------------------------
// 🔴 Question 1. How to solve callback hell by using promises ?
//-----------------------------------------------------------------

// And we're gonna start off by using a promise for the HTTP request instead of the callback. And this is gonna work because the "superagent" library actually has support for Promises out of the box, and so we can simply use them here.

// For node functions, coming from internal node packages like "readFile", we will actually have to build the promise ourselves, and we will do that later in the next lecture, or so.

// But for now, I need to learn to LEARN HOW TO CONSUME PROMISES and only later how to build them.

// With the "superagent" library and more specifically with the ".get" method here. Because this method here actually RETURNS A PROMISE.

//--------------------------------------
// 🔴 Question 2. What is a PROMISE ?
//--------------------------------------

// Answer: A promise basically implements the concept of a future value. So basically, a value that we are expecting to receive some time in the future, so it's a bit like us saying, "Hey, server," or "Hey, API, please get me a random dog image "in the background and let me know when you're ready "and then give me that data back."

// So the promise doesn't have a value yet, because the server is actually still getting the data from the server asynchronously in the background but the promise is immediately available and basically promising us that it will get some data back in the future. And that state of the promise in that case, so right in the beginning, is a pending promise. So it's still pending, it still hasn't gotten back with any data, okay? So here at this point, we already have a promise that we can work with. Now all we need to do is consume it, which basically means that we wait for it to come back with the data. And to do that, we use the ".then" method on it.

// A promise as soon as it comes back with the data is called a "resolved promise". So in the beginning it's a pending promise and when it successfully gets the data, it is then a resolved promise. However, a resolved promise might not always be successful because there might have been an error. So we say that a resolved promise can either be fulfilled or rejected. The fulfilled promise actually has a result that we want to use.

// While a rejected promise is when there was an error. So remember the situation that we had before where we had a wrong dog breed. So in that case, we had an error, and we handled that error.

// Now the thing with this ".then" method here is that it actually only handles fulfilled promises but it doesn't do anything if there was an error, because for that, we actually have another method. So another mechanism of handling that. And that is the catch method.

// So right after the then method, we can chain another method which is called "catch".  And so this one will get called if there was an error. So in here, we actually have access to that error object.

const fs = require("fs");
const superagent = require("superagent");

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  if (err) return console.log(err.message);

  console.log(`Breed: ${data}`);

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err, res) => {
      if (err) return console.log(err.message);
      console.log(res.body.message);

      fs.writeFile(`dog-img.txt`, res.body.message, (err) => {
        if (err) return console.log(err.message);

        console.log("Data written to file!");
      });
    });
});

// So that is how we consume promises. So we started with ".get()" method here which returned a promise and so on that, we can chain the ".then" method which handles basically the successful case, and then in the end, we also chain the ".catch" method which handles the unsuccessful, so the rejected, promise.

// So we still have this callback function up here so all of this callback function and also here inside our then method, we have this callback function of the writeFile. So let's go ahead and fix that.....
