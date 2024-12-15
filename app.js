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
        <div class="card-wrapper">
          <div class="card">
            <img src="${rickAndMortyCharacters.image}" class="card-img-top" alt="..." />
            
            <div class="card-body">
              <h5 class="card-title">${rickAndMortyCharacters.name}</h5>
              <p class="card-text">${rickAndMortyCharacters.species}</p>
              <a href="character-details.html?id=${rickAndMortyCharacters.id}" class="btn btn-secondary d-grid mb-2" href="#" role="button">Character Details</a>
              <button class="btn btn-info d-grid" data-bs-toggle="modal" data-bs-target="#characterModal${rickAndMortyCharacters.id}">Quick View</button>
            </div>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="characterModal${rickAndMortyCharacters.id}" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">${rickAndMortyCharacters.name}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="text-center mb-3">
                  <img src="${rickAndMortyCharacters.image}" class="img-fluid rounded" alt="${rickAndMortyCharacters.name}" />
                </div>
                <p><strong>Status:</strong> ${rickAndMortyCharacters.status}</p>
                <p><strong>Species:</strong> ${rickAndMortyCharacters.species}</p>
                <p><strong>Gender:</strong> ${rickAndMortyCharacters.gender}</p>
                <p><strong>Origin:</strong> ${rickAndMortyCharacters.origin.name}</p>
                <p><strong>Location:</strong> ${rickAndMortyCharacters.location.name}</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
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
