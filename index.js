function sayHello(name) {
    return `Hello, ${name}!`;
}

// Run the function if script is called directly
if (require.main === module) {
    console.log(sayHello("Jenkins"));
}

module.exports = sayHello;
