import React from 'react';

import styles from "./Loading.module.css";

//Gif
import LoadingGif from "../Gif/loading-gif.gif";

const Loading = () => {
    return (
        <div className={styles.container}>
            <img src={LoadingGif} alt='Loading'/>
            <h1>Loading...</h1> 
        </div>
    );
};

export default Loading;