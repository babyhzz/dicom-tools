import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import DicomViewer from "./pages/dicom-viewer";
import "./index.css";
import { ConfigProvider, theme } from "antd";

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
  <ConfigProvider
    theme={{
      algorithm: theme.darkAlgorithm,
      // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
    }}
  >
    <RouterProvider router={router} />
  </ConfigProvider>
);
