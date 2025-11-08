import DicomPicker from "@/components/DicomPicker";
import dicomDict from "@/utils/DcmFile/dicom-dict";
import { parseDicom, dataSetToTree } from "@dcmtools/dicom-parser";
import { Table } from "antd";
import { cloneDeep } from "lodash-es";
import { useMemo, useState } from "react";

function DicomTag() {
  const [tags, setTags] = useState(null);

  const handleDicomChange = (arrayBuffer) => {
    // Parse the DICOM file using dcmtools
    try {
      const dataSet = parseDicom(new Uint8Array(arrayBuffer));
      const tags = dataSetToTree(dataSet, dicomDict);
      setTags(tags);
      console.log(tags);
    } catch (error) {
      console.error("Error parsing DICOM file:", error);
    }
  };

  const columns = [
    {
      title: "Tag",
      dataIndex: "tag",
    },
    {
      title: "VR",
      dataIndex: "vr",
    },
    {
      title: "Keyword",
      dataIndex: "name",
    },
    {
      title: "Value",
      dataIndex: "value",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div>
        <DicomPicker onChange={handleDicomChange} />
      </div>
      <div>{tags && <Table rowKey="key" dataSource={tags} columns={columns} pagination={false} />}</div>
    </div>
  );
}

export default DicomTag;
