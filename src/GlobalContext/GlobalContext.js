import {createContext, useState } from 'react'

export const storage = createContext();
function GlobalContext({children}) {
    const [text, setText] = useState({
        text : '',
        shirt : '',
        fontSize : 16,
        color : '#000',
        alignItems : '',
        justifyContent : '',
        fontFamily : '',
        textPosition : ''
    });
    
    const [bgImg, setBgImg] = useState(-1);
    const [imgSize, setImgSize] = useState(80);

    return (
        <storage.Provider value={{text,setText,bgImg,setBgImg, imgSize, setImgSize }}>
            {children}
        </storage.Provider>
    )
}

export default GlobalContext
