import { parentPort } from 'worker_threads';

parentPort.on('message', (msg) => {
  console.log(`[THREAD] Received ->`, msg);
});

parentPort.postMessage({ passedIn: 'Message from thread' });
