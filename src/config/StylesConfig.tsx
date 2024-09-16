"use client";

import { useEffect } from "react";
import "../app/styles/globals.css";
import "../app/styles/base.css";
import "bootstrap/dist/css/bootstrap.min.css";

export function StylesConfig() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  return null;
}
