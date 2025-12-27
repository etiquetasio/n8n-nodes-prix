import fetch from 'node-fetch';

const run = async () => {
  const result = await fetch(`${process.env.BASE_URL}/user/getErpPublicKey`);

  const body = await result.json();

  console.dir({ status: result.status, body }, { depth: null });
};

(async () => {
  await run();
})();
