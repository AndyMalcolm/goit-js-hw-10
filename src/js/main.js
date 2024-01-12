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



// менять тут

const loader = document.querySelector('.loader');
const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const galleryBox = document.querySelector('.gallery-box');

const input = document.querySelector('input');

let paramsInfo = {
  key: '40999949-91c7d6cea5390f79fde95dcf3',
  q: 'black',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

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
// попробовать кошачий переделать под новый