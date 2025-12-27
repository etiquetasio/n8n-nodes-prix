import type {
  ICredentialTestFunctions,
  ICredentialsDecrypted,
  IDataObject,
  INodeCredentialTestResult,
} from 'n8n-workflow';

import { getprixLogin } from './getprixLogin';

export async function prixCredentialTest(
  this: ICredentialTestFunctions,
  credentials: ICredentialsDecrypted,
): Promise<INodeCredentialTestResult> {
  try {
    const tokenRequest = await getprixLogin.call(
      this,
      credentials.data!,
    );

    if (!tokenRequest.token) {
      return {
        status: 'Error',
        message: 'Não foi possível gerar token',
      };
    }
  } catch (err) {
    return {
      status: 'Error',
      message: `Não foi possível gerar token: ${err.message}`,
    };
  }

  return {
    status: 'OK',
    message: 'Conexão bem-sucedida!',
  };
}
