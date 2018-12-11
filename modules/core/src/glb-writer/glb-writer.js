import GLBBuilder from './glb-builder';
import {saveBinaryFile} from '../common/file-utils/save-binary-file';

function encodeGLB(json, options) {
  return new GLBBuilder().encode(json, options);
}

// TODO - target writer structure not yet clear
export default {
  name: 'GLB',
  extension: 'glb',
  writeToFile: saveBinaryFile,
  // TODO - encode standard format? Encode mesh to binary?
  encodeToBinary: encodeGLB
};