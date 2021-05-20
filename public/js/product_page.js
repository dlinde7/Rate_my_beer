function loadBeers() {
  fetch('/getbeers')
    .then((response) => response.json())
    .then((data) => createElementsWithInnerHTML(data, 'Featured Beer'));
}

function createElementsWithInnerHTML(products, message) {
  const productPlaceholder = document.getElementById('pageContent');
  const header = document.getElementById('headerText');
  console.log(products);
  const rows = products.map((product) => {
    return `<section data-id="${product.idBeer}" onclick="onCardClicked(this)" class="card slit-in-vertical">
              <section class="content">
                <section class="name">${product.Name}</section>
                <section class="rating"> Rating: ${product.Rating}</section>
                <section class="description">${product.Decription}</section>
              </section>
            </section>`;
  });
  const html = `${rows.join(' ')}`;
  productPlaceholder.innerHTML = html;
  header.innerText = message;
}
loadBeers();

function onCardClicked(card) {
  var id = card.getAttribute('data-id');
  console.log(id);
  window.location.href = '../product_review?id=' + id;
}
//SELECT * FROM ratemybeer.Beer where idCompany = {id.idCompany};
//SELECT * FROM ratemybeer.Beer where Rating => {value};
