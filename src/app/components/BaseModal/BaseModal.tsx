import { CSSProperties } from "react";
import { createPortal } from "react-dom";
import styles from "./BaseModal.module.css";

type BaseModalProps = {
  container: Element | DocumentFragment;
  ModalHeader: React.ReactNode;
  ModalBody: React.ReactNode;
  ModalFooter?: React.ReactNode;
  modalContentExtraStyles?: CSSProperties;
  modalContentExtraClassnames?: string;
};

export const BaseModal: React.FC<BaseModalProps> = ({
  container,
  ModalHeader,
  ModalBody,
  ModalFooter,
  modalContentExtraStyles,
  modalContentExtraClassnames,
}) => {
  return createPortal(
    <div className={`${styles["modal-overlay"]}`}>
      <div>
        <div
          className={`${styles["modal-content-default"]} ${
            modalContentExtraClassnames ? modalContentExtraClassnames : ""
          }`}
          style={{
            ...(modalContentExtraStyles ? modalContentExtraStyles : {}),
          }}
        >
          <div>{ModalHeader}</div>
          <div className={styles['modal-body']}>{ModalBody}</div>
          <div>{ModalFooter}</div>
        </div>
      </div>
    </div>,
    container
  );
};
