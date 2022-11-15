import "./App.css";
import Navbar from "./navbar";
import moto from "./img/image 3.png";
import gold from "./img/Gold.png";
import asian_typo from "./img/VECTOR.svg";
import wheel from "./img/wheel.png";
import brake from "./img/brake.png";
import info from "./img/info.png";

const moto_animation = [
  "m",
  "o",
  "t",
  "o",
  "r",
  "c",
  "y",
  "c",
  "l",
  "e",
  " ",
  "m",
  "o",
  "n",
  "t",
  "b",
  "l",
  "a",
  "n",
  "c",
];

const printChar = (char, i) => {
  return (
    <span className="char" style={{ "--char-index": i }}>
      {char}
    </span>
  );
};

const printMotoAnimation = () => {
  let moto = [];
  for (let i = 0; i < moto_animation.length; i++)
    moto.push(printChar(moto_animation[i], i));
  return moto;
};

const NumericInfo = ({ info, value, subvalue, category }) => {
  return (
    <div className="numeric_info_grid">
      <p className="category">{category}</p>
      <div>
        <p>{info}</p>
        <p>{value}</p>
        <p>{subvalue}</p>
      </div>
    </div>
  );
};

// let style= {position: 'absolute', backgroundColor: 'red', top:0}

function App() {
  return (
    <div className="App">
      <Navbar />
      <img src={gold} alt="gold" className="gold" />
      <div className="body_container">
        <div className="moto_container">
          <h1>{printMotoAnimation()}</h1>
          <img src={moto} alt="moto" className="moto" />
        </div>
        <img src={asian_typo} alt="asian_typo" className="asian_typo"></img>
        <img src={wheel} alt="wheel" className="wheel" />
      </div>
      <div className="body_container">
        <div className="moto_container">
          <img src={info} alt="info" className="info" />
        </div>
        <img src={brake} alt="brake" className="brake" />
      </div>
      <div className="numeric_container">
        <NumericInfo
          info="6-speed constant-mesh"
          value="169 mph"
          subvalue="272 km/h"
          category="top speed"
        />
        <NumericInfo
          info="121 kw"
          value="162 hp"
          subvalue="9.250 rpm"
          category="power"
        />
        <NumericInfo
          info="8.800RPM"
          value="130.5 N.M"
          subvalue="96.3 LBF.FT"
          category="torque"
        />
        <NumericInfo
          info="4.5 US GAL"
          value="17 L"
          subvalue="3.7 IMP GAL"
          category="capacity"
        />
      </div>
    </div>
    // <div>
    //   <div>
    //     <div>test1</div>
    //     <div>test2</div>
    //     <div>test3</div>
    //   </div>
    //   <div style={style}>
    //     <div style={{position: 'relative'}}>
    //       Test ultime 1
    //     </div>
    //     <div style={{position: 'relative'}}>
    //       Test ultime 2
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
