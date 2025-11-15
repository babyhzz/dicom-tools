import React, { useMemo } from "react";
import { Table } from "antd";
import dicomDict from "@/utils/DcmFile/dicom-dict";
import { dataSetToTree } from "@dcmtools/dicom-parser";

export default function DicomTagTable({ dataSet }) {
  const tags = useMemo(() => {
    if (!dataSet) return [];
    return dataSetToTree(dataSet, dicomDict);
  }, [dataSet]);

  const columns = [
    {
      title: "Tag",
      dataIndex: "tag",
      width: 140,
    },
    // {
    //   title: "VR",
    //   dataIndex: "vr",
    // },
    {
      title: "Keyword",
      dataIndex: "name",
      width: 140,
    },
    {
      title: "Value",
      dataIndex: "value",
      width: 120,
    },
  ];

  if (tags.length === 0) {
    return <div>No DICOM tags available.</div>;
  }

  return (
    <Table
      rowKey="key"
      dataSource={tags}
      columns={columns}
      pagination={false}
      scroll={{ y: "80vh" }}
    />
  );
}
