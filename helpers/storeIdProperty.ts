import { INodeProperties } from 'n8n-workflow';

export const storeIdProperty = (
  property: Partial<INodeProperties> = {},
): INodeProperties[] => [
  {
    displayName: 'storeId',
    name: 'storeId',
    type: 'resourceLocator',
    default: {
      mode: 'id',
      value: '',
    },
    modes: [
      {
        displayName: 'Da lista',
        name: 'list',
        type: 'list',
        placeholder: 'Selecione uma loja',
        typeOptions: {
          searchListMethod: 'getStores',
          searchable: true,
        },
      },
      {
        displayName: 'Por ID',
        name: 'id',
        type: 'string',
        validation: [
          {
            type: 'regex',
            properties: {
              regex: '[0-9]*',
              errorMessage: 'ID inválido',
            },
          },
        ],
        placeholder: 'ID_DA_LOJA_AQUI',
      },
    ],
    ...property,
  },
];
