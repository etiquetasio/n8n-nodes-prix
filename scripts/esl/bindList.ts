import fetch from 'node-fetch';

const run = async () => {
  const result = await fetch(`${process.env.BASE_URL}/zk/bind/findBinds/1/10`, {
    method: 'POST',
    body: JSON.stringify({
      storeId: 1681442973520,
    }),
    headers: {
      Authorization: process.env.TOKEN,
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });

  const body = await result.json();

  console.dir(
    {
      status: result.status,
      body,
      length: body.data.list,
      totalElements: body.data.totalElements,
    },
    { depth: null },
  );
};

(async () => {
  await run();
})();
