import DicomPicker from "@/components/DicomPicker";
import DicomTagTable from "@/components/DicomTagTable";
import DicomViewport from "@/components/DicomViewport";
import Icons from "@/components/Icons";
import dicomDict from "@/utils/DcmFile/dicom-dict";
import { parseDicom, dataSetToTree } from "@dcmtools/dicom-parser";
import { Layout, Space, Table, Button } from "antd";
import { cloneDeep } from "lodash-es";
import { useMemo, useState } from "react";

const { Header, Content } = Layout;

function DicomViewer() {
  const [imageId, setImageId] = useState(null);

  const handleDicomChange = (file) => {
    try {
      const imageId = cornerstoneWADOImageLoader.wadouri.fileManager.add(file);
      setImageId(imageId);
    } catch (error) {
      console.error("Error parsing DICOM file:", error);
    }
  };

  const renderContent = () => {
    if (!imageId) {
      return <DicomPicker onChange={handleDicomChange} />;
    }

    return (
      <div className="flex flex-row gap-4 h-full">
        <div className="flex-1">
          <DicomViewport />
        </div>
        <div className="w-lg">{/* <DicomTagTable dataSet={imageId} /> */}</div>
      </div>
    );
  };

  return (
    <Layout className="h-full">
      <Header className="px-1">
        <Space>
          <Button type="text" icon={<Icons.DicomTagBrowser />} />
        </Space>
      </Header>
      <Content className="flex-1 overflow-auto">{renderContent()}</Content>
    </Layout>
  );
}

export default DicomViewer;
