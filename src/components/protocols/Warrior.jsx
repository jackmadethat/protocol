const Warrior = () => {
  return (
    <>
      <h3>Full-Body Strength and Conditioning Circuit</h3>
      <p>Complete this circuit 3 times per week with at least 1 rest day between (Mon-Wed-Fri, for example). Perform the movements as a circuit, completing as many reps of each set as you can with no rest in between.</p>
      <h3>Warm Up</h3>
      <div className="dataDiv3col">
        <p className="leftSide">Jumping Jacks</p><p className="warriorP">-</p><p className="rightSide"><b>30</b>sec</p>
        <p className="leftSide">High Knees</p><p className="warriorP">-</p><p className="rightSide"><b>30</b>sec</p>
        <p className="leftSide">Easy Burpees</p><p className="warriorP">-</p><p className="rightSide"><b>30</b>sec</p>
        <p className="leftSide">Butt Kicks</p><p className="warriorP">-</p><p className="rightSide"><b>30</b>sec</p>
      </div>
      <h3>Circuit</h3>
      <div className="dataDiv3col">
        <p className="leftSide">Deep Squats</p><p className="warriorP">-</p><p className="rightSide">x<b>30</b></p>
        <p className="leftSide">Push-Ups</p><p className="warriorP">-</p><p className="rightSide">x<b>30</b></p>
        <p className="leftSide">Jump Squats</p><p className="warriorP">-</p><p className="rightSide">x<b>20</b></p>
        <p className="leftSide">Tricep Dips<span className="warriorP">*</span></p><p className="warriorP">-</p><p className="rightSide">x<b>20</b></p>
        <p className="leftSide">Broad Jumps</p><p className="warriorP">-</p><p className="rightSide">x<b>10</b></p>
        <p className="leftSide">V-Ups</p><p className="warriorP">-</p><p className="rightSide">x<b>20</b></p>
        <p className="leftSide">Box Jumps<span className="warriorP">*</span></p><p className="warriorP">-</p><p className="rightSide">x<b>10</b></p>
        <p className="leftSide">Pull-Ups<span className="warriorP">*</span></p><p className="warriorP">-</p><p className="rightSide">x<b>10</b></p>
        <p className="leftSide">Jump Lunges</p><p className="warriorP">-</p><p className="rightSide">x<b>15</b>/side</p>
        <p className="leftSide">Hard Burpees</p><p className="warriorP">-</p><p className="rightSide">x<b>20</b></p>
      </div>
      <p className="subText"><span className="warriorP">*</span>Requires equipment</p>
      <h3>Required Equipment</h3>
      <div className="list">
        <ul className="warriorList">
          <li>Pull-Up Bar</li>
          <li>Chair or Plyo Box</li>
          <li>Parallettes</li>
        </ul>
      </div>
      <h3>Substitutions</h3>
      <div className="dataDiv3col">
        <p className="leftSide">Tricep Dips</p><p className="warriorP">-&gt;</p><p className="rightSide">Inverted Press</p>
        <p className="leftSide">Box Jumps</p><p className="warriorP">-&gt;</p><p className="rightSide">Tuck Jumps</p>
        <p className="leftSide">Pull-Ups</p><p className="warriorP">-&gt;</p><p className="rightSide">Diamond Push-Ups</p>
      </div>
    </>
  )
}

export default Warrior