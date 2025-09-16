import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { parseDicom } from "dicom-parser";

const { Dragger } = Upload;

export default function DicomPicker() {
  return (
    <Dragger
      name="file"
      accept=".dcm"
      multiple={false}
      showUploadList={false}
      beforeUpload={() => false}
      onChange={async (info) => {
        const arrayBuffer = await info.file.arrayBuffer();
        const dcm = parseDicom(new Uint8Array(arrayBuffer));
        console.log(dcm);
      }}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibited from uploading
        company data or other banned files.
      </p>
    </Dragger>
  );
}
