import {
  ICredentialDataDecryptedObject,
  ICredentialTestFunctions,
  IExecuteFunctions,
  ILoadOptionsFunctions,
} from 'n8n-workflow';

import crypto from 'node:crypto';

export async function getprixLogin(
  this: IExecuteFunctions | ICredentialTestFunctions | ILoadOptionsFunctions,
  credentials: ICredentialDataDecryptedObject,
) {
  const publicKeyResult = await this.helpers.request({
    url: '/zk/user/getErpPublicKey',
    baseURL: credentials.baseUrl as string,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    json: true,
  });

  const password = crypto
    .publicEncrypt(
      {
        key: `-----BEGIN PUBLIC KEY-----\n${publicKeyResult.data}\n-----END PUBLIC KEY-----`,
        padding: crypto.constants.RSA_PKCS1_PADDING,
      },
      Buffer.from(credentials.password.toString()),
    )
    .toString('base64');

  const result = await this.helpers.request({
    url: '/zk/user/login',
    baseURL: credentials.baseUrl as string,
    method: 'POST',
    body: {
      loginType: 3,
      account: credentials.user,
      password,
    },
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    json: true,
  });

  return {
    token: result.data?.token,
    merchantId: result.data?.currentUser?.merchantId,
    agencyId: result.data?.currentUser?.agencyId,
  };
}
