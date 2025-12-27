import type { ICredentialType, INodeProperties } from 'n8n-workflow';

export class prixApi implements ICredentialType {
  name = 'prixApi';
  displayName = 'PRIX ESL API';
  documentationUrl = 'https://www.cloudprix.com.br/esl';
  properties: INodeProperties[] = [
    {
      displayName: 'Usuário',
      name: 'user',
      type: 'string',
      required: true,
      default: '',
    },
    {
      displayName: 'Senha',
      name: 'password',
      type: 'string',
      required: true,
      typeOptions: { password: true },
      default: '',
    },
    {
      displayName: 'Base URL',
      name: 'baseUrl',
      type: 'string',
      required: true,
      default: 'https://h-esl.cloudprix.com.br/',
    },
  ];
}
