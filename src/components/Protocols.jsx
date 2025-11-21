import { useState, useEffect } from 'react'
import Warrior from '/src/components/protocols/Warrior'
import Shaolin from '/src/components/protocols/Shaolin'
import Infantry from '/src/components/protocols/Infantry'
import Spartan from '/src/components/protocols/Spartan'
import System from '/src/components/protocols/System'
import Navigation from '/src/components/Navigation'
import Timer from '/src/components/data/Timer'

const Protocols = () => {
  const colors = {
    orange: 'rgb(255, 211, 91)',
    blue: 'rgb(42, 142, 235)',
    red: 'rgb(201, 42, 42)',
    green: 'rgb(111, 179, 22)',
    white: 'rgb(255, 255, 255)',
    purple: 'rgb(204, 34, 226)',
  };
  const filterOptions = 'opacity(0.25) saturate(100%) sepia(100%) brightness(50%)';
  const characters = [
    { name: 'warrior protocol', image: 'https://raw.githubusercontent.com/jackmadethat/protocol/refs/heads/main/src/assets/img/icon_nomad.png', filter: `${filterOptions} hue-rotate(180deg)`, borderColor: colors.blue, textColor: colors.blue },
    { name: 'shaolin protocol', image: 'https://raw.githubusercontent.com/jackmadethat/protocol/refs/heads/main/src/assets/img/icon_monk.png', filter: `${filterOptions} hue-rotate(0deg)`, borderColor: colors.orange, textColor: colors.orange },
    { name: 'spartan protocol', image: 'https://raw.githubusercontent.com/jackmadethat/protocol/refs/heads/main/src/assets/img/icon_spartan.png', filter: `${filterOptions} hue-rotate(270deg)`, borderColor: colors.red, textColor: colors.red },
    { name: 'infantry protocol', image: 'https://raw.githubusercontent.com/jackmadethat/protocol/refs/heads/main/src/assets/img/icon_survivor.png', filter: `${filterOptions} hue-rotate(55deg)`, borderColor: colors.green, textColor: colors.green },
    { name: 'system maintenance', image: 'https://raw.githubusercontent.com/jackmadethat/protocol/refs/heads/main//src/assets/img/icon_skull.png', filter: `opacity(0.25) saturate(0%) sepia(0%) brightness(50%) hue-rotate(0deg)`, borderColor: colors.white, textColor: colors.white },
    { name: 'interval timer', image: 'https://raw.githubusercontent.com/jackmadethat/protocol/refs/heads/main//src/assets/img/icon_blank.png', filter: `${filterOptions} hue-rotate(240deg)`, borderColor: colors.purple, textColor: colors.purple },
  ];
    const components = {
    0: <Warrior />,
    1: <Shaolin />,
    2: <Spartan />,
    3: <Infantry />,
    4: <System />,
    5: <Timer />
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible_protocol, setVisible_protocol] = useState(true);
  const [displayComponent, setDisplayComponent] = useState(null);

  useEffect(() => {
    const backgroundDiv = document.getElementById('bgImage');
      if (backgroundDiv) {
        backgroundDiv.style.filter = characters[currentIndex].filter;
      }
  }, [currentIndex]);

  const changeIndex = (newIndex) => {
    if (!visible_protocol) {
      setVisible_protocol(true);
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setDisplayComponent(components[newIndex]);
        setVisible_protocol(false);
      }, 1000);
    } else {
      setCurrentIndex(newIndex);
      setDisplayComponent(components[newIndex]);
    }
  };

  const getNextIndex = (offset) => {
    let newIndex = (currentIndex + offset + characters.length) % characters.length;
    while (newIndex === 4 || newIndex === 5) {
      newIndex = (newIndex + (offset > 0 ? 1 : -1) + characters.length) % characters.length;
    }
    return newIndex;
  };

  const handleLeftClick = () => {
    changeIndex(getNextIndex(-1));
  };

  const handleRightClick = () => {
    changeIndex(getNextIndex(1));
  };

  const handleSystemClick = () => {
    changeIndex(4);
  };

  const handleTimerClick = () => {
    setVisible_protocol(false);
    changeIndex(5);
  };

  const setProtocol = () => {
    setTimeout(() => {
    }, 1000);
    setDisplayComponent(components[currentIndex]);
  };

  const toggleprotocol = () => {
    setVisible_protocol(!visible_protocol);
    setProtocol();
  };

  return (
    <>
      <Navigation handleSystemClick={handleSystemClick} handleTimerClick={handleTimerClick} />
      <div className="center" style={{ marginTop: `${visible_protocol ? "250px" : "60px"}` }}>
        <div className="scroll left" onClick={handleLeftClick}></div>
        <div className="scroll right" onClick={handleRightClick}></div>
        <div className="centerIcon" style={{ borderColor: characters[currentIndex].borderColor }}>
          <img className="icon" src={characters[currentIndex].image} />
        </div>
        <div className="iconBack"></div>
        <h2 className="titleText" style={{ textDecorationColor: characters[currentIndex].textColor }}>{characters[currentIndex].name.toUpperCase()}</h2>
        <div className="dropDown" onClick={toggleprotocol} style={{ transform: `rotate(${visible_protocol ? '0deg' : '180deg'})` }}></div>
        <div className="protocol" style={{ clipPath: `polygon(${!visible_protocol ? '0 0, 100% 0, 100% 100%, 0 100%' : '0 0, 100% 0, 100% 0, 0 0'})` }}>
          {displayComponent}
        </div>
      </div>
    </>
  )
}

export default Protocols
