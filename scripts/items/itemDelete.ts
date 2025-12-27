import fetch from 'node-fetch';

const run = async () => {
  const result = await fetch(`${process.env.BASE_URL}/item/batchDeleteItem`, {
    method: 'DELETE',
    body: JSON.stringify({
      storeId: 1681326061835,
      list: [12345123],
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
