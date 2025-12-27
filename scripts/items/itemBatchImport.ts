import fetch from 'node-fetch';

const run = async () => {
  const result = await fetch(`${process.env.BASE_URL}/item/batchImportItem`, {
    method: 'POST',
    body: JSON.stringify({
      storeId: 1,
      merchantId: 1,
      agencyId: 1,
      unitName: 1,
      itemList: [
        {
          attrCategory: 'default',
          attrName: 'default',
          barCode: '100001234',
          // productCode: '',
          // classLevel: '',
          // unit: '',
          // productArea: '',
          // qrCode: 'https://example.com',
          // nfcUrl: 'https://example.com',
          // productSku: '',
          // itemTitle: 'Teste',
          // originalPrice: '600',
          price: '6300',
          // stock1: 1,
        },
      ],
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
