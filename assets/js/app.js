/* Create editor */
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    theme: "ambiance"
});

/* Set editor options */
editor.setOption("fullScreen", true);
editor.setOption("mode", "javascript");
editor.setValue(`console.log("Hello World")`);

/* Node and others expressions */
function require() {
	console.error("'require' is a node.js recerved word.")
	return null;
}

function log () {
  var a = 5;
  console.log(a);
}

function example1 () {
	editor.setValue(`console.log("Hello World");`);
}

function example2 () {
	editor.setValue(`var name = "Valentina";
const age = 18;
let isProgrammer = true;

console.log(\`Hello, my name is \${name}, i'm \${age} years old\`);
`);
}

function example3 () {
	editor.setValue(`var name = "Valentina";
let isProgrammer = true;

if (isProgrammer) {
	console.log(\`\${name} is a programmer\`);
} else {
	console.log(\`\${name} is not a programmer\`);
}
`);
}

function example4 () {
	editor.setValue(`var number1 = 55;
var number2 = 20;

console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);`)
}

function example5 () {
	editor.setValue(`function chocolate () {
	console.log("This is the chocolate function");
}

function cocoa () {
	console.log("This is the cocoa function");
}

function custom (name) {
	console.log("This is the " + name + " function");
}

chocolate();
cocoa();
custom("watermelon");
`);
}

function example6 () {
	editor.setValue(`function greet (name) {
	console.log(\`Hello \${name}! Welcome to javascript.\`);
  	alert(\`Hello \${name}! Welcome to javascript.\`);
}

function main () {
	var name = prompt("Please type your name");
	greet(name);
}

main();`);
}

function example7 () {
	editor.setValue(`/* For loop */
for (var i = 0; i < 5; i++) {
	console.log("Hello x" + i);
}

/* While loop */
var i = 0;
while (i < 5) {
	console.log("World x" + i);
	i++;
}`);
}

function example8 () {
	editor.setValue(`var age = 18;

if (age < 3) {
	console.log("Is a baby");
} 

else if (age < 12) {
	console.log("Is a child");
} 

else if (age < 18) {
	console.log("Is a teen");
} 

else if (age < 40) {
	console.log("Is an adult");
} 

else if (age < 100) {
	console.log("Is old");
} 

else {
	console.log("Wow, he has " + age + " years old!!");
}`);
}

function example9 () {
	editor.setValue(`var friends = ["Valentina", "Emma", "Sophia"];

console.log(friends);

friends.push("Ava");

console.log(friends);`);
}

function example10 () {
	editor.setValue(`var friends = ["Valentina", "Emma", "Sophia"];

// Using for loop
for (var i = 0; i < friends.length; i++) {
	console.log("Hello " + friends[i]);
}

// Using for-in
for (f in friends) {
	console.log("How are you? " + friends[f]);
}

// Using for-of
for (const friend of friends) {
    console.log("Good bye! " + friend);
}`);
}

function example11 () {
	editor.setValue(`var user = {
	"firstName" : "Valentina",
	"lastName" : "Avalos",
	"age" : 18,
	"country" : "Argentina",
	"ocupation" : "programmer",
	"prefix" : "she"
};

console.log(\`\${user.firstName} \${user.lastName} is a \${user.age} years old \${user.ocupation}\`); 
console.log(\`\${user.prefix} lives in \${user.country}.\`);
`);
}
