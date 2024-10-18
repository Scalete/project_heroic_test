"use client";

import { FC, PropsWithChildren, useEffect } from "react";

const BootstrapWrapper: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    typeof document !== "undefined"
      ? require("bootstrap/dist/js/bootstrap.bundle.min.js")
      : null;
  }, []);

  return children;
};

export default BootstrapWrapper;
