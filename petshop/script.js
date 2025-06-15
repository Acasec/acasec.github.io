const pets = [ 
    { "name": "Buddy", "type": "Dog", "age": 3, "img": "img/petshop-img/dogs/dog01.jpg" }, 
    { "name": "Rex", "type": "Dog", "age": 4, "img": "img/petshop-img/dogs/dog02.jpg" }, 
    { "name": "Whiskers", "type": "Cat", "age": 2, "img": "img/petshop-img/cats/cat01.jpg" }, 
    { "name": "Mittens", "type": "Cat", "age": 2, "img": "img/petshop-img/cats/cat02.jpg" },
    { "name": "Luffy", "type": "Bird", "age": 1, "img": "img/petshop-img/birds/bird01.jpg" },
    { "name": "Sky", "type": "Bird", "age": 2, "img": "img/petshop-img/birds/bird02.jpg" },
    { "name": "King", "type": "Capybaras", "age": 2, "img": "img/petshop-img/capybaras/capybara01.jpg" },
    { "name": "Zoro", "type": "Capybaras", "age": 4, "img": "img/petshop-img/capybaras/capybara02.jpg" },

  ];

  pets.forEach(pet => {
    petList.innerHTML += `
      <div class="pet">
        <img src="${pet.img}" alt="${pet.name}">
        <h3>${pet.name}</h3>
        <p>Type: ${pet.type}</p>
        <p>Age: ${pet.age} years</p>
      </div>
    `;
  });

  function loadPets() {
    console.log('Loading pets...');
    const petList = document.getElementById('pet-list');
    pets.forEach(pet => {
      const petItem = document.createElement('div');
      petItem.className = 'pet';
      petItem.innerHTML = `
        <img src="${pet.img}" alt="${pet.name}">
        <h3>${pet.name}</h3>
        <p>Type: ${pet.type}</p>
        <p>Age: ${pet.age} years</p>
        <button onclick="adoptPet()">Adopt Now</button>
      `;
      petList.appendChild(petItem);
    });
  }
  
  document.addEventListener('DOMContentLoaded', loadPets);
  console.log('Pets loaded successfully.');
