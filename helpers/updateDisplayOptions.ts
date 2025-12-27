import { IDisplayOptions, INodeProperties } from 'n8n-workflow';

import merge from 'lodash.merge';

export function updateDisplayOptions(
  displayOptions: IDisplayOptions,
  properties: INodeProperties[],
) {
  return properties.map((nodeProperty) => {
    return {
      ...nodeProperty,
      displayOptions: merge({}, nodeProperty.displayOptions, displayOptions),
    };
  });
}
