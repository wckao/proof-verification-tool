import {getProofType} from './index.js';

const testGetProofType = () => {
  const proofType_TLSNotary = getProofType('tlsnotary notarization file\n  /X]H_<Õ¥ïê');
  const proofType_Android = getProofType('AP¿lHTTPResponseY"{"error":[],"result":{');
  // eslint-disable-next-line
  console.log(`index.js/getProofType:  ${proofType_TLSNotary === 'proofType_TLSNotary' && proofType_Android === 'proofType_Android'}`);
};

export const runTest = () => {
  testGetProofType();
};
