# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: 
   This, this in Javascript refers to a method that is used to call an instance. I have utilized this command while working on React applications as a student develper at Learn Academy. Its most often used when working with objects. It enables React to pinpoint a snapshot of one point in time which is known as an instance. Its very powerful because it allows React to contiunaully update based on different instances. this command is written when a developer is calling on the instance or an object. For example this.car would refer to a class named car and then this could be applied in order to add features to a car. 

  Researched answer: My answer was partially right. It can refer to an object. If in a function - refers to global object, in an event - refers to element that received event. In method- can refer to any object. When used outside of a function is a global object. When used with JSX in HTML element it refers to the element receiving the event. Note- if called directly, not a method or property of an object it is undefined. When using this with super() it creates an derived class. 



2. What is React? Why would you use it?
Your answer:
React is a  front-end framework used in web applications, that enables the user to have interactions with an application while that application updates those interactions in real-time. It is super powerful for creating a responsive user-interfaced application on the web. I have built several different applications while a student develper. React includes a nice boilerplate code which can then be customized for any particular application. You can easily add CSS elements and be able to utilize JSX which combines elements of HTML and javascript.  I built a pig latin translator that was able to accept user input of English language words and return the same sentence in Pig Latin. It works well in React because of the instant update feature that is so powerful in React. As the user enters the information it translates based on my javasript code and I was able to customize my application and add visual elements using CSS. 

  
  Researched answer: While my answer was correct it is also a Javascript library. It is component-based which lets you manage their state and build complex user interfaces. React native can be used for mobile applications. React can interface with other libraries and frameworks which increases its usefulness. It utilizes dynamic coding principles so your elements and components built in react can be reused to create complex applications. It uses JSX which can be used to embed user input, this is powerful and within react it is also secure because it doesn't allow for any injected code, everything is converted to a string before it is rendered. This prevents cross-site scripting attacks. 




3. Which lifecycle method is required in a React class component?
 Your answer:
The lifecycle methods of react include birth, creating  an application on the DOM ( document object model ) also called mounting , growth  adding a node on the DOM , maintaining the DOM adult phase, Deleting the DOM, death. In the React class component you are growing adding elements to the DOM. Everytime you add a class component you are adding a feature to the object you created. During my time as a develper I have become quite familar with all of the lifecycle methods and have been able to appreciate what a powerful tool React is. 

  Researched answer: Render is the function that is used when a DOM receives a react element this is the only required method. I was partially correct but I didn't name the correct react lifecycle methods which are getInitialState, componentWillMount, render, and componentDidMount. The order is super important when using these methods. getInitialState sets state for component class instance. ComponentWillMount always used before react renders or mounts. One uses render which lets you see your component on screen and in the DOM. 




4. What is JSX? What is one syntax difference between HTML and JSX?
 Your answer:
JSX is used in React from my experience and lets the user utilize HTML elements in javascript without having to use a link or connect those elements to javascript like you would have to in building just a plain website of HTML, CSS and javascript. One difference between HTML and JSX is the capitalization on the tags. For example a HTML tag for header 1 would look like <H1></H1> where as the JSX tag would look like <h1></h1>. A plain HTML file can't utilize javascript unless it is linked to the HTML file. A JSX file doesn't need that link.

 
  Researched answer:

Okay I mostly got the answer right however I missed some key points. JSX is Javascript syntax extension or Javascript XML. It enables you to write HTML within Javascript. The key syntax diffences are, for in HTML is HTMLfor in JSX. JSX must return a single parent element so you have to use fragment <>..</> if not it won't compile in your browser. JSX uses curly braces or code blocks instead of script tags. JSX class components don't use the class keyword instead it uses className. All HTML attributes are written using camelCase in JSX. Inline styling is also available which is not recommended when using just HTML. 

5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer:
   Yarn is used in react to set up the boilerplate code that comes with a React application once it is run in your terminal. It is a code snippet that contains lots of files in order to properly set up all your needed files in a react application. All the files are modified because yarn sets them up when it is ran. During my time as a developer, I have used yarn both for setting up Jest testing application and also in React to set up a react application. Yarn isn't specific to an application and can be used with different ones. When you run yarn in Jest it does a similar setup as when using it in react. 

  Researched answer: Yarn is a package manager that is open source. Other developers can create a solution which you can utilize. The code is shared using the package and includes a json file or manifest that describes the package. It can also be used as a project manager. It was developed by Facebook for Node.js Javascript runtime environment. Yarn uses checksum to verify code before it is executed. This enhances the security despite it being open source. It works on all systems and even has an offline mode if you have installed a package before. Because it uses checksum which is the same thing networks use when initiating a connection it is able to maximize network utilization. The checksum also prevents duplicates and mismatching. 




6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: Like the name implies, anonymous function is one that is not named. Because functions are reusable, there are some advantages to creating a function to be used later and that is the purpose behind the anonymous function. Dynamic code is reusable and scalable which makes it ideal for using it multiple times and different ways. 

  Researched answer:


## Looking Ahead: Terms for Next Week

1. Conditional rendering: This can be done using if, && ,?,!
The if is restricted to the block of the component. && checks the condition if true it returns the element after the && if false it is ignored or skipped. ternary operator is used instead of if else statements condition ? true:false. If condition is true then statement 1 renders if not false is rendered. Switch case used for
multiple conditional renderings it is applied based on different state. enum used to map between different states or conditions. You use 2 objects and then have 2 conditions each state is rendered depending upon which state is true at the time. It's useful for log in inputs. If user is logged in it displays application if user isn't logged on it displays please log on. 

2. Object-oriented programming: Programming that is based on objects which contain data and fields called atributes. These can be manipulated using code called procedures or methods. Class is the blueprint for an object but it doesn't define data. There are four basic concepts abstration, encapsulation, inheritance and polymorphism. Abstraction is when only the most important information is shown. An example  is what a user sees on a website, they don't see the code only the finished site. Encapusulation it binds data,methods and variables and properties into a single unit.Class is encapsulation. Inheritance is creating a new class form an exsisting class. Creating child classes from a parent class, the child class inherits all of the features of the parent class but can include its own features. Polymorphism a hierarchy of classes, related by inheritance. When you call a function a different one can be executed depending on the object type,

3. Ruby: Ruby is an interpreted open source language with a focus on simplicity and productivity according to its website. It blends functional and imperative programming. It is an object-orientated language based on Perl, Smalltalk, Eiffel, Ada and Lisp. Everything including number and other primitive data are objects in Ruby. You can attach a closure or block to any method which decribes how the method should act. 

4. Ruby blocks: These use the Lisp culture according to Matz the creator of Ruby. They are very flexible. A closure or block can be attached to any method. The code in a block is enclosed with curly braces (code block). You can assign it a name. A block called from a function  with the same name can use that function. Call a block using yield. You can write it with two parameters using || with a comma between the two parameters. 

5. Ruby hashes: A collection of key-value pairs with the indexing done through the keys of the object not a number like an array. You can create a hash using Hash.new or Hash.new ("value") or Hash.new "value". If you access a key with default value it returns that value if the key doesn't exist. An Ruby object can be used as a key or value. Hash has built in methods too. These include hash == other_hash tests whether 2 hashes are equal. 
hash.key - references a value from hash
hash.clear- removes key values from the hash
hash.default - returns default hash value for hash or default key value if key is not in hash. 
