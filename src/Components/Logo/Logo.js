import { useContext } from "react";
import styles from "../../css/Logo.module.css";
import { storage } from "../../GlobalContext/GlobalContext";
import { FcPrevious, FcNext } from "react-icons/fc";
import logos from "../../assets/logos/logos";

function Logo() {
  const { bgImg, setBgImg } = useContext(storage);

  const handleLogoClick = (isPrevius) => {
    if (isPrevius) {
      if (bgImg >= 0) {
        return setBgImg((prev) => --prev);
      }
      return null;
    }
    if (bgImg < logos.length - 1) {
      return setBgImg((prev) => ++prev);
    }
    setBgImg(0);
  };

  return (
    <div className={styles["logo-content"]}>
      <FcPrevious
        className={styles.arrows}
        onClick={() => handleLogoClick(true)}
      />
      <div style={{ backgroundImage: `url(${logos[bgImg]})` }}></div>
      <FcNext
        className={styles.arrows}
        onClick={() => handleLogoClick(false)}
      />
    </div>
  );
}

export default Logo;
