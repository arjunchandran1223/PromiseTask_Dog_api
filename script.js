document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fetch-Dog-image-button').addEventListener('click', fetchDogImage);
    fetchWeather();
    fetchJokes();
});

function fetchDogImage() {
    const Code = document.getElementById('status-code-input').value;
    if (!Code) {
        alert('Please enter a status code.');
        return;
    }

    const imageUrl = `https://http.dog/${Code}.jpg`;
    const factList = document.getElementById('Dog-facts-list');
    factList.innerHTML = ''; // Clear previous images

    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = `HTTP Dog for status code ${Code}`;
    img.className = 'img-fluid'; // Bootstrap class for responsive images

    listItem.appendChild(img);
    factList.appendChild(listItem);
}