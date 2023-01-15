---
title: What is Javascript? - web://workbook
keywords: javascript, web development
description: Learn more about the scripting language that powers the world wide web.
menu:
  main:
    parent: web-development
    name: What is Javascript?
---

# What is Javascript?

Javascript is a programming language primarily used in web development. According to Wikipedia, over 98% of websites utilize Javascript on the client side (i.e. the browser) to display content.[[5](#works-cited)]

Alongside CSS and HTML, Javascript is one of three core components of web development across the internet. Where CSS defines the styles and HTML defines the structure, Javascript defines the logic behind what is being served to a browser. A developer using Javascript can access and manipulate the HTML and CSS on a page via [the Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document). 

Javascript is simple, powerful, and a great language to learn as a newer developer. This article will cover the history, some standards and pertinent information to know, as well as provide resources on further learning. 

## History

The Javascript language was first created in 1985 by Brendan Eich. Much like it's current iteration, the original language was utilized in Netscape's browser at the time to help serve web content. Netscape had originally named it LiveScript, but due to business decisions with its partner at the time Sun Microsystems, called it Javascript to "pair" with Java. [[3](#works-cited)]

Javascript was largely unpopular for the beginning of its life. There were a couple of major advancements that proliferated the language and skyrocketed its popularity: The Chrome V8 engine, and Node.js. 

Chrome V8 is an open-source Javascript engine released in 2008 with the first verison of the Google Chrome browser. It revolutionized Javascript in how it performs a "just-in-time" compilation of code. Chrome V8 also supported server-side scripting, which enabled web applications to balance what was being ran on the browser vs. on the server for an overall better user experience supporting a wide range of devices. [[7](#works-cited)]

Building on the technical capabilities of the Chrome V8, Node.js was released relatively soon after in 2009. Also open-source, Node.js is a runtime environment in Javascript, which essentially allowed Javascript to be ran on desktop applications. Many would argue the biggest selling point of Node.js is the Node Package Manager (npm), which to this day allows developers to find and install over 1.3 million packages to include in their projects. [[1](#works-cited)]

Today there are various frameworks built on Node.js that are common place in creating web applications. React is one framework you will hear about a lot, with approximately 40% of developers utilizing it in their web applications. [[8](#works-cited)] Created by Facebook, React allows for component-based development, meaning that developers can re-use complex bits of code to speed up and simplify their projects. JQuery is another very popular framework released in 2006, geared towards simplifying interaction with the DOM. Approximately 29% of developers utilize JQuery, according to StackOverflow's 2022 survey. [[8](#works-cited)] Each framework in Javascript has their unique quirks and limitations, so choosing one over the other is mostly based on project needs. 

## Standards

### ECMAScript

ECMAScript is the globally recognized standard for the Javascript language. There have been several iterations of the standard to include new advancements in Javascript, with the most recent version being released in 2020 [[2](#works-cited)]. Across all versions there are some key concepts to note: 

#### Imperative and Structured

Much of the ECMAScript's core programming structure is very similar to the C language. ECMAScript also has automatic semicolon insertion, most notably making the use of semicolons to end a statement in code optional. 

```js
const a = "this is allowed";
const b = "yes, this is also allowed"
```

Whether or not you add semicolons (or other aspects of ECMAScript that are optional) is a matter of preference. Best practice is to identify the styling of how you want to write your Javascript code, then keep that styling consistent throughout the project and/or company. 

#### Weakly Typed

Functions, function arguments, and variables are all weakly typed in ECMAScript, meaning types are assigned implicitly and not declared in the code itself. Instead of assigning a variable to a type of `Integer` or `String`, we can assign a variable with the `var`, `let`, or `const` keywords preceding the variable name. Each keyword affects what operations we can perform with the variable as well as  which parts of the program can access said variable (commonly known as scoping). 

```js
// Var is available within an entire function
var dog = "Fido";

// Let is only available within the block where it is defined.
let car = "Toyota";

function scopingExample() {
    var x = 1;
    if (x < 1) {
        let x = 2;
        console.log(x) // prints "2"
    }
    console.log(x) // prints "1"
}

// Const variables cannot be reassigned. 
const person = "Amanda";

// A const variable can still have operations performed on it. 
const contactList = [];
contactList.push("Amanda");
contactList.push("James");
contactList.pop();
```

Generally speaking, this also means that functions, function arguments, and variables can accept and return any type unless a user builds logic to check said typing prior to performing any operations. Here's an example of how this weak typing works in Javascript: 

```js
function add(a, b) {
    return a + b;
}

const a = "1";
const b = 2;

// This is allowed, but may cause unexpected behavior if the typing is not consistent.
console.log(add(a, b)); 
```

Note that we are not specifying that variables `a` and `b` need to be numbers. If we intend on only allowing numbers to be added in this function, we can refactor this code to check for the correct type before any operation. 

```js
function add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Both parameters should be a number.");
    }
    return a + b;
}
const a = "1";
const b = 2;

// Will throw an Error
console.log(add(a,b)); 
```

Now that we are checking for the type of a and b, this will throw a Type Error and stop the program from running further. This also has the added benefit of telling the programmer exactly what went wrong, which can help in the debugging process. 

#### Dynamic Typing

Javascript is a [dynamically typed language.](https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_typing) A user does not have to declare what kind of data a variable contains. This is done by the interpreter or compiler at runtime. Other examples of dynamically typed languages include Go(Golang) and Python.

Dynamic typing comes with benefits and drawbacks. It is somewhat easier to understand variable declaration when learning Javascript as your first programming language. However, this may cause you to create unexpected behavior in your program, since it is up to the user to keep track of what data is contained in a variable. 

A great example of this unexpected behavior can be found in the following: 

```js
let cat = {
    name: "Fluffy",
    breed: "Domestic Shorthair"
};
cat = 1;

function getName(animal) {
    return animal.name; 
}

getName(cat); // <-- This will cause an error! 1 does not have a field 'name'

```

In this code, we are (mistakenly) assigning an integer to a variable that we expect to be an object with a certain field. Accessing said field will cause an error. 

#### Transpiling

Javascript compilers support the ability to "transpile", which will convert Javascript to older versions of ECMAScript to allow older browsers to continue seeing web content. Internet Explorer is a prevalent example that does not support ES6 [[4](#works-cited)]. Transpilers will most commonly transpile down to ES3 (1999). [[2](#works-cited)]

## Learn More

Want to learn more about Javascript? Here are some resources we've compiled to help newer developers dive deeper into these concepts. 

### Readings

- [The Modern Javascript Tutorial](https://javascript.info/) - A comprehensive opensource online book and directory of modern Javascript practices, curated by developers in the community.  

- [JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages](https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4?keywords=javascript&qid=1673666186&sr=8-4) - Laurence Lars Svekis, Maaike van Puttena, and Rob Percival demonstrate the capabilities of JavaScript for web application development by combining theoretical learning with code exercises and fun projects that you can challenge yourself with. The guiding principle of the book is to show how straightforward JavaScript techniques can be used to make web apps ranging from dynamic websites to simple browser-based games. 

### Videos

- [JavaScript Crash Course For Beginners](https://www.youtube.com/watch?v=hdI2bqOjy3c) - Traversy Media does a wonderful job condensing a great deal of Javascript concepts into a relatively short video course on YouTube. 
- [Javascript Course for Beginners](https://www.youtube.com/watch?v=jS4aFq5-91M) - [freecodecamp.org](https://freecodecamp.org) provides a long-form video course on Youtube walking viewers through over 7 hours of content, building practical examples to apply learning like a blackjack game and a Google Chrome extension from scratch. 
- [JavaScript Full Course | JavaScript Tutorial For Beginners | JavaScript Training | Edureka](https://www.youtube.com/watch?v=o1IaduQICO0) - In this course by Erudeka

## Works Cited

All citations in this article use the [Institute of Electrical and Electronic Engineers (IEEE) format.](https://ieeeauthorcenter.ieee.org/wp-content/uploads/IEEE-Reference-Guide.pdf)

1. A. Nassri, “So long, and thanks for all the packages!,” npm Blog Archive: So long, and thanks for all the packages! [Online]. Available: https://blog.npmjs.org/post/615388323067854848/so-long-and-thanks-for-all-the-packages. [Accessed: 15-Jan-2023]. 
2. “ECMAScript,” Wikipedia, 10-Jan-2023. [Online]. Available: https://en.wikipedia.org/wiki/ECMAScript#Dynamic. [Accessed: 15-Jan-2023]. 
3. “An introduction to JavaScript programming and the history of JavaScript.,” LaunchSchool. [Online]. Available: https://launchschool.com/books/javascript/read/introduction. [Accessed: 12-Jan-2023]. 
4. “Javascript Versions,” w3schools. [Online]. Available: https://www.w3schools.com/js/js_versions.asp. [Accessed: 15-Jan-2023]. 
5. “JavaScript,” Wikipedia, 08-Jan-2023. [Online]. Available: https://en.wikipedia.org/wiki/JavaScript. [Accessed: 11-Jan-2023]. 
6. M. Gathoni, “The most popular JavaScript frameworks of 2022,” MUO, 06-Sep-2022. [Online]. Available: https://www.makeuseof.com/most-popular-javascript-frameworks/#most-popular-javascript-frameworks. [Accessed: 15-Jan-2023]. 
7. “What is Chrome V8? | cloudflare,” Cloudflare. [Online]. Available: https://www.cloudflare.com/learning/serverless/glossary/what-is-chrome-v8/. [Accessed: 15-Jan-2023]. 
8. “What is jQuery? A look at the web's most-used JavaScript library,” Kinsta®, 02-Nov-2022. [Online]. Available: https://kinsta.com/knowledgebase/what-is-jquery/#:~:text=Based%20on%20BuiltWith's%20Internet%20technology,11%20million%20websites%20running%20React. [Accessed: 15-Jan-2023]. 
