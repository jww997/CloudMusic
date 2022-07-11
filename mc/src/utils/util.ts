/**
 * @description 可共用的方法
 * @author Gavin
 */

/**
 * 遍历赋值
 * @param target 目标对象
 * @param origin 源对象
 * @param keys 需要遍历的属性
 * @returns target
 */
type MAPKEYS = (target: object, origin: object, keys: string[]) => object
export const mapKeys: MAPKEYS = (target, origin, keys) => {
    keys.map(key => target[key] = origin[key])
    return target
}
