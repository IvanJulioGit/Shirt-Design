import React from "react";
import Aside from "../../Components/Aside/Aside.js";
import ImgView from "../../Components/ImgView/ImgView";
import Text from "../../Components/Text/Text";
import styles from "../../css/Home.module.css";
function Home() {
  return (
    <div className={styles.container}>
      <Aside />

      <ImgView />
      <Text />
    </div>
  );
}

export default Home;
