// @flow
import {getProofType, verifyProof} from './index.js';
import {readFileAsync, readDirAsync} from './helpers.js';

const testGetProofType = () => {
  const proofType_TLSNotary = getProofType('tlsnotary notarization file\n  /X]H_<Õ¥ïê');
  const proofType_Android = getProofType('AP¿lHTTPResponseY"{"error":[],"result":{');
  // $FlowFixMe
  console.log(`index.js/getProofType:  ${proofType_TLSNotary === 'proofType_TLSNotary' && proofType_Android === 'proofType_Android'}`); // eslint-disable-line no-console 
};

const autoVerify = async () => {
  const proofs = await readDirAsync('./proof/');
  for (var h = 0; h < proofs.length; h++) {
    var path = './proof/' + proofs[h];
    const parsedProof = new Uint8Array(await readFileAsync(path));
    try {
      const verifiedProof = await verifyProof(parsedProof);
      // eslint-disable-next-line no-console
      console.log(verifiedProof.mainProof);
      // eslint-disable-next-line no-console
      console.log(verifiedProof.extensionProof);
    } catch(e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }
};

export const runTest = () => {
  testGetProofType();
  // eslint-disable-next-line no-console
  autoVerify().then(() => console.log('finish')).catch(e => console.log(e));
};

global.testAll = runTest;
