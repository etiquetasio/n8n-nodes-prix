import { IRun } from 'n8n-workflow';

export const getNodeResultData = (result: IRun, nodeName: string) => {
  const nodeResultData = result.data.resultData.runData[nodeName];

  if (process.env.DEBUG === 'true') {
    console.dir({ nodeResultData }, { depth: null });
  }

  return nodeResultData;
};
