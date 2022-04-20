/**
 * @description 网络请求默认配置
 * @author Gavin
 */
import { settings } from './settings.config';

interface NetworkConfig {
  baseURL?: string;
  timeout?: number;
}
export const networkConfig: NetworkConfig = {
  baseURL: settings.baseURL,
  timeout: 5 * 1000,
};
