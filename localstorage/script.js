// Variaveis

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
const imageContainer = document.querySelector('.image');
const button = document.querySelector('button');

//Eventos

button.onclick = () => updateImage();
imageContainer.onclick = () => updateAll();

// Methods
const getState = () => {
  const imageSource = document.querySelector('.image img').src;

  const index = favorites.indexOf(imageSource);
  const existsInLocalStorage = index != -1;

  return { imageSource, index, existsInLocalStorage };
};

const updateFavorites = () => {
  const { existsInLocalStorage, index, imageSource } = getState();

  existsInLocalStorage
    ? //if
      favorites.splice(index, 1)
    : //else
      favorites.push(imageSource);

  // condicional mais legivel
  /*    if(existsInLocalStorage) {
        favorites.splice(index, 1)
    } else {    // salvar ou remover no localstorage
        favorites.push(imageSource)
    }
*/

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const updateClasses = () => {
  const { existsInLocalStorage } = getState();
  imageContainer.classList.remove('fav');

  if (existsInLocalStorage) {
    imageContainer.classList.add('fav');
  }
};

const updateAll = () => {
  updateFavorites();
  updateClasses();
};

const updateImage = async () => {
  await getExternalImage();
  updateClasses();
};

const getExternalImage = async () => {
  const response = await fetch('https://source.unsplash.com/random');

  imageContainer.innerHTML = `<img src="${response.url}" >`;
};

getExternalImage();
