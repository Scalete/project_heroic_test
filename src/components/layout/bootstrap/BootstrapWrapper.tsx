"use client";

import { FC, PropsWithChildren, useEffect } from "react";

const BootstrapWrapper: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  return children;
};

export default BootstrapWrapper;
