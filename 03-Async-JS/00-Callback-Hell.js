// NODE Interview

// API Endpoint: www.dog.ceo/dog-api
// https://dog.ceo/api/breed/hound/images

//--------------------------------------------------------------
//                         LECTURE 41               ⭐⭐
//        THE PROBLEM With CallBacks: CallBack Hell
//--------------------------------------------------------------

// We're going to use dog.txt, this dog file here,. And from here

//----------------
// 🔴 Step 1. we will read the dog breed : labrador

//-----------------------------------
// 🔴 Step 2.  And then we are gonna do an HTTP request to get a random image of a dog with this breed, using an NPM Package "superagent" and use this module. We need to create a package.json file, using "npm init", and then do "npm install superagent"
// superagent.get(`https://dog.ceo/api/breed/${data}/images/random`) : for HTTP get Request and to get data, we need to use the ".end" method, where we are going to pass a callback function

//------------------------------------
// 🔴 Step 3. And then save that random image to another text file.

//------------------------------------
// 🔴 Step 4. Adding an error handler to it as well. We should never forget to handle the errors if any. Here we are also using "return", which means that if there is an error, it should immediately return the error

// So it's a four step process and all of this will involve call back functions. And by the end we will see the problem that we have when we use all these call back functions inside of one another.
//
//
//
//---------------------------------------------
// 🔴🔴 API that we are going to use: https://dog.ceo
//---------------------------------------------
//
//
//
//
//
//
//
//

const fs = require("fs");
const superagent = require("superagent");

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`Breed: ${data}`);

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err, res) => {
      if (err) return console.log(err.message);
      console.log(res.body.message);

      fs.writeFile("dog-img.txt", res.body.message, (err) => {
        console.log("Random dog image saved to file!");
      });
    });
});

// ❌ So we clearly, see the problem with so many nested callbacks. Its very difficult to read or maintain this kind of code. hence, its called as callback hell.
