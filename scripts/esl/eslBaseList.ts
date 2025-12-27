import fetch from 'node-fetch';

const run = async () => {
  const result = await fetch(
    `${process.env.BASE_URL}/apStation/list/1/10
  `,
    {
      method: 'POST',
      body: JSON.stringify({
        // merchantId: 1,
        // storeId: 1,
        // online: null,
        // apNameOrMac: null,
      }),
      headers: {
        Authorization: process.env.TOKEN,
        'Content-Type': 'application/json;charset=UTF-8',
      },
    },
  );

  const body = await result.json();

  console.dir({ status: result.status, body }, { depth: null });
};

(async () => {
  await run();
})();
