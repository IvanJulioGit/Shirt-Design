import React, { useContext } from "react";
import { storage } from "../../GlobalContext/GlobalContext";
import styles from "./Fonts.module.scss";
const fonts = [
  "Times New Roman",
  "'Praise', cursive",
  "'Roboto', sans-serif",
  "'Montserrat', sans-serif",
  "'Estonia', cursive",
  "'Yuji Mai', serif",
  "'Comforter Brush', cursive",
  "'Pacifico', cursive",
  "'Indie Flower', cursive",
  " 'Abril Fatface', cursive"
];
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
            {fonts.map((font) => (
              <li
              key={font}
                onClick={handleFont}
                style={{ fontFamily: font }}
              >
                {font}
              </li>
            ))}

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Fonts;
