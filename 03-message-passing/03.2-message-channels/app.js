import { MessageChannel, Worker } from 'worker_threads';

/*
  We can pass this port as part of worker data.
    -> Which we can then use in the worker thread
      to send data to main thread.

    Port1 <---------------------> Port2
   (Thread1)                     (Thread2)
*/
const channel = new MessageChannel();

const { port1, port2 } = channel;

port1.postMessage({ passedIn: 'Message from main thread' });

port1.on('message', (msg) => {
  console.log(`[MAIN] Received ->`, msg);
});

new Worker('./worker.js', {
  workerData: { port: port2 },
  /*
    When passing in a port to a thread from main thread.
    The main thread shouldn't have access to it anymore.
  */
  transferList: [port2],
});

// Doing this with multiple threads or multiple channels,
// is just an implementation challenge.
