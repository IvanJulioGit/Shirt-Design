import {useContext} from 'react';
import { storage } from "../../GlobalContext/GlobalContext";
import styles from './Colors.module.scss';
const color = ["red", "blue", "yellow", "green", '#FFFC31', '#5C415D', '#F6F7EB', '#E94F37', '#393E41'];
function Colors() {
    const { setText } = useContext(storage);
    const handleColor = ({target})=>{
        setText(prev=>({...prev, color : target.id}))
    }

    const handleChangeColor = ({target})=>{
      setText(prev=>({...prev, color : target.value}))
  }
    return (
        <div className={styles.colors}>
        {color.map((each) => (
          <span key={each} id={each} style={{ backgroundColor: each }} onClick={handleColor}></span>
        ))}
        <input type="color" onChange={handleChangeColor}/>
      </div>
    )
}

export default Colors;
