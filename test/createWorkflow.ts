export function createWorkflow(parameters: Record<string, unknown>) {
  return {
    name: 'My workflow',
    nodes: [
      {
        parameters,
        id: '8908d2ae-34f7-40c4-a41d-d92901dbca03',
        name: 'prix',
        type: 'n8n-nodes-prix.prix',
        typeVersion: 1,
        position: [700, 360],
        credentials: {
          etiquetasioApi: {
            id: '6',
            name: 'Conta PRIX ESL',
          },
        },
      },
    ],
    pinData: {},
    connections: {},
    active: false,
    settings: {},
    versionId: '',
    meta: {
      instanceId:
        'b01e4ebf540954d4c29a722da7612e76b42b29f3ac53bdcb88b7b04aa2e98756',
    },
    tags: [],
  };
}
