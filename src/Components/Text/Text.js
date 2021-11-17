import { useContext } from "react";
import { storage } from "../../GlobalContext/GlobalContext";
import Colors from "../Colors/Colors";
import TextAlign from "./TextAlign";
import styles from "./Text.module.scss";
import Fonts from "../Fonts/Fonts";

function Text() {
  const { text, setText } = useContext(storage);
  const handleTextChange = ({ target }) => {
    setText((prev) => ({ ...prev, text: target.value }));
  };

  const handleFontChange = ({ target }) => {
    if (target.value < 60)
      setText((prev) => ({ ...prev, fontSize: target.value }));
  };
  
  return (
    <div className={styles["main-text"]}>
      <div className={styles.text}>
        <input
          type="text"
          placeholder="Digite seu texto :"
          onChange={handleTextChange}
        />
        <TextAlign />

        <div className={styles.fontSize}>
          Font-Size :
          <input
            value={text.fontSize}
            type="number"
            min="10"
            max="60"
            onChange={handleFontChange}
          />
        </div>
        <Colors />
        <Fonts />

      </div>
    </div>
  );
}

export default Text;
