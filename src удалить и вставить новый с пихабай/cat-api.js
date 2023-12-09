//40999949-91c7d6cea5390f79fde95dcf3 по идее это мой ключ

export function fetchBreeds(){
    const BASE_URL = 'https://api.thecatapi.com/v1';
    const END_POINT = '/breeds';
    const PARAMS = `breeds`;
    const url = BASE_URL + END_POINT + PARAMS;
    const options = {
      headers: {
        'x-api-key':
        'live_fJpEcmsalSnOTXMFW2gIUjht2meB9RjPKKjqwTJM4nwuPumBrJ4W2DyXwf7j0NpU'
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
        'live_fJpEcmsalSnOTXMFW2gIUjht2meB9RjPKKjqwTJM4nwuPumBrJ4W2DyXwf7j0NpU'
      },
    };
    return fetch(url, options).then(response => {
        if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
  
  
  