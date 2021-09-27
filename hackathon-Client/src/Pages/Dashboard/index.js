import React from "react";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import styles from "./style.module.css";
import UploadBooks from "./InnerComponents/UploadBooks";
import UploadStationary from "./InnerComponents/UploadStationary";
import Requests from "./InnerComponents/Requests";
import Settings from "./InnerComponents/Settings";
import { useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

const drawerList = [
  { text: "Upload Books", slug: "/upload-books", component: UploadBooks },
  {
    text: "Upload Stationary",
    slug: "/upload-stationary",
    component: UploadStationary,
  },
  { text: "Requests", slug: "/requests", component: Requests },
  { text: "Settings", slug: "/settings", component: Settings },
];

function Dashboard() {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    (async () => {
      await axios
        .get(`${baseUrl}/auth/get-user-by-token`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (!res.data.success) {
            history.push("/Signin");
          }
        })
        .catch((err) => {
          history.push("/Signin");
        });
    })();
    // eslint-disable-next-line
  }, []);
  return (
    <div className={styles.root}>
      <div className={styles.drawer}>
        <div>
          {drawerList.map((anchor, index) => {
            return (
              <div key={index} className={styles.listItem}>
                <Link to={`/dashboard${anchor.slug}`}>{anchor.text}</Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.innerRoot}>
        <Switch>
          {drawerList.map((anchor, index) => {
            return (
              <Route
                key={index}
                path={`/dashboard${anchor.slug}`}
                component={anchor.component}
              />
            );
          })}
        </Switch>
      </div>
    </div>
  );
}

export default Dashboard;
