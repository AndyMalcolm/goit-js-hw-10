//start here
axios.defaults.headers.common["x-api-key"] = "live_fJpEcmsalSnOTXMFW2gIUjht2meB9RjPKKjqwTJM4nwuPumBrJ4W2DyXwf7j0NpU";

const breedSelect = document.getElementById("breed-select");
const catInfo = document.querySelector(".cat-info");
const catImage = document.getElementById("cat-image");
const breedName = document.getElementById("breed-name");
const description = document.getElementById("description");
const temperament = document.getElementById("temperament");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");

fetchBreeds()
  .then((breeds) => {
    breeds.forEach((breed) => {
      const option = document.createElement("option");
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });
  })
  .catch((err) => {
    showError();
  });

breedSelect.addEventListener("change", () => {
  const selectedBreedId = breedSelect.value;
  if (selectedBreedId) {
    showLoader();
    fetchCatByBreed(selectedBreedId)
      .then((cat) => {
        displayCatInfo(cat);
        hideLoader();
      })
      .catch((err) => {
        showError();
      });
  }
});

function showLoader() {
  catInfo.style.display = "none";
  loader.style.display = "block";
  error.style.display = "none";
}

function hideLoader() {
  loader.style.display = "none";
}

function showError() {
  loader.style.display = "none";
  error.style.display = "block";
}

function displayCatInfo(cat) {
  catImage.src = cat[0].url;
  breedName.textContent = `Порода: ${cat[0].breeds[0].name}`;
  description.textContent = `Опис: ${cat[0].breeds[0].description}`;
  temperament.textContent = `Темперамент: ${cat[0].breeds[0].temperament}`;
  catInfo.style.display = "block";
}

export function fetchBreeds() {
    return axios.get("https://api.thecatapi.com/v1/breeds")
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }
  
  export function fetchCatByBreed(breedId) {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }