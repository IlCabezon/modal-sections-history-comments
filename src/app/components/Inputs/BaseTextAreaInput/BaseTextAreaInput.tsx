import { useCallback, useEffect, useRef } from "react";
import styles from "./BaseTextAreaInput.module.css";

export type BaseTextAreaProps =
  React.InputHTMLAttributes<HTMLTextAreaElement> & {
    name: string;
    label?: string;
    canResize?: boolean;
    error?: string;
  };
export const BaseTextAreaInput: React.FC<BaseTextAreaProps> = ({
  name,
  label,
  canResize,
  error,
  ...inputProps
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputSize = useCallback(() => {
    const textarea = textAreaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, []);

  useEffect(() => {
    const textarea = textAreaRef.current;
    if (!textarea) return;

    textarea.addEventListener("input", handleInputSize);

    return () => {
      textarea.removeEventListener("input", handleInputSize);
    };
  });

  return (
    <div style={{ width: "100%" }}>
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        ref={textAreaRef}
        className={`${styles["base-textarea-input"]} ${
          canResize ? styles["base-textarea-input-resizable"] : ""
        }`}
        name={name}
        {...inputProps}
      />
    </div>
  );
};
