const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
// const quer = 'flower';
// const orient = 'squarish';

const count = 20;
const orientation = 'landscape'
const query = 'flower'
const apiKey = '4ci_tb7O-wAfBL2VfTAb82QmqfKr57XyUsmEq2yk6uA';

const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}&orientation=${orientation}&query=${query}`;



// Create Photo Elements to Add to DOM
function displayPhotos() {
    photosArray.forEach((photo) => {
        // Create <a> for link
        console.log(photo)
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // Create <img> for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        // Put inside div
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}


// Get photos
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch {
        // 
    }
}

// On load
getPhotos();