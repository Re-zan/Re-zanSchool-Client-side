import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routers/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProviders from "./providers/AuthProviders";
import "react-toastify/dist/ReactToastify.css";

//tanStackQuery
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        {" "}
        <AuthProviders>
          {" "}
          <RouterProvider router={router}></RouterProvider>
        </AuthProviders>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
