import { parseDicom } from "@dcmtools/dicom-parser";
import { parseDataSetToJsonArray } from "./parse-dataset";

class DcmFile {
  constructor(arrayBuffer) {
    this.arrayBuffer = arrayBuffer;
    this.dataSet = null;
    this.tags = null;
  }

  getDataSet() {
    if (!this.dataSet) {
      this.dataSet = parseDicom(new Uint8Array(this.arrayBuffer));
    }
    return this.dataSet;
  }

  readTags() {
    if (!this.dataSet) {
      this.dataSet = parseDicom(new Uint8Array(this.arrayBuffer));
    }

    if (!this.tags) {
      this.tags = parseDataSetToJsonArray(this.dataSet);
    }

    // Logic to read DICOM tags
    console.log(`Reading tags from DICOM file: ${this.tags}`);

    return this.tags;
  }

  read() {
    // Logic to read DICOM file
    console.log(`Reading DICOM file: ${this.dataSet}`);
  }
}

export default DcmFile;
