import { useContext } from "react";
import styles from "../../css/ImgView.module.css";
import { storage } from "../../GlobalContext/GlobalContext";
import TextView from "./TextView";
function ImgView() {
  const { text } = useContext(storage);
  return (
    <div className={styles["view-img-content"]}>
      <div
        className={styles.view}
        style={{ backgroundImage: text.shirt, color: text.color }}
      >
        <TextView />
      </div>
    </div>
  );
}

export default ImgView;
