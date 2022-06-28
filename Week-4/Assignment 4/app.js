function delayedResultPromise(n1, n2, delayTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n1 + n2);
    }, delayTime);
  });
}

delayedResultPromise(4, 5, 3000).then(console.log);

async function main(n1, n2, delayTime) {
  const result = await delayedResultPromise(n1, n2, delayTime);
  console.log(result);
}

main(-5, 10, 2000);
