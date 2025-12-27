import crypto from 'node:crypto';

const run = (publicKey: string, password: string) => {
  const passwordEncrypted = crypto
    .publicEncrypt(
      {
        key: `-----BEGIN PUBLIC KEY-----\n${publicKey}\n-----END PUBLIC KEY-----`,
        padding: crypto.constants.RSA_PKCS1_PADDING,
      },
      Buffer.from(password.toString()),
    )
    .toString('base64');

  console.log('Encrypted password:', passwordEncrypted);
};

(async () => {
  const [publicKey, password] = process.argv.slice(2);

  if (!publicKey || !password) {
    console.log(
      [
        'Error: missing parameters',
        'Usage: npm run x scripts/auth/encryptPassword.ts <publicKey> <password>',
      ].join('\n'),
    );

    return;
  }

  run(publicKey, password);
})();
