let delay = -100;
const lines = ['|', '/', '-', '\\', '|'];

for (const line of lines) {
  setTimeout(() => {
    process.stdout.write(`\r${line}    `);
  }, delay += 200);
}

setTimeout(() => {
  process.stdout.write('\n');
}, 901);