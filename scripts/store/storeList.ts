import fetch from 'node-fetch';

const run = async () => {
  const result = await fetch(`${process.env.BASE_URL}/store/list/1/10`, {
    method: 'POST',
    body: JSON.stringify({
      storeName: '168',
    }),
    headers: {
      Authorization: process.env.TOKEN,
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });

  const body = await result.json();

  console.dir({ status: result.status, body }, { depth: null });
};

(async () => {
  await run();
})();
