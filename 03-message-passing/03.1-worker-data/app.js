import { Worker } from 'worker_threads';

/*
  The data is first copied then passed in to the thread.
  The cloning is done by v8 the it's based off of structured clone.
  
  We can use JSON.stringify() and JSON.parse() as well,
  but ome types like buffer, big int can't be copied that way,
  which could be copied using structured clone.
    -> Uses v8.serialize() and v8.deserialize() internally.
*/

new Worker('./worker.js', { workerData: 'Some text, from main thread' });
