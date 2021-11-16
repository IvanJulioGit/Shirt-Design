import { useContext, useEffect, useState } from "react";
import styles from "../../css/ImgView.module.css";
import { storage } from "../../GlobalContext/GlobalContext";
import TextView from "./TextView";
import html2canvas from "html2canvas";

function ImgView() {
  const [download, setDownload] = useState();
  const { text, bgImg } = useContext(storage);

  useEffect(() => {
    if (text.shirt) {
      html2canvas(document.getElementById("view"))
        .then((canvas)=> {
          let data = canvas.toDataURL();
          return data;
        })
        .then((data) => setDownload(data));       
    }
  }, [text.shirt, bgImg]);
  
  return (
    <div className={styles["view-img-content"]}>
      <div
        id="view"
        className={styles.view}
        style={{ backgroundImage: text.shirt, color: text.color }}
      >
        <TextView id="print" />
      </div>
      <a
        href={download ? download : null}
        className={styles["btn-download"]}
        isdisable={download ? 'enable' : "disable"}
        download
      >
        Donwload
      </a>
    </div>
  );
}

export default ImgView;
