import { useContext, useState} from "react";
import styles from "./ImgView.module.scss";
import { storage } from "../../GlobalContext/GlobalContext";
import TextView from "./TextView";
import html2canvas from "html2canvas";
import Download from "../Download/Download";

function ImgView() {
  const [download, setDownload] = useState();
  
  const [isLinkReady, setIsLinkReady] = useState();
  const { text } = useContext(storage);

  const handleDownload = () => {
    if (text.shirt) {
      html2canvas(document.getElementById("view"))
        .then((canvas)=> {
          let data = canvas.toDataURL();
          return data;
        })
        .then((data) => {
          setIsLinkReady(prev=>!prev);
          return setDownload(data);
        });
    }
  }
  
  return (
    <div className={styles["view-img-content"]}>
      <div
        id="view"
        className={styles.view}
        style={{ backgroundImage: text.shirt, color: text.color }}
        download
      >
        <TextView id="print" />
      </div>
      <button
        className={styles["btn-download"]}
        isdisable={text.shirt ? 'enable' : "disable"}
        onClick={handleDownload}
      >
        Donwload
      </button>
      {isLinkReady && <Download download={download} setIsLinkReady={setIsLinkReady}/>}
    </div>
  );
}

export default ImgView;
