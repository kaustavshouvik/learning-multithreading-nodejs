import { Worker } from 'node:worker_threads';

const a = 20;

new Worker('./worker.js');
new Worker('./worker.js');

console.log(`In main: A = ${a}`);
