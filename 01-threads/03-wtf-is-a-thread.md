A unit of execution.

Each process has at least one thread.

1. Has it's own PC.
2. Has it's own states.

Suppose a process has two threads: ThreadA + ThreadB.

These two threads gets scheduled individually.

Since threads and processes get scheduled very similarly,
why not create a new process to achieve parallelism?

- Creating a thread is much faster than creating a process.
  Like maybe up to 5x faster.
- Much lightweight, less overhead.
- Shares memory.

Suppose there are 6 threads running on a 4 core machine:

- 6 threads are running concurrently.
- 4 threads are running in parallel.

When you run a node process, there will be several threads
created as part of that process.

Some of them may be:

- GC.
- v8 stuff.
