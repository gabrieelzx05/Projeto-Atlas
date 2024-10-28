// Lista de destinos para o autocompletar
const destinations = [
  "Paris", "Nova York", "Londres", "Rio de Janeiro", "Tóquio",
  "Dubai", "São Paulo", "Buenos Aires", "Lisboa", "Madri",
  "Roma", "Sydney", "Berlim", "Amsterdã", "Bangkok"
];

// Função para mostrar sugestões
function showSuggestions(query) {
  const suggestionsList = document.getElementById("suggestions-list");

  // Limpa as sugestões anteriores
  suggestionsList.innerHTML = "";

  // Se o campo estiver vazio, não mostra sugestões
  if (query === "") return;

  // Filtra os destinos com base no texto digitado
  const filteredDestinations = destinations.filter(destination =>
    destination.toLowerCase().startsWith(query.toLowerCase())
  );

  // Cria uma lista de itens de sugestão
  filteredDestinations.forEach(destination => {
    const listItem = document.createElement("li");
    listItem.textContent = destination;

    // Adiciona o evento de clique na sugestão
    listItem.addEventListener("click", () => {
      document.getElementById("search-bar").value = destination;
      suggestionsList.innerHTML = ""; // Esconde as sugestões
    });

    suggestionsList.appendChild(listItem);
  });
}
