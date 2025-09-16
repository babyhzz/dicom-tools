import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import DicomTag from "./pages/dicom-tag";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/dicom-tag",
    Component: DicomTag,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
