/**
 * @file recommendation.service.js
 * @description Serviço de lógica de negócios responsável por calcular a pontuação dos produtos
 * e retornar as recomendações com base nas preferências e requisitos do usuário.
 * * * O algoritmo segue os seguintes passos:
 * 1. Pontuação (Scoring): Atribui 1 ponto para cada Preferência e 1 ponto para cada Feature
 * do produto que corresponda às seleções do usuário.
 * 2. Filtragem: Remove produtos com score 0.
 * 3. Seleção: Identifica o score máximo entre os produtos restantes.
 * 4. Desempate: Filtra apenas os produtos que atingiram o score máximo (preservando a ordem
 * original, o que garante que o "último produto válido" em caso de empate seja mantido).
 * 5. Modo de Retorno: Aplica o modo 'SingleProduct' (retorna apenas o último produto com
 * score máximo) ou 'MultipleProducts' (retorna a lista completa de produtos com score máximo).
 */

/**
 * Função auxiliar para calcular o score de correspondência de um produto.
 * * @param {object} product - O objeto produto.
 * @param {string[]} selectedItems - Array de itens (Preferências ou Features) selecionados pelo usuário.
 * @param {string} key - A chave do array no objeto produto ('preferences' ou 'features').
 * @returns {number} O score de correspondência.
 */
const calculateMatchScore = (product, selectedItems, key) => {
  const productItems = product[key];

  // Garante que a propriedade do produto existe e é um array antes de usar .includes().
  if (!Array.isArray(productItems)) {
    return 0;
  }

  return selectedItems.filter((item) => productItems.includes(item)).length;
};

const getRecommendations = (
  formData = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: 'MultipleProducts',
  },
  products
) => {
  const {
    selectedPreferences = [],
    selectedFeatures = [],
    selectedRecommendationType,
  } = formData;

  // 1. Cálculo da pontuação (score) para todos os produtos
  const scoredProducts = products.map((product) => {
    const prefScore = calculateMatchScore(
      product,
      selectedPreferences,
      'preferences'
    );
    const featScore = calculateMatchScore(
      product,
      selectedFeatures,
      'features'
    );
    const score = prefScore + featScore;
    return { ...product, score };
  });

  // 2. Filtrar produtos que possuem pelo menos 1 ponto
  const relevantProducts = scoredProducts.filter(
    (product) => product.score > 0
  );

  if (relevantProducts.length === 0) {
    return [];
  }

  // 3. Identificar a pontuação máxima
  const maxScore = relevantProducts.reduce(
    (max, product) => Math.max(max, product.score),
    0
  );

  // 4. Filtrar produtos com a pontuação máxima (mantém a ordem para o desempate)
  let topScoredProducts = relevantProducts.filter(
    (product) => product.score === maxScore
  );

  // 5. Aplicação do modo de recomendação (SingleProduct/MultipleProducts) e Desempate
  if (selectedRecommendationType === 'SingleProduct') {
    // Em caso de empate, o Critério de Aceite pede o último produto válido na lista.
    const singleRecommendation =
      topScoredProducts[topScoredProducts.length - 1];

    return singleRecommendation ? [singleRecommendation] : [];
  }

  // Retorna todos os produtos com score máximo.
  return topScoredProducts;
};

const recommendationService = {
  getRecommendations,
};

export default recommendationService;
