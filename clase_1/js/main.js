const products = [
  {
    title: "Producto 1",
    description: "Descripcion del Producto 1",
    imageUrl: "https://placehold.co/300x400?text=Producto1",
  },
  {
    title: "Producto 2",
    description: "Descripcion del Producto 2",
    imageUrl: "https://placehold.co/300x400?text=Producto2",
  },
  {
    title: "Producto 3",
    description: "Descripcion del Producto 3",
    imageUrl: "https://placehold.co/300x400?text=Producto3",
  },
  {
    title: "Producto 4",
    description: "Descripcion del Producto 4",
    imageUrl: "https://placehold.co/300x400?text=Producto4",
  },
];

const app = document.getElementById("app");
// repasar destructuring
function createCard({ title, description, imageUrl }) {
  const card = document.createElement("div");
  card.className = "card";
  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = title;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h2");
  cardTitle.className = "card-title";
  cardTitle.textContent = title;

  const cardDescription = document.createElement("p");
  cardDescription.className = "card-description";
  cardDescription.textContent = description;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardDescription);
  card.appendChild(img);
  card.appendChild(cardBody);

  return card;
}
// products.forEach((product) => {
//   const card = createCard(product);
//   app.appendChild(card);
// });

// interpolacion recordar
function createCardSimple({ title, description, imageUrl }) {
  const card = `<div class="card">
        <div class="card-image">
          <img
            src="${imageUrl}"
            alt="imagen de muestra" />
        </div>
        <div class="card-body">
          <div class="card-title">
            <h3>${title}</h3>
          </div>
          <div class="card-description">
            <p>${description}</p>
          </div>
        </div>
      </div>`;
  return card;
}

products.forEach((product) => {
  const card = createCardSimple(product);
  //app.innerHTML = app.innerHTML + card
  app.innerHTML += card;
});
