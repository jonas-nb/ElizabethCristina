import React from 'react';
import IndexHeader from './components/Header/IndexHeader';
import SobreMim from './components/SobreMim/SobreMim';
import Agendamento from './components/Agendamento/Agendamento';

const App = () => {
  return (
    <div>
      <IndexHeader />
      <SobreMim />
      <Agendamento />
    </div>
  );
};

export default App;
