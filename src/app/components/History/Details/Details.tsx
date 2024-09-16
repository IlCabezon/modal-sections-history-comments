import React from "react";

type DetailProps = {
  details: Array<string>;
};

export const Details: React.FC<DetailProps> = ({ details }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <p>
        {details.map((detail, index, arr) => {
          const hasArrow =
            arr.length > 1 &&
            ((index === 0 && arr.length > 1) || index !== arr.length - 1);

          return (
            <React.Fragment key={index}>
              <span>{detail}</span>
              {hasArrow && <span style={{ color: "gray" }}> → </span>}
            </React.Fragment>
          );
        })}
      </p>
    </div>
  );
};
