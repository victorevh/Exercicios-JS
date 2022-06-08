let favorites = JSON.parse(localStorage.getItem('favorites')) || []
// pegar imagem externa

const getExternalImage = async () => {
   const response = await fetch('https://source.unsplash.com/random')

   document.querySelector('.image')
   .innerHTML = `<img src="${response.url}" >`
}

getExternalImage()

// clicar no botão, pegar imagem externa

document.querySelector('button').onclick = () => {
    getExternalImage()
}

// clicar na imagem

document.querySelector('.image').onclick = () => {
    const imageContainer = document.querySelector('.image')

    const imageSource = document.querySelector('.image img').src

    // verificar se está no localstorage, remover.

    const index = favorites.indexOf(imageSource)
    const existsInLocalStorage = index != -1
    if(existsInLocalStorage) {
        favorites.splice(index, 1)
        imageContainer.classList.remove('fav')
    } else {    // salvar ou remover no localstorage
        favorites.push(imageSource)
        imageContainer.classList.add('fav')
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
}

// salvar no local storage ou remover