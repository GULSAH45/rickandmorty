(async function displayRickMorty() {
  const row = document.querySelector(".row");
  try {
    const rickAndMortyApi = await fetch(
      "https://rickandmortyapi.com/api/character"
    );
    const data = await rickAndMortyApi.json();
    const rickAndMortyCharacters = data.results;

    rickAndMortyCharacterCards = rickAndMortyCharacters.map(
      (rickAndMortyCharacters) => {
        return `
        <div class="col-lg-3 mt-2">
          <div class="card">
            <img src="${rickAndMortyCharacters.image}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${rickAndMortyCharacters.name}</h5>
              <p class="card-text">${rickAndMortyCharacters.species}</p>
              <a href="character-details.html?id=${rickAndMortyCharacters.id}" class="btn btn-secondary d-grid" href="#" role="button">Character Details</a>

            </div>
          </div>
        </div>
      `;
      }
    );

    row.innerHTML = rickAndMortyCharacterCards.join("");
  } catch (error) {
    console.log(error);
  }
})();
