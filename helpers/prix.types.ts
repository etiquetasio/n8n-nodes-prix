import type { AllEntities } from 'n8n-workflow';

type EtiquetasioMap = {
  item: 'list' | 'delete' | 'import' | 'imageList' | 'imageSend';
  account: 'storeList' | 'licenseGet' | 'featureCodeGet' | 'storeCount';
  device:
    | 'baseList'
    | 'bindList'
    | 'tagList'
    | 'tagActiveUpdateList'
    | 'tagLedStart'
    | 'tagLedStop'
    | 'batchBind'
    | 'viewBindPic'
    | 'tagUpdateForce'
    | 'bindBackup'
    | 'tagUpdateForce'
    | 'tagByBarCode';
  template: 'list' | 'categoryList' | 'backup' | 'iconList';
  auth: 'loginInfo';
  stats:
    | 'tagModel'
    | 'baseStatus'
    | 'tagStatus'
    | 'baseTop5'
    | 'tagUpdateStatus'
    | 'itemBindRate'
    | 'eslLogs'
    | 'tagStore';
};

export type prix = AllEntities<prixMap>;
