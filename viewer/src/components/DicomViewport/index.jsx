import cornerstone from "@dcmtools/stone-core";
import * as cornerstoneWADOImageLoader from "@dcmtools/stone-wado-image-loader";

export default function DicomViewport({ imageId }) {
  useEffect(() => {
    if (imageId) {
      const element = document.getElementById("dicomImage");
      cornerstone.enable(element);
      const viewport = cornerstone.getDefaultViewportForImage(element, image);
      cornerstone.loadImage(imageId).then((image) => {
        cornerstone.displayImage(element, image);
      });
    }
  }, [imageId]);

  return (
    <div id="dicomImage" className="h-full">
      DicomViewport
    </div>
  );
}
