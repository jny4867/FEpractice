import React from 'react';

function MovieComponent(props) {
    const {imgurl, title, open} = props;
    return (
        <div>
            <img src={imgurl} width="200px"></img>
            <h3>타이틀:{title}</h3>
            <p>개봉일:{open}</p>
            <hr></hr>
        </div>
    );
};

export default MovieComponent;