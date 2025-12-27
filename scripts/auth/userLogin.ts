import fetch from 'node-fetch';

const run = async (user: string, encryptedPassword: string) => {
  const result = await fetch(`${process.env.BASE_URL}/user/login`, {
    method: 'POST',
    body: JSON.stringify({
      loginType: 3,
      account: user,
      password: encryptedPassword,
    }),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });

  const body = await result.json();

  console.dir({ status: result.status, body }, { depth: null });
};

(async () => {
  const [user, encryptedPassword] = process.argv.slice(2);

  if (!user || !encryptedPassword) {
    console.log(
      [
        'Error: missing parameters',
        'Usage: npm run x scripts/auth/userLogin.ts <user> <encryptedPassword>',
      ].join('\n'),
    );

    return;
  }

  await run(user, encryptedPassword);
})();
