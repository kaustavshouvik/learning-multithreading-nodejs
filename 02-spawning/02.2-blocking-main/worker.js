import fs from 'node:fs';

fs.writeFile('text.txt', 'Some text, written from worker thread', (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Written to file');
});
