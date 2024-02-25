import iziToast from 'izitoast'; 
import SimpleLightbox from 'simplelightbox'; 
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function handleResponse(data, gallery) {
  if (data.hits.length === 0) {
    iziToast.error({
      title: '',
      backgroundColor: '#EF4040',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight'
    });
  } else {
    const options = {
      captions: true,
      captionSelector: 'img',
      captionType: 'attr',
      captionsData: 'alt',
      captionPosition: 'bottom',
      animation: 250,
      widthRatio: 0.9,
      scaleImageToRatio: true,
    };

    const markup = data.hits
      .map(data => {
        return `
              <li class="gallery-item">
                  <a href="${data.webformatURL}" class="image-link">
                      <img class="gallery-image" src="${data.webformatURL}" alt="${data.tags}">
                  </a>
                  <div class="comments">
                      <div class="desc">
                          <p class="label">Likes</p>
                          <p class="value">${data.likes}</p>
                      </div>
                      <div class="desc">
                          <p class="label">Views</p>
                          <p class="value">${data.views}</p>
                      </div>
                      <div class="desc">
                          <p class="label">Comments</p>
                          <p class="value">${data.comments}</p>
                      </div>
                      <div class="desc">
                          <p class="label">Downloads</p>
                          <p class="value">${data.downloads}</p>
                      </div>
                  </div>
              </li>
              `;
      })
      .join('');
    gallery.insertAdjacentHTML('afterbegin', markup);
    const lightbox = new SimpleLightbox('.gallery a', options);
    lightbox.refresh();
    form.reset();
  }
}
