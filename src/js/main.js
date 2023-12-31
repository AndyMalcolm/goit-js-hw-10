

axios.defaults.headers.common["x-api-key"] = "live_LVElnDG0qei7b46LgHfaN0g6p0Q8ltRmuwgyRcjBR890c1CX9OU8WlLveL28bWwO";

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

// сверху с 1 формы, снизу с 2. код переписать и ненужное удалить

export function fetchBreeds(){
    const BASE_URL = 'https://api.thecatapi.com/v1';
    const END_POINT = '/breeds';
    const PARAMS = `breeds`;
    const url = BASE_URL + END_POINT + PARAMS;
    const options = {
      headers: {
        'x-api-key':
        'live_LVElnDG0qei7b46LgHfaN0g6p0Q8ltRmuwgyRcjBR890c1CX9OU8WlLveL28bWwO'
      },
    };
      return fetch(url, options).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
  
  export function fetchCatByBreed(breedId) {
    const BASE_URL = 'https://api.thecatapi.com/v1';
    const END_POINT = '/images/search';
    const PARAMS = `?breed_ids=${breedId}`;
    const url = BASE_URL + END_POINT + PARAMS;
    const options = {
      headers: {
        'x-api-key':
        'live_LVElnDG0qei7b46LgHfaN0g6p0Q8ltRmuwgyRcjBR890c1CX9OU8WlLveL28bWwO'
      },
    };
    return fetch(url, options).then(response => {
        if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
  
  
  // изитост
  
  iziToast.show({
    title: 'Hey',
    message: 'Sorry, there are no images matching your search query. Please try again!'
});



if (data.length === 0) {
  iziToast.error({
    title: 'Error',
    message: 'Sorry, there are no images matching your search query. Please try again.',
  });
} else {

}

// библиотеки

import SimpleLightbox from "simplelightbox";
import iziToast from "izitoast";

// api-key 40999949-91c7d6cea5390f79fde95dcf3

const requestOptions = {
  url: "https://pixabay.com/api/",
  method: "GET",
  headers: {
    "Authorization": `Bearer ${key}`,
  },
  params: {
    q: "Київ",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  },
};



async function searchImages(query) {
  const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.hits.length > 0) {
      return data.hits;
    } else {
      throw new Error("No images found");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
function showMessage(message, type = "error") {
  iziToast.show({
    title: "Message",
    message: message,
    position: "topCenter",
    timeout: 5000,
    color: type === "error" ? "red" : "green",
  });
}
async function handleSearch() {
  const searchInput = document.getElementById("searchInput").value;
  
  try {
    const images = await searchImages(searchInput);
    images.forEach((image) => {
      console.log("Image URL:", image.webformatURL);
    });
  } catch (error) {
    showMessage("Sorry, there are no images matching your search query. Please try again!");
  }
}
document.getElementById("searchButton").addEventListener("click", handleSearch);



fetch(url, options);



// https://pixabay.com/api/?key=`40999949-91c7d6cea5390f79fde95dcf3`&image_type=`photo`&orientation=`horizontal`&safesearch=`true`;
// самое новое
fetch("some")
new URL().protocol == "http";