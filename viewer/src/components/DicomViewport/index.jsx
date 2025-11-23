import { useEffect } from "react";

export default function DicomViewport({ imageId }) {
  useEffect(() => {}, []);

  useEffect(() => {
    if (imageId) {
      const element = document.getElementById("dicomImage");
      cornerstone.enable(element);
      cornerstone.loadImage(imageId).then((image) => {
        cornerstone.displayImage(element, image);
      });

      const WwwcTool = cornerstoneTools.WwwcTool;

      cornerstoneTools.addTool(WwwcTool);
      cornerstoneTools.setToolActive("Wwwc", { mouseButtonMask: 1 });
    }
  }, [imageId]);

  return (
    <div id="dicomImage" className="h-full">
      DicomViewport
    </div>
  );
}
