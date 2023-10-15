import React, { ReactNode } from "react";
import styles from "./FormWrapper.module.scss";

export interface IChildrenProps {
  children: ReactNode;
}

export default function FormWrapper({ children }: IChildrenProps) {
  return <div className={styles.formwrapper}>{children}</div>;
}
