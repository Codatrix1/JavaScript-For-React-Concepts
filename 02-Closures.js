"use strict";

//------------------
// CLOSURES
//-----------------

/*

There is a 🎇 Mystical 🎇 method in JavaScript, 
that many developers fail to Fully Understand ❗❗. Its called CLOSURES

Closure🔱 is not a Feature that we Explicitly Use. It ❌ cant be created Manually like in the case of Arrays etc. 
It Automatically Happens like 🎇 Magic in Certain Situations. We just need to Recognize such situations

It includes
--------> ⚡  Execution Contexts
--------> ⚡  Call Stack ----> ORDER in which functions were CALLED, like in Stack
--------->⚡  Scope Chain ----> ORDER in which functions are WRITTEN in the code

⭕ CLOSURES brings everything Together, in a MAGICAL WAY ✨

Closure makes a function remember all the variables that existed at the function's birthplace essentially
So we can imagine the secureBooking as being the birthplace of this function. So of the Booker function, essentially.

And so this function remembers everything at its birthplace, by the time it was created.

To make it a bit more digestible, we can also say that thanks to the closure, a function does not lose connection to variables
that existed at the function's birthplace
*/

let passengerCount = 20; // 2nd Priority

// CLOSURE IN secureBooking for passengerCount variable
const secureBooking = function () {
  let passengerCount = 0; // 1st Priority: // Supposed to be Lost, but ITS NOT 🔱: Closure is the reason

  return function () {
    passengerCount++;
    console.log(`${passengerCount} Passengers`);
  };
};

const booker = secureBooking();

booker(); // 1 Passengers
booker(); // 2 Passengers
booker(); // 3 Passengers

// Any function always has access to the variable environment of the execution context in which the function was created. Now, in the case of booker, this function was created. It was born in the execution context of secure booking, which was popped off the stack previously, remember?

// So, therefore the booker function will get access to this variable environment, which contains the passengerCount variable.
// And this is how the function will be able to read and manipulate the passengerCount variable. And so it's this connection that we call closure.

// So the function attempts to increase the passengerCount variable. However, this variable is not in the current scope.

// And so JavaScript will immediately look into the closure and see if it can find the variable there.

// And it does this even before looking at the scope chain. For example, if there was a global passengerCount variable set to 10, it would still first use the one in the closure. So the closure basically has priority over the scope chain. And so after running this function,
// the passengerCount becomes one. This message is logged.

/*

--------
SUMMARY
--------

⭐ Closure is the closed over variable environment of the execution context in which a function was created even after that execution context is gone, or in other words, even after the function to which the execution context belongs has returned.

⭐ A Closure gives a function access to all the variables of its parent function. So the function in which it is defined even after that parent function has returned.

⭐ Let's say analogy is that a closure makes sure that a function does never lose connection to the variables that existed at the function's birthplace. It remembers the variables, even after the birthplace is gone.

It's like a person who doesn't lose connection to their hometown.

⭐ Finally, some people like to think of this attached variable environment as a backpack. So in this analogy, a function has a backpack,
which it carries around wherever it goes. And this backpack contains all the variables that were present in the environment in which the function was created.

Then whenever a variable can't be found in the function scope, JavaScript will look into the backpack and take the missing variable from there.

---------------
🔥 CONCLUSION
--------------
Also, there is no way for us to explicitly access closed over variables. That's because closures are not like a tangible thing.
They're not like an object or so that we can access.

So we cannot just reach into a closure and take variables from it. That's impossible because a closure is just an internal property of a function. We can observe that a closure happens because functions magically keep having access to variables that should no longer exist,
but we cannot directly access these variables.

However, what we can do is to actually take a look at this internal property.
*/

console.dir(booker);

// 🟢 Double brackets in the 3 scopes, displayed, have [[Scopes]] :
// Internal Property which we ❌CANT ACCESS with our code
