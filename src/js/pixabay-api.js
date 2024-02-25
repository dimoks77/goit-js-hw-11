const apiKey = '42557363-2349d8dc8525cd1cea516a01b';
const baseUrl = 'https://pixabay.com/api/';
const endPoint = '';

export function fetchImages(userInput) {
  const queryParams = new URLSearchParams({
    key: apiKey,
    q: userInput,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true
  });
  const url = `${baseUrl}${endPoint}?${queryParams}`;

  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}
