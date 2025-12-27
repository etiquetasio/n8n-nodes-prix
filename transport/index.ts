import type {
  IExecuteFunctions,
  JsonObject,
  IHttpRequestOptions,
  ILoadOptionsFunctions,
  IDataObject,
} from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';
import { getprixLogin } from '../helpers/getprixLogin';

export async function prixApiRequest(
  this: IExecuteFunctions | ILoadOptionsFunctions,
  options: IDataObject,
) {
  const credentials = await this.getCredentials('prixApi');

  try {
    const { token } = await getprixLogin.call(this, credentials);

    if (process.env.DEBUG === 'true') {
      console.log(options);
    }

    return await this.helpers.request({
      json: true,
      ...options,
      baseURL: credentials.baseUrl as string,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        ...(options.headers as Record<string, unknown>),
        Authorization: token,
      },
    });
  } catch (error) {
    const apiError = new NodeApiError(
      this.getNode(),
      {
        reason: error,
      } as JsonObject,
      {
        httpCode: String(error.statusCode),
      },
    );

    throw apiError;
  }
}

export async function prixApiRequestAllItems(
  this: IExecuteFunctions | ILoadOptionsFunctions,
  options: {
    url: (page: number, size: number) => string;
  } & Omit<IHttpRequestOptions, 'url'>,
  getData: (response: any) => IDataObject[] = (response) => response.data.list,
  getTotal: (response: any) => number = (response) =>
    response.data.totalElements,
) {
  const returnData: IDataObject[] = [];

  let responseData;
  let page = 1;

  do {
    responseData = await prixApiRequest.call(this, {
      ...options,
      url: options.url(page++, 10),
    });

    returnData.push.apply(returnData, getData(responseData));

    if (getData(responseData).length === 0) {
      break;
    }
  } while (getTotal(responseData) > returnData.length);

  return returnData;
}
