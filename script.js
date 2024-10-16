 // script.js
//  const form = document.getElementById('artistForm');

//  form.addEventListener('submit', async (e) => {
//    e.preventDefault();
   
//    const formData = new FormData(form);
//    const artistData = Object.fromEntries(formData.entries());
   
//    try {
//      const response = await fetch('http://localhost:3000/artists', {
//        method: 'POST',
//        headers: {
//          'Content-Type': 'application/json'
//        },
//        body: JSON.stringify(artistData)
//      });
     
//      const data = await response.json();
//      console.log(data); // Log the response from the server
//    } catch (err) {
//      console.error(err);
//    }
//  });
 const alertButton = document.getElementById('alertButton');

    alertButton.addEventListener('click', () => {
      alert('Art Work Is added!');
      window.location.href = 'afterls.html'; 
    });
 