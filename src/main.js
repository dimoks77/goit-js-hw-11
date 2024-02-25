import { fetchImages } from './js/pixabay-api';
import { handleResponse } from './js/render-functions';

const form = document.querySelector('#form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

const options = {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  animation: 360,
  widthRatio: 1,
  scaleImageToRatio: true,
};

loader.style.display = 'none';

document.addEventListener('DOMContentLoaded', () => {
  form.addEventListener('submit', event => {
    event.preventDefault();

    const userInput = document.getElementById('search').value.trim();

    if (!userInput) {
      return;
    }

    loader.style.display = 'inline-block';
    gallery.innerHTML = '';

    fetchImages(userInput)
      .then(data => handleResponse(data, gallery))
      .finally(() => {
        loader.style.display = 'none';
      });
  });
});
