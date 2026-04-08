// Step 1: Import events module
const EventEmitter = require('events');

// Step 2: Create an event emitter object
const eventEmitter = new EventEmitter();

// Step 3: Register first listener
eventEmitter.on('userLogin', (username) => {
    console.log(`Listener 1: ${username} has logged in.`);
});

// Step 4: Register second listener (same event)
eventEmitter.on('userLogin', (username) => {
    console.log(`Listener 2: Welcome ${username}!`);
});

// Step 5: Register another event
eventEmitter.on('fileUploaded', (filename, size) => {
    console.log(`File uploaded: ${filename}, Size: ${size}KB`);
});

// Step 6: Trigger events using emit()

// Simulating async behavior using setTimeout
setTimeout(() => {
    console.log('\nTriggering userLogin event...');
    eventEmitter.emit('userLogin', 'Sharanya'); // passing data
}, 1000);

setTimeout(() => {
    console.log('\nTriggering fileUploaded event...');
    eventEmitter.emit('fileUploaded', 'report.pdf', 500);
}, 2000);