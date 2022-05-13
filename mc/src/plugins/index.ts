/**
 * @description 插件
 * @author Gavin
 */
import _ from 'lodash';
import { filesGlobEager } from '@/utils/modules/format';
const files = import.meta.globEager('./modules/*/index.ts');
const modules = filesGlobEager(files, /(\.\/modules\/|\/index.ts)/g);

export const plugins = () => {
  _.values(modules).map((item) => item())
}