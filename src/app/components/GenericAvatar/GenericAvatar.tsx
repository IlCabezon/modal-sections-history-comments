import React from "react";
import styles from "./GenericAvatar.module.css";

export type GenericAvatarProps = {
  fullname: string;
};
export const GenericAvatar: React.FC<GenericAvatarProps> = ({ fullname }) => {
  const initials = (
    fullname
      ? fullname
          .split(" ", 2)
          .map((n) => n[0])
          .join("")
      : "NN"
  ).toUpperCase();

  return (
    <div>
      <div className={styles["generic-avatar-container"]}>
        <p className={styles["generic-avatar-name"]}>{initials}</p>
      </div>
    </div>
  );
};
