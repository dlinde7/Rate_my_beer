function loadBeers() {
  fetch('/getreviews').then(response => response.json()).then(data => createElementsWithInnerHTML(data,"Featured Beer"));
}

function createElementsWithInnerHTML(products, message) {
  const productPlaceholder = document.getElementById("pageContent");
  const header = document.getElementById("headerText");

  const rows = products.map((product) => {
    return `<section class="card slit-in-vertical">
                <section class="content">
                    <section class="name">${product.name}</section>
                    <section class="rating"> Rating: ${product.rating}</section
                    <section class="description">${product.description}</section>
                </section>
           </section>`;
  });
  const html = `${rows.join(" ")}`;
  productPlaceholder.innerHTML = html;
  header.innerText = message;
}
loadBeers()
//SELECT * FROM ratemybeer.Beer where idCompany = {id.idCompany};
//SELECT * FROM ratemybeer.Beer where Rating => {value};