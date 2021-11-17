import React, { useEffect } from 'react';
import styles from './Download.module.scss';
function Download({download,  setIsLinkReady}) {
    useEffect(()=>{
       setTimeout(()=> setIsLinkReady(prev=>!prev), 4000);
    },[download, setIsLinkReady])
    return (
        <a href={download}  className={styles.container} download>
            Clique Aqui.
        </a>
    )
}

export default Download
