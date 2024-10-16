document.addEventListener('DOMContentLoaded', function() {
    fetchArtworks();
  });
  
  function fetchArtworks() {
    // Fetch artworks data from your database or API
    // Assuming you have an endpoint to fetch artworks
    fetch('fetch_artworks_endpoint')
      .then(response => response.json())
      .then(data => {
        // Display artworks on the page
        displayArtworks(data);
      })
      .catch(error => console.error('Error fetching artworks:', error));
  }
  
  function displayArtworks(artworks) {
    const artworksContainer = document.getElementById('artworksContainer');
    artworks.forEach(artwork => {
      const artworkElement = document.createElement('div');
      artworkElement.classList.add('artwork');
      artworkElement.innerHTML = `
        <h2>${artwork.title}</h2>
        <p>Artist: ${artwork.artist}</p>
        <p>Price: ${artwork.price}</p>
        <button onclick="buyArtwork('${artwork.id}')">Buy Now</button>
      `;
      artworksContainer.appendChild(artworkElement);
    });
  }
  
  function buyArtwork(artworkId) {
    // Implement functionality to handle purchasing artwork
    // You can open a modal or redirect to a checkout page
  }