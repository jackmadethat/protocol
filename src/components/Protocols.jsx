import { useState, useEffect } from 'react'
import Warrior from '/src/components/protocols/Warrior'
import Shaolin from '/src/components/protocols/Shaolin'
import Infantry from '/src/components/protocols/Infantry'
import Spartan from '/src/components/protocols/Spartan'

const Protocols = () => {
  const white = 'rgb(255, 211, 91)';
  const blue = 'rgb(42, 142, 235)';
  const red = 'rgb(201, 42, 42)';
  const green = 'rgb(111, 179, 22)';
  const filterOptions = 'opacity(0.25) saturate(100%) sepia(100%) brightness(50%)';
  const characters = [
    { name: 'warrior', image: '/src/assets/img/icon_nomad.png', filter: `${filterOptions} hue-rotate(180deg)`, borderColor: blue, textColor: blue },
    { name: 'shaolin', image: '/src/assets/img/icon_monk.png', filter: `${filterOptions} hue-rotate(0deg)`, borderColor: white, textColor: white },
    { name: 'spartan', image: '/src/assets/img/icon_spartan.png', filter: `${filterOptions} hue-rotate(270deg)`, borderColor: red, textColor: red },
    { name: 'infantry', image: '/src/assets/img/icon_survivor.png', filter: `${filterOptions} hue-rotate(55deg)`, borderColor: green, textColor: green },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible_warrior, setVisible_warrior] = useState(true);
  const [displayComponent, setDisplayComponent] = useState(null);
  const components = {
    0: <Warrior />,
    1: <Shaolin />,
    2: <Spartan />,
    3: <Infantry />,
  };

  useEffect(() => {
    const backgroundDiv = document.getElementById('bgImage');
      if (backgroundDiv) {
        backgroundDiv.style.filter = characters[currentIndex].filter;
      }
  }, [currentIndex]);

  const changeIndex = (newIndex) => {
    if (!visible_warrior) {
      setVisible_warrior(true);
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setDisplayComponent(components[newIndex]);
        setVisible_warrior(false);
      }, 1000);
    } else {
      setCurrentIndex(newIndex);
      setDisplayComponent(components[newIndex]);
    }
  };

  const handleLeftClick = () => {
    changeIndex((currentIndex - 1 + characters.length) % characters.length);
  };

  const handleRightClick = () => {
    changeIndex((currentIndex + 1) % characters.length);
  };

  const setProtocol = () => {
    setTimeout(() => {
    }, 1000);
    setDisplayComponent(components[currentIndex]);
  };

  const toggleWarrior = () => {
    setVisible_warrior(!visible_warrior);
    setProtocol();
  };

  return (
    <>
      <nav className="navigation">
        <h2>PRTCL</h2>
        <img src="/src/assets/img/icon_settings.png" className="settingsIcon" />
        <div></div>
      </nav>
      <div className="center" style={{ marginTop: `${visible_warrior ? "25%" : "10%"}` }}>
        <div className="scroll left" onClick={handleLeftClick}></div>
        <div className="scroll right" onClick={handleRightClick}></div>
        <div className="centerIcon" style={{ borderColor: characters[currentIndex].borderColor }}>
          <img className="icon" src={characters[currentIndex].image} />
        </div>
        <div className="iconBack"></div>
        <h2 className="titleText" style={{ textDecorationColor: characters[currentIndex].textColor }}>{characters[currentIndex].name.toUpperCase()} PROTOCOL</h2>
        <div className="dropDown" onClick={toggleWarrior} style={{ transform: `rotate(${visible_warrior ? '0deg' : '180deg'})` }}></div>
        <div className="protocol" style={{ clipPath: `polygon(${!visible_warrior ? '0 0, 100% 0, 100% 100%, 0 100%' : '0 0, 100% 0, 100% 0, 0 0'})` }}>
          {displayComponent}
        </div>
      </div>
    </>
  )
}

export default Protocols
