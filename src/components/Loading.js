import React from 'react';

//Gif
import LoadingGif from "../Gif/loading-gif.gif";

const Loading = () => {
    return (
        <div>
            <img src={LoadingGif} alt='Loading'/>
            <h1>Loading...</h1> 
        </div>
    );
};

export default Loading;