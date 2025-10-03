import { parseDicom } from "@dcmtools/dicom-parser";

class DcmFile {
  constructor(arrayBuffer) {
    this.arrayBuffer = arrayBuffer;
    this.dataset = null;
  }

  readTags() {
    if (!this.dataset) {
      this.dataset = parseDicom(new Uint8Array(this.arrayBuffer));
    }
    // Logic to read DICOM tags
    console.log(`Reading tags from DICOM file: ${this.dataset}`);
  }

  read() {
    // Logic to read DICOM file
    console.log(`Reading DICOM file: ${this.dataset}`);
  }
}

export default DcmFile;
