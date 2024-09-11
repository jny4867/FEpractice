import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to="/product">{/* 링크를 설정할 경로를 지정 */}
            <div className="home-container"
      style={{ backgroundImage:"https://cafe24.poxo.com/ec01/namingcos/WtEwhU5fSJcIzpMenhoccf+Bfq6zndlJ+5yax36edFDF89Bmsg1tOrVrd3FnyxUIkUJ3miy1sOJTaWT4YFeQMQ==/_/naming/img/240528/pc/SMS(AD)1.jpg" }}
    >
      <h1 className="home-title">Welcome to Our Store!</h1>
      <p className="home-description">Explore our latest products and offers.</p>
    </div>
    </Link>
        </div>
    );
};

export default Home;