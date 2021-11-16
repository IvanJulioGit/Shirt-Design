import React, { useContext } from "react";
import { storage } from "../../GlobalContext/GlobalContext";
import styles from "../../css/Fonts.module.css";
function Fonts() {
  const { setText } = useContext(storage);
  const handleFont = ({ target }) => {
    setText((prev) => ({ ...prev, fontFamily: target.innerText }));
  };

  return (
    <div className={styles.fontType}>
      <span>Font Type</span>
    <div className={styles.dropdown}>
      <div className={styles["dropdown-content"]}>
        <ul>
          <li onClick={handleFont} style={{ fontFamily: "Times New Roman" }}>
            Times New Roman
          </li>
          <li onClick={handleFont} style={{ fontFamily: `'Praise', cursive` }}>
            'Praise', cursive
          </li>
          <li
            onClick={handleFont}
            style={{ fontFamily: `'Roboto', sans-serif` }}
          >
            'Roboto', sans-serif
          </li>
          <li
            onClick={handleFont}
            style={{ fontFamily: `'Montserrat', sans-serif` }}
          >
            'Montserrat', sans-serif
          </li>
        </ul>
      </div>
    </div>
        </div>
  );
}

export default Fonts;
