/*
  Port1 <----------------------> Port2

  Can send and receive message to and from any port.
    -> Data is copied first then sent.
       => It behaves just like 'workerData'.
*/
const channel = new MessageChannel();

const { port1, port2 } = channel;

// From port2.
port1.on('message', (msg) => {
  console.log('In port 1 ->', msg);
});

// From port1.
port2.on('message', (msg) => {
  console.log('In port 2 ->', msg);
});

// To port2.
port1.postMessage('Message from port 1');

// To port1.
port2.postMessage('Message from port 2');
