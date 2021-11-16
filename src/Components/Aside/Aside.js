import imgs from "../../assets/imgs/imgs";
import Card from "../Card/Card";
import Logo from "../Logo/Logo";
import styles from "../../css/Aside.module.css";
import { useContext } from "react/cjs/react.development";
import { storage } from "../../GlobalContext/GlobalContext";
function Aside() {
  const { setImgSize } = useContext(storage);
  const handleChange = ({ target }) => {
    setImgSize(target.value);
  };
  return (
    <aside>
      <div className={styles.shirts}>
      {imgs.map((each)=>(
        <Card key={each} img={each} />   
        )
       )}
       </div>
      <Logo />

      <div onChange={handleChange} className={styles.logoSize}>
        <input type="range" min="10" max="100" />
      </div>
    </aside>
  );
}

export default Aside;
