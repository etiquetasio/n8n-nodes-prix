import type {
  ILoadOptionsFunctions,
  INodeListSearchResult,
} from 'n8n-workflow';

import { prixApiRequestAllItems } from '../transport';

import fs from 'fs';

export async function getStores(
  this: ILoadOptionsFunctions,
  filter?: string,
): Promise<INodeListSearchResult> {
  const result = await prixApiRequestAllItems.call(
    this,
    {
      url: (page, size) => `/zk/store/list/${page - 1}/${size}`,
      method: 'POST',
      body: {
        storeName: filter,
      },
    },
    (response) => response.data.rows,
    (response) => response.data.total,
  );

  return {
    results: result?.map((store: any) => ({
      name: store.storeName,
      value: store.storeId,
    })),
  };
}
