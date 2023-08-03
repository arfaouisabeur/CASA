import React, { useState } from 'react';
import "./Forhome.css";
import a from "../assets/a.png";
import b from "../assets/b.png";
import c from "../assets/c.png";

function Forhome() {
  const [hoveredPhoto, setHoveredPhoto] = useState(null);

  const handleMouseEnter = (photo) => {
    setHoveredPhoto(photo);
  };

  const handleMouseLeave = () => {
    setHoveredPhoto(null);
  };

  const containerStyles = {
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
  };

  const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',

    color: '#fff',
    display: hoveredPhoto ? 'block' : 'none',
  };

  const textStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  };

  return (
    <div className="p">
      <h1>NOS OBJECTIFS</h1>
      <h3>
        Nos objectifs sont basés sur les objectifs de développement durable
      </h3>
      <div className="pp">
        <div className="ppp">
          <div className="pppp">
            <span className="w">
              <div
                style={containerStyles}
                onMouseEnter={() => handleMouseEnter('A')}
                onMouseLeave={handleMouseLeave}
              >
                <img src={a} className="r" alt="Image A" />
                {hoveredPhoto === 'A' && (
                  <div style={overlayStyles}>
                    <div style={textStyles} className='tt1'>
                      Elimine la pauvreté sous toutes ses formes et partout dans le monde et notre objectif sera garantir les besoins des sans domicile .
                    </div>
                  </div>
                )}
              </div>
            </span>
            <h2 className="s">Pas De Pauvreté</h2>
          </div>
          <div className="pppp">
            <span className="w">
              <div
                style={containerStyles}
                onMouseEnter={() => handleMouseEnter('B')}
                onMouseLeave={handleMouseLeave}
              >
                <img src={b} className="rr" alt="Image B" />
                {hoveredPhoto === 'B' && (
                  <div style={overlayStyles}>
                    <div style={textStyles} className='tt2'>
                      Eliminer la faim , assurer la securite alimentaire  améliorer la nutrition et promouvoir l'agriculture durable .
                    </div>
                  </div>
                )}
              </div>
            </span>
            <h2 className="ss">Bonne Santé Et Bien-Être</h2>
          </div>
          <div className="pppp">
            <span className="w">
              <div
                style={containerStyles}
                onMouseEnter={() => handleMouseEnter('C')}
                onMouseLeave={handleMouseLeave}
              >
                <img src={c} className="rrr" alt="Image C" />
                {hoveredPhoto === 'C' && (
                  <div style={overlayStyles}>
                    <div style={textStyles} className='tt3'>
                      Permettre à tous de vivre en bonne santé et promouvoir le bien-etre de tous a tout age .
                    </div>
                  </div>
                )}
              </div>
            </span>
            <h2 className="sss">Faim Zéro</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forhome;
