/*
  This process will always be in the running state.
  Well, not exactly.

  Processes have states:
    1. Ready -> Ready to be executed, in CPU.
    2. Running -> Running, in CPU.
    3. Sleeping -> Waiting for some operation to finish,
      like server waiting for request.

  Usually, there are multiple processes running in a system.
  All processes should get CPU time.
  
  -> This is where context switching comes in, the schedular
    keeps swapping processes between states.
  -> A process gets little bit of CPU time then again it goes
    back to ready state, this is an instance of context switching.

  In the case of this node process:
    -> Tt keeps getting switched: ready --> running, running --> ready.
    -> The number of context switches is insane.
*/

const x = 10;

while (true) {}

console.log(x); // <-- Obviously, this never executes.
