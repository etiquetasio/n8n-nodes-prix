import fetch from 'node-fetch';

const run = async () => {
  const result = await fetch(`${process.env.BASE_URL}/item/list/1/4/10/0`, {
    method: 'POST',
    body: JSON.stringify({
      // pcBarCode: '',
      // pcItemTitle: '',
      // pcProductSku: '',
      // pcProductCode: '',
      // attrName: 'default',
      // attrClass: 'default',
      // label: null,
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
