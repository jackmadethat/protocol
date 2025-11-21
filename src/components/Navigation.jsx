const Navigation = ({ handleSystemClick, handleTimerClick }) => {
  return (
    <nav className="navigation">
      <h2>PRTCL</h2>
      <img src="/src/assets/img/icon_timer.png" className="timerIcon"  onClick={handleTimerClick} />
      <img src="https://raw.githubusercontent.com/jackmadethat/protocol/refs/heads/main/src/assets/img/icon_settings.png" className="settingsIcon"  onClick={handleSystemClick} />
      <div></div>
    </nav>
  );
};

export default Navigation