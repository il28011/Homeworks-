function greet(name, greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}

const loggedGreet = logArguments(greet);

loggedGreet("Alice");
loggedGreet("Bob", "Hi");
