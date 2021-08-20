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
              Kindness planned is no kindness, only kindness done is
              kindness."""We appreciate it and are thankful. Words are fleeting,
              and we want you to know that a simple “thank you” doesn’t do
              justice to how deeply we appreciate your support.
            </p>
            <div className={styles.exp_btn}>
              <Button
                text="Explore stuffs"
                fsize="22px"
                width="50%"
                height="50px"
              />
            </div>
          </div>
        </div>
      </Grid>
    );
}
