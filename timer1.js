let seconds = process.argv.slice(2);

for (let time of seconds) {
  if (time > 0 && !isNaN(time)) {
    time = time * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time);
  }
}