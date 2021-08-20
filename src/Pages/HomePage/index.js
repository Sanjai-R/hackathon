import React from 'react'
import {Grid} from "@material-ui/core"
import styles from "./style.module.css"
import Button from "../../components/Button/"
export default function HomePage() {
    return (
      <Grid container>
        <div className={styles.root}>
          <img src="/homeill.png" alt="illustration" className={styles.img} />
          <div className={styles.left_content}>
            <p className={styles.left_content_title}>
              Good books don't give up all their secrets at once
            </p>
            <p className={styles.left_content_subtitle}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock
            </p>
            <div className={styles.exp_btn}>
              <Button text="Explore stuffs" fsize="22px" width="50%" height="50px"/>
            </div>
          </div>
        </div>
      </Grid>
    );
}
