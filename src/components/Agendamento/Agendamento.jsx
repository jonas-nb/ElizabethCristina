import React from 'react';
import { FaCommentAlt, FaMapMarkerAlt } from 'react-icons/fa';
const Agendamento = () => {
  return (
    <div className="bg-gray-200 px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Agendamentos</h1>
      <section className="mb-8">
        <h2 className="flex items-center justify-around text-2xl font-semibold mb-4">
          Online <FaCommentAlt />
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          O atendimento online de psicologia é uma opção prática e acessível
          para pacientes que desejam cuidar de sua saúde mental sem sair de
          casa. Ele oferece flexibilidade de horários e a possibilidade de
          escolher um terapeuta que atenda às suas necessidades específicas. É
          importante ter uma conexão de internet estável e um local privado para
          garantir a qualidade do atendimento.
        </p>
        <div className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300">
          Clique aqui para agendar sua sessão online
        </div>
      </section>
      <section>
        <h2 className="flex items-center justify-around text-2xl font-semibold mb-4">
          Presencial <FaMapMarkerAlt />
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          O atendimento presencial é realizado de forma presencial, em um
          ambiente físico, onde o psicólogo e o paciente se encontram
          pessoalmente para realizar as sessões de terapia. Nesse tipo de
          atendimento, é possível observar melhor as expressões e gestos do
          paciente, além de criar uma conexão mais forte e pessoal entre ambos.
          O ambiente físico da sessão também pode ajudar a criar um clima mais
          relaxante e acolhedor para o paciente, contribuindo para o sucesso do
          tratamento.
        </p>
        <div className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300">
          Clique aqui para agendar sua sessão presencial
        </div>
        <p className="text-gray-600 text-sm mt-4">Estamos localizados em:</p>
        <p className="text-gray-600 text-sm">Rua das Flores, 123 - Centro</p>
      </section>
    </div>
  );
};

export default Agendamento;
