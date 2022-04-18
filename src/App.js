import './App.css';
import React, { useState, useEffect } from 'react';
import FBHandler from "./FBHandler.js";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const fb = new FBHandler();
const reduce_cn = obj => Object.entries(obj).filter(([key, val]) => val).map(([key]) => key).join(" ");

function App() {
  const [auth, setAuth] = useState(null);
  useEffect(function() {
    fb.checkAuth(auth).then(r => setAuth(r));
  }, []);


  return (
    <div className={reduce_cn({
          App: true,
          SignIn: !auth
    })}>
      {
        auth ? <MoodApp {...{auth}} /> : <SignIn {...{setAuth}} />
      }
    </div>
  );
}

function MoodApp(props) {
  const [date, setDate] = useState(new Date());
  const [dateDataRaw, setDateData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await fb.getData();
      setDateData(data);
      setLoading(false);
    })();
  }, []);
  const [range, setRange] = useState(0);
  const [weed, setWeed] = useState(false);
  const dateData = [
    ...dateDataRaw,
    {
      dateString: date.toDateString(),
      moodRank: range,
      mj: weed
    }
  ];
  function getBackground({date, view}) {
      if (view !== 'month') return null;
      const dateStr = date.toDateString();
      const data = dateData.find(o => o.dateString == dateStr);
      if (data == undefined) return null;
      const {moodRank, mj} = data;
      return <UnderneathTile mood={moodRank / 100} mj={mj} />
  }
  return (
    <div className={reduce_cn({
        "App": true,
        "loading": loading
      })}>
      <Calendar tileContent={getBackground} className="Calendar" onChange={setDate} value={date} />
      <textarea></textarea>
      <input type="range" value={range} onChange={e => setRange(e.target.value)} /> <br />
      <div style={{display: "flex", justifyContent: "space-between", padding: "1rem"}}>
        <div className={reduce_cn({
            "mj-check": true,
            "checked": weed
          })}
          onClick={() => setWeed(!weed)}></div>
        <button style={{fontSize: "1.5rem", padding: "0.3rem 1rem"}}> save </button>
      </div>
    </div>
  );
}

function SignIn(props) {
  const [signUp, setSignUp] = useState(false);
  return (
    <div>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="password" />
      <div style={{display: "flex", justifyContent: "space-around"}}>
        <button>{signUp ? "Sign Up!" : "Sign In!"}</button>
        <div onClick={() => setSignUp(!signUp)}>{signUp ? "Old?" : "New?"}</div>
      </div>
    </div>
  );
}

function UnderneathTile(props) {
  const {mood, mj} = props;
  function calcColor() {
    const start = [255, 255, 255];
    const end = [111, 0, 255]
    const range = start.map((s, i) => [s, end[i]]); //rgb start - end
    function moodpoint([a, b]) {
      if (a == b) return a;
      const subtract = a > b;
      const diff = Math.abs(a - b);
      const distance = diff * mood;
      return subtract ? a - distance : a + distance;
    }
    const [r, g, b] = range.map(moodpoint);
    return `rgb(${r}, ${g}, ${b})`;
  }
  return (
    <div className="UnderneathTile" style={{backgroundColor: calcColor()}}>
      {mj ? <div className="mj-leaf"></div> : ""}
    </div>
  )
}

export default App;
