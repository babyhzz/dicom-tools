import React from "react";
import DicomPicker from "@/components/DicomPicker";

function DicomTag() {
  return (
    <div className="container mx-auto p-4">
      <div>
        <DicomPicker />
      </div>
    </div>
  );
}

export default DicomTag;
