// import axios from "axios";
// axios.defaults.headers.common["x-api-key"] = "live_fJpEcmsalSnOTXMFW2gIUjht2meB9RjPKKjqwTJM4nwuPumBrJ4W2DyXwf7j0NpU";
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select'
new SlimSelect({
    select: '#selectElement'
  })
//импорты есть, они не обязательны, код для загрузчика тоже
const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const errorElement = document.querySelector('.error');

fetch('https://api.thecatapi.com/v1/breeds')
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
   .then(breeds => {
      hideLoader();
      breeds.forEach((breed) => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
        });
    })
    .catch(error => {
      hideLoader();
      showError('Error fetching cat breeds' + error.message);
    });

    const showLoader = () => {
      loader.style.display = 'block';
      breedSelect.style.display = 'none';
      catInfo.style.display = 'none';
      errorElement.style.display = 'none';
    };
    
    const hideLoader = () => {
      loader.style.display = 'none';
      breedSelect.style.display = 'block';
      catInfo.style.display = 'block';
      errorElement.style.display = 'none';
    };
    
    const showError = (message) => {
      errorElement.textContent = message;
      errorElement.style.display = 'block';
    };
    
    showLoader();

          breedSelect.addEventListener('change', () => {
          const selectedBreedId = breedSelect.value;
            if (selectedBreedId) {
            showLoader();
            fetchCatByBreed(selectedBreedId)
              .then(response => {
                hideLoader();
                errorElement.style.display = 'none';
                const cat = response[0];
              
          catInfo.innerHTML = `
          <div class="cat-info-container">
          <div class="cat-photo-container">
          <img class="cat-photo" src="${cat.url}" alt="cat">
          </div>
          <div class="cat-details">
          <h2>${cat.breeds[0].name}</h2>
          <p>Description: ${cat.breeds[0].description}</p>
          <p>Temperament: ${cat.breeds[0].temperament}</p>
          </div>
          </div>
          `;
      }) .catch(error => {
        hideLoader();
        showError("Error: " + error.message);
      });
  }
});
//исправить