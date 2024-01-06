"use client";

import { Toaster as ToasterProvider } from "react-hot-toast";

export const Toaster = () => {
  return (
    <ToasterProvider
      position="top-center"
      toastOptions={{
        success: {
          style: {
            background: "#3b82f6",
            color: "#fff",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#3b82f6",
          },
        },
        error: {
          style: {
            background: "#ef4444",
            color: "#fff",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#ef4444",
          },
        },
      }}
    />
  );
};
