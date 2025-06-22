console.log("🟢 jQuery loaded");
console.log("🐾 Pet List div:", document.getElementById("petList"));

const pets = [ 
  { name: "Buddy", type: "Dog", age: 3, img: "img/petshop-img/dogs/dog01.jpg" }, 
  { name: "Rex", type: "Dog", age: 4, img: "img/petshop-img/dogs/dog02.jpg" }, 
  { name: "Whiskers", type: "Cat", age: 2, img: "img/petshop-img/cats/cat01.jpg" }, 
  { name: "Mittens", type: "Cat", age: 2, img: "img/petshop-img/cats/cat02.jpg" },
  { name: "Luffy", type: "Bird", age: 1, img: "img/petshop-img/birds/bird01.jpg" },
  { name: "Sky", type: "Bird", age: 2, img: "img/petshop-img/birds/bird02.jpg" },
  { name: "King", type: "Capybara", age: 2, img: "img/petshop-img/capybaras/capybara01.jpg" },
  { name: "Zoro", type: "Capybara", age: 4, img: "img/petshop-img/capybaras/capybara02.jpg" },
];

function renderPets(types) {
  const container = $("#petList");
  container.empty();

  pets.forEach(pet => {
    if (types.includes(pet.type)) {
      container.append(`
        <div class="pet">
          <img src="${pet.img}" alt="${pet.name}">
          <h3>${pet.name}</h3>
          <p>Type: ${pet.type}</p>
          <p>Age: ${pet.age} years</p>
        </div>
      `);
    }
  });
}

function getCheckedTypes() {
  const checked = [];
  $(".pet-filter:checked").each(function () {
    checked.push($(this).val());
  });
  return checked;
}

$(document).ready(function () {
  renderPets(getCheckedTypes());

  $(".pet-filter").on("change", function () {
    const selectedTypes = getCheckedTypes();
    console.log("Checked types:", getCheckedTypes());
    renderPets(selectedTypes);
  });
  console.log("🐾 petList found?", document.getElementById("petList"));
});