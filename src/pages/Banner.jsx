import React from 'react';
import avatar from './../assets/image/avatar.png';

function Banner() {
    return (
        <div className="banner">
            <div className="copy">
                <h1>OI, EU SOU A BLAKE. SOU WEB DEV.</h1>
                <h4>Especialista em Web Design com mais de 16 anos de experiência.</h4>
            </div>
            <div className="avatar">
                <img src={avatar} alt="Essa sou eu!" title="Essa sou eu!" />
            </div>
        </div>
    );
}

export default Banner;