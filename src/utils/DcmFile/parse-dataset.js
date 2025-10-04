import DICOM_DICT from "./dicom-dict.js";

const VRHandlers = {
  PN: (dataSet, tag) => dataSet.string(tag),
  LO: (dataSet, tag) => dataSet.string(tag),
  SH: (dataSet, tag) => dataSet.string(tag),
  DA: (dataSet, tag) => dataSet.string(tag), // 日期, 你可以再转成 Date
  TM: (dataSet, tag) => dataSet.string(tag), // 时间
  UI: (dataSet, tag) => dataSet.string(tag),
  US: (dataSet, tag) => dataSet.uint16(tag),
  SS: (dataSet, tag) => dataSet.int16(tag),
  UL: (dataSet, tag) => dataSet.uint32(tag),
  SL: (dataSet, tag) => dataSet.int32(tag),
  FL: (dataSet, tag) => dataSet.float(tag),
  FD: (dataSet, tag) => dataSet.double(tag),
  DS: (dataSet, tag) => dataSet.floatString(tag), // decimal string
  IS: (dataSet, tag) => dataSet.intString(tag),
  SQ: (dataSet, tag) => {
    const seq = dataSet.elements[tag];
    if (!seq || !seq.items) return [];
    return seq.items.map((item) => parseDataSet(item.dataSet)); // 递归解析
  },
};

function toDicomTag(tagKey) {
  // 1. 去掉 x 前缀
  const cleanTag = tagKey.startsWith("x") ? tagKey.substring(1) : tagKey;

  // 2. 拆分成 group 和 element
  const group = cleanTag.substring(0, 4);
  const element = cleanTag.substring(4, 8);

  // 3. 格式化成 (gggg,eeee)
  return `(${group},${element})`;
}

function parseDataSet(dataSet) {
  const result = {};
  for (const tag in dataSet.elements) {
    const element = dataSet.elements[tag];
    const dicomTag = toDicomTag(tag);
    const dictEntry = DICOM_DICT[dicomTag] || { name: tag, vr: element.vr };

    const handler = VRHandlers[dictEntry.vr];
    let value = null;
    if (handler) {
      try {
        value = handler(dataSet, tag);
      } catch (e) {
        value = null;
      }
    }

    result[dictEntry.name] = value;
  }
  return result;
}

export default parseDataSet;
