function openNav() {
    document.getElementById("mySidenav").style.left = "0";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.left = "-250px";
  }
   document.getElementById('create-button').addEventListener('click', function() {
              var dropdownMenu = document.getElementById('dropdown-menu');
              if (dropdownMenu.style.display === 'block') {
                  dropdownMenu.style.display = 'none';
              } else {
                  dropdownMenu.style.display = 'block';
              }
          });
  
          window.onclick = function(event) {
              var dropdownMenu = document.getElementById('dropdown-menu');
              if (!event.target.matches('#create-button')) {
                  if (dropdownMenu.style.display === 'block') {
                      dropdownMenu.style.display = 'none';
                  }
              }
          };
          document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
      var category = this.getAttribute('data-category');
      generateContent(category);
      closeNav();
    });
  });
  
  function generateContent(category) {
    var contentContainer = document.getElementById('content');
    contentContainer.innerHTML = '';
  
    var artists = getArtistsByCategory(category);
  
    artists.forEach(artist => {
      var card = document.createElement('div');
      card.className = 'card';
  
      var cardHeader = document.createElement('div');
      cardHeader.className = 'card-header';
      cardHeader.innerHTML = `<h3>${artist.name}</h3><p>${artist.location}</p><p>${artist.year}</p><h4>${artist.price}</h4>`;

  
      var cardBody = document.createElement('div');
      cardBody.className = 'card-body';
  
      artist.images.forEach(image => {
        var img = document.createElement('img');
        img.src = image;
        img.className = 'card-image';
        cardBody.appendChild(img);
      });
  
      card.appendChild(cardHeader);
      card.appendChild(cardBody);
      contentContainer.appendChild(card);
    });
  }
  
  function getArtistsByCategory(category) {
    // Replace this with actual data or fetch from server
    var data = {
      'Artists': [
        {
          name: 'Marco Mazzoni',
          location: 'Italian Artist',
          year: '2010',
          images: ['1.jpg'],
          price: '$150'
        },
        {
          name: 'Paul Cadden',
          location: ' Scottish contemporary Artist',
          year: '2012',
          images: ['2.jpg'],
          price: '$200'
        },
        {
            name: 'Leon Kossoff',
            location: 'British Figurative Painter',
            year: '2011',
            images: ['3.jpg'],
            price: '$550'
          },
          {
            name: 'Dennis Creffield',
            location: 'British Artist',
            year: '2014',
            images: ['4.jpg'],
            price: '$200'
          },
          {
            name: 'Jerry LoFaro',
            location: 'Spanish Artist',
            year: '2017',
            images: ['5.jpg'],
            price: '$650'
          },
          {
            name: ' Salvador Dalí',
            location: 'Modern Artist',
            year: '2014',
            images: ['6.jpg'],
            price: '$350'
          },
          
          {
            name: 'James Ensor',
            location: 'Belgian painter',
            year: '2010',
            images: ['7.jpg'],
            price: '$150'
          },
        // Add more artists here...
      ],
      'Collectors': [
        {
            name: 'Marco Mazzoni',
            location: 'Italian Artist',
            year: '2010',
            images: ['1.jpg'],
            price: '$150'
          },
          {
            name: 'Paul Cadden',
            location: ' Scottish contemporary Artist',
            year: '2012',
            images: ['2.jpg'],
            price: '$200'
          },
          {
              name: 'Leon Kossoff',
              location: 'British Figurative Painter',
              year: '2011',
              images: ['3.jpg'],
              price: '$550'
            },
            {
              name: 'Dennis Creffield',
              location: 'British Artist',
              year: '2014',
              images: ['4.jpg'],
              price: '$200'
            },
            {
              name: 'Jerry LoFaro',
              location: 'Spanish Artist',
              year: '2017',
              images: ['5.jpg'],
              price: '$650'
            },
            {
              name: ' Salvador Dalí',
              location: 'Modern Artist',
              year: '2014',
              images: ['6.jpg'],
              price: '$350'
            },
            
            {
              name: 'James Ensor',
              location: 'Belgian painter',
              year: '2010',
              images: ['7.jpg'],
              price: '$150'
            },
         
          
        // Add artists for phone cases...
      ],
      'home-decor': [
        // Add artists for home decor...
      ],
      'lifestyle': [
        // Add artists for lifestyle...
      ],
      'apparel': [
        // Add artists for apparel...
      ],
      'stationery': [
        // Add artists for stationery...
      ],
      'beach': [
        // Add artists for beach...
      ],
      'miscellaneous': [
        // Add artists for miscellaneous...
      ],
    };
  
    return data[category] || [];
  }
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const imageContainer = document.querySelector('.image-container');
  const images = document.querySelectorAll('.image-container img');
  
  let currentIndex = 0;
  
  function updateSlider() {
      const width = imageContainer.clientWidth;
      imageContainer.style.transform = translateX('${-width * currentIndex}px');
  }
  
  function showNextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlider();
  }
  
  function showPrevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateSlider();
  }
  
  nextButton.addEventListener('click', showNextImage);
  prevButton.addEventListener('click', showPrevImage);
  
  document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
          showNextImage();
      } else if (event.key === 'ArrowLeft') {
          showPrevImage();
      }
  });
  
  window.addEventListener('resize', updateSlider);