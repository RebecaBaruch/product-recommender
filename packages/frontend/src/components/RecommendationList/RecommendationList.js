// RecommendationList.js
import React from 'react';

function RecommendationList({ recommendations }) {
  // Se a lista estiver vazia, retorna a mensagem
  if (!recommendations || recommendations.length === 0) {
    return (
      <div>
        <h2 className="text-md md:text-xl font-bold mb-4 text-gray-800">
          Lista de Recomendações:
        </h2>
        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 text-sm md:text-md text-yellow-800 rounded">
          <p className="font-medium">
            Nenhuma recomendação encontrada. Selecione mais opções para melhores
            resultados.
          </p>
        </div>
      </div>
    );
  }

  // Se houver recomendações, exiba a lista formatada
  return (
    <div>
      <h2 className="text-md md:text-xl font-bold mb-4 text-gray-800">
        Lista de Recomendações:
      </h2>

      <ul className="space-y-4">
        {recommendations.map((product) => (
          <li
            key={product.id || product.name}
            className="p-5 border-l-4 border-green-600 rounded-lg shadow-md bg-green-50 transition-shadow hover:shadow-lg"
          >
            <p className="font-extrabold text-sm md:text-xl text-green-800 mb-1">
              {product.name}
            </p>
            <p className="text-xs md:text-sm text-green-600">
              <b>Categoria:</b> {product.category}
            </p>

            {product.score !== undefined && (
              <p className="text-xs md:text-sm text-green-600 mt-1">
                <b>Pontuação de Match:</b> {product.score}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
