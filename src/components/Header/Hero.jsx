import React from 'react';
import imgBG from '../../assets/img/bgHero.jpg';
import './bg.css';
const Hero = () => {
  return (
    <div className="m-auto w-full h-screen sm:h-full rounded-md bg-opacity-100">
      <h1 className="flex flex-col text-center text-[1.6rem] font-bold drop-shadow-lg">
        Elizabeth Cristina <br />
        <span className="text-[1rem]">Psicoterapeuta</span>
      </h1>
      <p className="m-auto mt-5 w-72 text-center font-extrabold text-[1.2rem]">
        Com a abordagem centrada na pessoa (ACP💜), você é o protagonista do
        processo terapêutico.
      </p>
      <div className="btn flex w-64 m-auto mt-10 ">
        <p className="text-[#e6e6e6]">Agendar Consulta</p>
      </div>
      <div className="text-center text-[#0009] font-semibold">
        <p>Consulta presencial ou online</p>
        <p>CRP 17/4783</p>
      </div>
      <div class="m-auto mt-10 relative w-56 h-56 shadow-md shadow-black rounded-full">
        <img
          src="https://cdn.pixabay.com/photo/2023/03/28/17/34/girl-7883816_960_720.jpg"
          className="w-full h-full object-cover rounded-full"
          alt=""
        />
        <div class="absolute top-0 left-0 w-full h-full border-r-8 border-[#333333] rounded-full"></div>
      </div>
    </div>
  );
};

export default Hero;
