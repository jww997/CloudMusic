/**
 * @description 国际化
 * @author Gavin
 */
import { createI18n } from 'vue-i18n';
import en from './en-US';
import cn from './zh-CN';

const locale = localStorage.getItem('arco-locale') || 'zh-CN';

const message = {
  'en-US': en,
  'zh-CN': cn,
};
export const i18n = createI18n({ locale, message });
