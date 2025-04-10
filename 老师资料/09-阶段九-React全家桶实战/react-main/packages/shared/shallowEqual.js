/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
import is from './objectIs';
import hasOwnProperty from './hasOwnProperty';

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */

function shallowEqual(objA: mixed, objB: mixed): boolean {
  // 此处是判断对象objA和对象objB两个对象所指引的内存地址是否一样, 如果一样就不会往下走了直接返回true
  if (is(objA, objB)) {
    return true;
  }

  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (let i = 0; i < keysA.length; i++) {
    const currentKey = keysA[i];
    if (
      // 如果对象objB中不存在objA对象中遍历出来的属性那么直接返回false ||
      // objA中的每一项和objB中的每一项是否相等, 注意:如果属性名的名字相同, 值如果对应的是对象的话, 也就意味着指针指向同一块内存地址, 属性值里面具体的值发生变化react是不做监听的 也就是说函数shallowEqual在进行比较时, 只是浅层比较, 只比较了两个对象内存地址和里面对应的属性名是否相等
      !hasOwnProperty.call(objB, currentKey) ||
      !is(objA[currentKey], objB[currentKey])
    ) {
      return false;
    }
  }

  return true;
}

export default shallowEqual;
