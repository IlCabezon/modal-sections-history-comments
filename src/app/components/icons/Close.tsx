import React from "react";

export function CloseIcon({ width = 16, height = 16 }) {
  return (
    <svg
      data-testid="close-icon"
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Close"
    >
      <path
        d="M9.74954 8.00244L15.6237 2.12649C16.1124 1.63764 16.1124 0.855484 15.6237 0.366636C15.135 -0.122212 14.3531 -0.122212 13.8644 0.366636L7.99023 6.24259L2.12584 0.366636C1.63714 -0.122212 0.855223 -0.122212 0.366524 0.366636C-0.122175 0.855484 -0.122175 1.63764 0.366524 2.12649L6.24068 8.00244L0.366524 13.8784C-0.122175 14.3672 -0.122175 15.1494 0.366524 15.6383C0.610874 15.8827 0.923641 16 1.24618 16C1.56872 16 1.88149 15.8827 2.12584 15.6383L8 9.7623L13.8742 15.6383C14.1185 15.8827 14.4313 16 14.7538 16C15.0764 16 15.3891 15.8827 15.6335 15.6383C16.1222 15.1494 16.1222 14.3672 15.6335 13.8784L9.74954 8.00244Z"
        fill="#212121"
      />
    </svg>
  );
}
