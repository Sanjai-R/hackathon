import React from "react";
import styles from "./style.module.css";
export default function Input({ text, onChange, type = "text", value }) {
  return (
    <input
      type={type}
      value={value}
      placeholder={text}
      className={styles.input}
      onChange={onChange}
    />
  );
}
