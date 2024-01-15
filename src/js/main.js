// https://pixabay.com/api/?key=`40999949-91c7d6cea5390f79fde95dcf3`&image_type=`photo`&orientation=`horizontal`&safesearch=`true`;
// самое новое
fetch("some")
new URL().protocol == "http";
  
fetch(url, options);
//дописать тут может


  
// изитост, тут офф начало работы
  
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

import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';

// api-key 40999949-91c7d6cea5390f79fde95dcf3

// const requestOptions = {
//   url: "https://pixabay.com/api/",
//   method: "GET",
//   headers: {
//     "Authorization": `Bearer ${key}`,
//   },
//   params: {
//     q: "Київ",
//     image_type: "photo",
//     orientation: "horizontal",
//     safesearch: true,
//   },
// };




// const loader = document.querySelector('.loader');
const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const galleryBox = document.querySelector('.gallery-box');

const input = document.querySelector('input');

// let paramsInfo = {
//   key: '40999949-91c7d6cea5390f79fde95dcf3',
//   q: 'black',
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: true,
// }; уже есть

function searchImg(params) {
  loader.style.display = 'block';
  gallery.style.display = 'none';
  fetch(`https://pixabay.com/api/?${params}`)
    .then(response => {
      loader.style.display = 'none';
      gallery.style.display = 'flex';
      if (!response.ok) {
        throw new Error(error.status);
      }
      return response.json();
    })
    .then(({ hits }) => {
      if (hits.length > 0) {
        const renderImg = hits.reduce((html, hit) => {
          return (
            html +
            `<li class="gallery-item">
        <a href=${hit.largeImageURL}> 
          <img class="gallery-img" src =${hit.webformatURL} alt=${hit.tags}/>
        </a>
        <div class="gallery-text-box">
          <p>Likes: <span class="text-value">${hit.likes}</span></p>
          <p>views: <span class="text-value">${hit.views}</span></p>
          <p>comments: <span class="text-value">${hit.comments}</span></p>
          <p>downloads: <span class="text-value">${hit.downloads}</span></p>
      </div>
      </li>`
          );
        }, '');
        gallery.innerHTML = renderImg;

        let lightbox = new SimpleLightbox('.gallery a', {
          nav: true,
          captionDelay: 250,
          captionsData: 'alt',
          close: true,
          enableKeyboard: true,
          docClose: true,
        });
        lightbox.refresh();
      } else {
        gallery.style.display = 'none';
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
}

form.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.type === 'submit') {
    paramsInfo.q = input.value;
    const searchParams = new URLSearchParams(paramsInfo);
    searchImg(searchParams);
  }
  form.reset();
});
// тут менять основное

// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css'; это есть

const searchForm = document.querySelector('.picture-search-form');
const searchInput = document.querySelector('.picture-search-name');
const loaderContainer = document.querySelector('.loader-container');
const loader = document.querySelector('.loader');

const API_KEY = '40999949-91c7d6cea5390f79fde95dcf3';

function showLoader() {
  loaderContainer.style.display = 'block';
  loader.style.display = 'block';
}
function hideLoader() {
  loaderContainer.style.display = 'none';
  loader.style.display = 'none';
}

let requestParams = {
  key: '40999949-91c7d6cea5390f79fde95dcf3',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};


function searchImages(query) {
  requestParams.q = query;
  const searchParams = new URLSearchParams(requestParams);

  showLoader();

  fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => {
      hideLoader();

      if (!response.ok) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      return response.json();
    })

    .then(({ hits }) => {
      const gallery = document.querySelector('.gallery');

      const lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionsData: 'alt',
        close: true,
      });

      gallery.innerHTML = '';

      gallery.innerHTML = hits.reduce(
        (html, image) =>
          html +
          `<a class="gallery-link" href="${image.largeImageURL}">
            <img
                class="gallery-image"
                src="${image.webformatURL}"
                alt="${image.tags}"
            />
           <ul class="info-list">
              <li class="info-item">
                  <p class="info-title">Likes</p>
                  <p class="info-value">${image.likes}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Views</p>
                  <p class="info-value">${image.views}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Comments</p>
                  <p class="info-value">${image.comments}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Downloads</p>
                  <p class="info-value">${image.downloads}</p>
              </li>
            </ul>
        </a>`,
        ''
      );

      lightbox.refresh();
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error.message,
        position: 'topRight',
      });
    });
}

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const searchQuery = searchInput.value.trim();
  searchImages(searchQuery);
});
