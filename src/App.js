import "./App.css";
import Navbar from "./navbar";
import moto from "./img/image 3.png";
import gold from "./img/Gold.png";
import asian_typo from "./img/VECTOR.svg";
import wheel from "./img/wheel.png";
import brake from "./img/brake.png";

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
      {/* <div className="bottom_container">
        <img src={brake} alt="brake" className="brake" />
      </div> */}
    </div>
  );
}

export default App;
