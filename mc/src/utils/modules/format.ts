/**
 * @description 格式化
 * @author Gavin
 */

/**
 * 文件批量导入处理
 * @param {Files} files import.meta.globEager
 * @returns {FilesGlobEager}
 */
type FilesGlobEager = { [key: string]: any };
type Files = Record<string, FilesGlobEager>;
export const filesGlobEager = (
  files: Files,
  pattern: RegExp
): FilesGlobEager => {
  const modules = {};
  for (const key in files) {
    modules[key.replace(pattern, '')] = files[key].default;
  }
  return modules;
};