import { data } from 'autoprefixer';
import React from 'react';
import dice from './images/icon-dice.svg';
import desktopLines from './images/pattern-divider-desktop.svg';
import mobileLines from './images/pattern-divider-mobile.svg';

const App = () => {
  const api = 'https://api.adviceslip.com/advice';
  const advice = document.getElementById('advice');
  const number = document.getElementById('number');

  const getApi = () => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        advice.innerHTML = `${data.slip.advice}`;
        number.innerHTML = `Advice #${data.slip.id}`;
      });
  };

  return (
    <>
      <div className="h-screen w-full bg-dark-blue flex justify-center">
        <div className="bg-dark-gray text-white mt-auto mb-auto ml-5 mr-5 text-center p-10 flex flex-col justify-center w-96 relative">
          <h6 id="number" className="text-neon-green font-bold mb-5">
            Advice #No
          </h6>
          <p id="advice" className="font-extra-bold mb-5">
            Press the dice
          </p>
          <img src={desktopLines} alt="" className="hidden md:flex mb-10" />
          <img src={mobileLines} alt="" className="md:hidden mb-10" />
          <button
            onClick={getApi}
            className="h-10 w-10 rounded-full bg-neon-green flex items-center justify-center absolute -bottom-5 left-0 right-0 ml-auto mr-auto"
          >
            <img src={dice} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
