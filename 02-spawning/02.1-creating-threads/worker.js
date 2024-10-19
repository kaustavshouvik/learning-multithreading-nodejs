const a = 10;

// This is actually sent to main thread.
// stdin, stdout & stderr are connected using streams.
//
// If the main thread is blocked,
// we're not gonna see the output.
console.log(`In worker: A = ${a}`);
