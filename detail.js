const fetchCharacterDetails = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const characterId = urlParams.get("id");
  console.log(characterId);

  const characterDetails = document.getElementById("character-details");

  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${characterId}`
    );
    const data = await response.json();

    // Tek bir karakter bilgisi alındığından map yerine doğrudan işleme geçiyoruz.
    const characterCard = `
        <div class="cardDetails">
          <img src="${data.image}" class="card-img-top detail-img" alt="${data.name}" />
          <div class="card-body-details">
            <h5 class="card-title"><strong>${data.name}</strong></h5>
            <p class="card-text"><strong>Species:</strong> ${data.species}</p>
            <p class="card-text"><strong>Status:</strong> ${data.status}</p>
            <p class="card-text"><strong>Gender:</strong> ${data.gender}</p>
            <p class="card-text"><strong>Origin:</strong> ${data.origin.name}</p>
          </div>
        </div>
      `;

    // Karakter detaylarını DOM'a ekleyelim
    characterDetails.innerHTML = characterCard;
  } catch (error) {
    console.error("Hata oluştu:", error);
    characterDetails.innerHTML =
      "<p>Character details could not be fetched.</p>";
  }
};

// Fonksiyonu çağırıyoruz
fetchCharacterDetails();
