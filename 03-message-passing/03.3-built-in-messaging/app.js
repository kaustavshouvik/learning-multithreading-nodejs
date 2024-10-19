import { Worker } from 'worker_threads';

const thread = new Worker('./worker.js');

thread.on('message', (msg) => {
  console.log(`[MAIN] Received ->`, msg);
});

thread.postMessage({ passedIn: 'Message from main thread' });
