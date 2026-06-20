import React from "react";
import styles from "./ContactButton.module.css";

type Props = {
  href?: string;
  children?: React.ReactNode;
};

export default function ContactButton({ href = "#contacto", children = "Contact Me" }: Props) {
  return (
    <a href={href} className={styles.button}>
      {children}
    </a>
  );
}