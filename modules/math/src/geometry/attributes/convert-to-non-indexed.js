/* eslint-disable */

export function convertBuffersToNonIndexed({indices, attributes}) {
  const geometry2 = new BufferGeometry();

  for (const name in attributes) {
    const attribute = attributes[name];

    const array = attribute.array;
    const itemSize = attribute.itemSize;

    const array2 = new array.constructor(indices.length * itemSize);
    let index = 0,
      index2 = 0;

    for (var i = 0, l = indices.length; i < l; i++) {
      index = indices[i] * itemSize;
      for (var j = 0; j < itemSize; j++) {
        array2[index2++] = array[index++];
      }
    }
    geometry2.addAttribute(name, new BufferAttribute(array2, itemSize));
  }

  var groups = this.groups;

  for (var i = 0, l = groups.length; i < l; i++) {
    var group = groups[i];
    geometry2.addGroup(group.start, group.count, group.materialIndex);
  }

  return geometry2;
}
