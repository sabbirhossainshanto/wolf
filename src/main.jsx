import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.jsx";
import StateProvider from "./context/StateProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <StateProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster
        toastOptions={{
          success: {
            style: {
              backgroundColor: "#39da8a",
              color: "#fff",
              padding: "10px 30px",
            },
          },
          error: {
            style: {
              backgroundColor: "#ff5b5c",
              color: "#fff",
              padding: "10px 30px",
            },
          },
        }}
      />
    </QueryClientProvider>
  </StateProvider>
  // {/* </React.StrictMode> */}
);
