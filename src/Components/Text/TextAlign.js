import { useContext } from "react";
import { storage } from "../../GlobalContext/GlobalContext";
import {AiOutlineAlignLeft,AiOutlineAlignCenter,AiOutlineAlignRight} from "react-icons/ai";
import { BsFilterLeft, BsFilter, BsFilterRight } from "react-icons/bs";
import styles from './Text.module.scss';

function TextAlign() {
  const { setText } = useContext(storage);
  const handleTextAlign = ({ target }) => {
    setText((prev) => ({ ...prev, alignItems: target.id }));
  };

  const handleTextJustify = ({ target }) => {
    setText((prev) => ({ ...prev, justifyContent: target.id }));
  };
  return (
    <>
      <div className={styles.alignText}>
        <AiOutlineAlignLeft id="flex-start" onClick={handleTextAlign} />
        <AiOutlineAlignCenter id="center" onClick={handleTextAlign} />
        <AiOutlineAlignRight id="flex-end" onClick={handleTextAlign} />
      </div>

      <div className={styles.alignJustify}>
        <BsFilterLeft id="flex-start" onClick={handleTextJustify} />
        <BsFilter id="center" onClick={handleTextJustify} />
        <BsFilterRight id="flex-end" onClick={handleTextJustify} />
      </div>
    </>
  );
}

export default TextAlign;
