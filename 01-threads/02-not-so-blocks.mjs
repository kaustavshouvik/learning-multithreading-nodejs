/*
  -> State right after 'START' log --> 'Running'.
  -> State right after 'DONE' log --> 'Sleep'.
*/

function blockButOnlyALittleWhile() {
  for (let i = 0; i < 3_000_000_000; i++) {}
}

setInterval(() => {
  console.log('START');
  blockButOnlyALittleWhile();
  console.log('DONE');
}, (3 + 5) * 1000);
