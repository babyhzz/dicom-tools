import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import DicomViewer from "./pages/dicom-viewer";
import "./index.css";

const router = createBrowserRouter([
  {
    index: true,
    element: <Navigate to="/viewer" replace />,
  },
  {
    path: "/viewer",
    Component: DicomViewer,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
