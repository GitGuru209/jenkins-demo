const assert = require('assert');
const sayHello = require('./index');

try {
    assert.strictEqual(sayHello('World'), 'Hello, World!');
    console.log('✅ Test passed');
} catch (err) {
    console.error('❌ Test failed:', err.message);
    process.exit(1); // fail the build if test fails
}
