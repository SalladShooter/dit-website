const profileUrl = "https://www.instagram.com/northmen_dit/";

fetch('socialmedia.txt')
  .then(response => response.text())
  .then(textData => {
    const imageUrls = textData
      .split('\n')
      .map(url => url.replace(/^-?\s*/, '').trim())
      .filter(url => url.length > 0);

    const marqueeContainer = document.getElementById('social-marquee');

    const createList = () => `
      <ul class="social-showcase">
        ${imageUrls.map(cleanImageUrl => `
          <li class="carousel-item">
            <a href="${profileUrl}" target="_blank" rel="noopener noreferrer">
              <img src="${cleanImageUrl}" alt="Instagram Profile" class="social-img" />
            </a>
          </li>
        `).join('')}
      </ul>
    `;

    marqueeContainer.innerHTML = createList() + createList();
  })
  .catch(error => console.error('Error reading the image URLs:', error));
