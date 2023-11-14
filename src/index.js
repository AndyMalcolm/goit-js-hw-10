//start here
axios.defaults.headers.common["x-api-key"] = "live_fJpEcmsalSnOTXMFW2gIUjht2meB9RjPKKjqwTJM4nwuPumBrJ4W2DyXwf7j0NpU";

// import axios from "axios";
// import SlimSelect from 'slim-select';
// import {fetchCatByBreed} from "./cat-api.js";
// import{fetchBreeds} from "./cat-api.js"
import Notiflix from 'notiflix';


// const breedSelect = document.querySelector('.breed-select');
// const catInfo = document.querySelector('.cat-info');
// const loader = document.querySelector('.loader');
// const errorElement = document.querySelector('.error');

// const showLoader = () => {
//   loader.style.display = 'block';
//   breedSelect.style.display = 'none';
//   catInfo.style.display = 'none';
//   errorElement.style.display = 'none';
// };

// const hideLoader = () => {
//   loader.style.display = 'none';
//   breedSelect.style.display = 'block';
//   catInfo.style.display = 'block';
//   errorElement.style.display = 'none';
// };

// const showError = (message) => {
//   errorElement.textContent = message;
//   errorElement.style.display = 'block';
// };

// const renderBreeds = (breeds) => {
//   breeds.forEach((breed) => {
//     const option = document.createElement('option');
//     option.value = breed.id;
//     option.textContent = breed.name;
//     breedSelect.appendChild(option);
//   });
// };

// const renderCatInfo = (cat) => {
//   catInfo.innerHTML = `
//     <div class="cat-info-container">
//       <div class="cat-photo-container">
//         <img class="cat-photo" src="${cat.url}" alt="cat">
//       </div>
//       <div class="cat-details">
//         <h2>${cat.breeds[0].name}</h2>
//         <p>Description: ${cat.breeds[0].description}</p>
//         <p>Temperament: ${cat.breeds[0].temperament}</p>
//       </div>
//     </div>
//   `;
// };

// const handleBreedChange = () => {
//   const selectedBreedId = breedSelect.value;
//   if (selectedBreedId) {
//     showLoader();
//     fetchCatByBreed(selectedBreedId)
//       .then(response => {
//         hideLoader();
//         errorElement.style.display = 'none';
//         const cat = response[0];
//         renderCatInfo(cat);
//       })
//     }}