import React from "react";
import styles from "./BaseButton.module.css";
import { SpinnerLoading } from "../LoadingStates/SpinnerLoading/SpinnerLoading";

export type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
};

export function BaseButton({
  children,
  leftIcon,
  isLoading,
  ...props
}: BaseButtonProps) {
  return (
    <div>
      <button
        type={props.type || "button"}
        className={styles["container-button"]}
        {...props}
      >
        {isLoading ? (
          <SpinnerLoading />
        ) : (
          <>
            {leftIcon && (
              <span className={styles["icon-container"]}>{leftIcon}</span>
            )}
            <span className={styles["base-button-children"]}>{children}</span>
          </>
        )}
      </button>
    </div>
  );
}
