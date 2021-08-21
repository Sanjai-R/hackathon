import React from 'react'
import {Grid} from "@material-ui/core"
import styles from "./style.module.css"
import Button from "../../components/Button/"
import Grids from "../../components/Grid"
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
              <a href="/#Explore">
                <Button text="Explore stuffs" fsize="18px" />
              </a>
            </div>
          </div>
        </div>
        <Grids type="book" />
        <Grids type="stationary" />

        <h2 style={{textAlign: 'Center',width: '100%',fontWeight:"400"}}>Developed by Riyazur and Sanjai</h2>
      </Grid>
    );
}
