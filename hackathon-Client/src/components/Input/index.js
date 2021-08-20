import React from 'react'
import styles from './style.module.css'
export default function Input({text}) {
    return (
      <input type="text" placeholder={text} className={styles.input}/>
    );
}
