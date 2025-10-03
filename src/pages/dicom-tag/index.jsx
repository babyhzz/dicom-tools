import React, { useState } from "react";
import DicomPicker from "@/components/DicomPicker";
import DcmFile from "@/utils/DcmFile";

function DicomTag() {
  const [dcmFile, setDcmFile] = useState(null);

  const handleDicomChange = (arrayBuffer) => {
    // Parse the DICOM file using dcmtools
    try {
      const dcm = new DcmFile(arrayBuffer);
      dcm.readTags();
      console.log(dcm);
      setDcmFile(dcm);
    } catch (error) {
      console.error("Error parsing DICOM file:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div>
        <DicomPicker onChange={handleDicomChange} />
      </div>
    </div>
  );
}

export default DicomTag;
