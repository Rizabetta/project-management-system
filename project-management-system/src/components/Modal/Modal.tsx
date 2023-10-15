import React, { ReactNode } from "react";
import styles from "./Modal.module.scss";

type TModal = {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
};

function Modal({ setActive, children }: TModal) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <div className={styles.modalTopcontainer}>
          <svg
          width={30}
          height={30}
            onClick={() => {
              setActive(false);
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <defs>
              <style>
                {
                  ".cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}"
                }
              </style>
            </defs>
            <title />
            <g id="cross">
              <path d="m7 7 18 18M7 25 25 7" className="cls-1" />
            </g>
          </svg>
        </div>
        {children}
      </div>
    </div>
  );
}

export { Modal };
