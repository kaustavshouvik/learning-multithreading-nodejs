import { workerData } from 'worker_threads';

const port = workerData.port;

port.on('message', (msg) => {
  console.log(`[THREAD] Received ->`, msg);
});

port.postMessage({ passedIn: 'Message from thread' });
