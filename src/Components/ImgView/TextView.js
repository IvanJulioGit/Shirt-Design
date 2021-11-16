import { useContext } from "react";
import { storage } from "../../GlobalContext/GlobalContext";
import logos from "../../assets/logos/logos";
function TextView() {
  const { text, bgImg, imgSize } = useContext(storage);
  return (
    <span
      style={{
        backgroundImage: `url(${logos[bgImg]})`,
        backgroundSize: `${imgSize * 1.1}% ${imgSize}%`,
        alignItems: text.alignItems,
        justifyContent: text.justifyContent,
      }}
    >
      <p
        style={{
          fontSize: text.fontSize + "px",
          fontFamily: text.fontFamily,
        }}
      >
        {text.text}
      </p>
    </span>
  );
}

export default TextView;
