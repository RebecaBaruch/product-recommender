import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  /**
   * Dadas atualizações no formulário, necessário atualizar a lista de recomendações
   */
  const handleClearRecommendations = () => {
    setRecommendations([]);
  };

  return (
    <main className="bg-gray-100 min-h-[100vh] flex flex-col justify-center md:items-center">
      <div className="bg-white w-full max-w-6xl h-full p-4 md:p-10 rounded-xl shadow-2xl">
        <header
          className="mb-5 md:mb-8 pb-5 md:pb-10 border-b text-center"
          aria-label="Introdução o Recomendador de Produtos"
        >
          <div className="mb-2 md:mb-5 md:mb-10">
            <img
              src="./rdstation-logo.png"
              alt="Logo RD Station"
              className="w-36 md:mx-auto mb-8 md:mb-5"
            />
            <h1 className="text-base text-left md:text-center md:text-3xl font-bold">
              Recomendador de Produtos RD Station
            </h1>
          </div>
          <p className="text-xs md:text-lg text-left">
            Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode
            encontrar uma variedade de produtos da RD Station, cada um projetado
            para atender às necessidades específicas do seu negócio. De CRM a
            Marketing, de Conversas a Inteligência Artificial, temos uma solução
            para ajudar você a alcançar seus objetivos. Use o formulário abaixo
            para selecionar suas preferências e funcionalidades desejadas e
            receba recomendações personalizadas de produtos que melhor atendam
            às suas necessidades.
          </p>
        </header>
        <div className="flex flex-col md:flex-row md:space-between md:gap-20">
          <section className="md:w-2/5">
            <Form
              setRecommendations={setRecommendations}
              onClear={handleClearRecommendations}
            />
          </section>

          <aside
            className="mt-10 md:mt-0 md:w-3/5"
            aria-label="Lista de Produtos Recomendados"
            role="region"
          >
            {/* Uso de aside para Acessibilidade e organização */}
            <RecommendationList recommendations={recommendations} /> 
          </aside>
        </div>
      </div>
    </main>
  );
}

export default App;
