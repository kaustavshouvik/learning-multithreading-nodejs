import { Worker } from 'node:worker_threads';

// 1. Create a thread.
new Worker('./worker.js');

// 2. Block the main thread.
while (true) {}

console.log(`Main: End of code`);
