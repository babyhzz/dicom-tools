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

      // const WwwcTool = cornerstoneTools.WwwcTool;
      // cornerstoneTools.addTool(WwwcTool);
      // cornerstoneTools.setToolActive("Wwwc", { mouseButtonMask: 1 });

      // const PanTool = cornerstoneTools.PanTool;
      // cornerstoneTools.addTool(PanTool);
      // cornerstoneTools.setToolActive("Pan", { mouseButtonMask: 1 });

      // const RotateTool = cornerstoneTools.RotateTool;
      // cornerstoneTools.addTool(RotateTool);
      // cornerstoneTools.setToolActive("Rotate", { mouseButtonMask: 1 });

      // const CobbAngleTool = cornerstoneTools.CobbAngleTool;
      // cornerstoneTools.addTool(CobbAngleTool);
      // cornerstoneTools.setToolActive("CobbAngle", { mouseButtonMask: 1 });

      const TextMarkerTool = cornerstoneTools.TextMarkerTool;
      const configuration = {
        markers: ["F5", "F4", "F3", "F2", "F1"],
        current: "F5",
        ascending: true,
        loop: true,
      };
      cornerstoneTools.addTool(TextMarkerTool, { configuration });
      cornerstoneTools.setToolActive("TextMarker", { mouseButtonMask: 1 });
    }
  }, [imageId]);

  return (
    <div id="dicomImage" className="h-full">
      DicomViewport
    </div>
  );
}
