function loadReviews() {
  // fetch('/getreviews').then(response => response.json()).then(data => createReviewsWithInnerHTML(data));
  const params = new URLSearchParams(window.location.search);
  console.log(params.get("id"));
  var fetchString = "/getproduct?id=" + params.get("id");

  fetch(fetchString)
    .then((response) => response.json())
    .then((data) => {
      let beer = Object();
      beer = data;
      document.getElementById("name").innerText = beer.Name;
      document.getElementById("rating").innerText = beer.Rating;
      document.getElementById("description").innerText = beer.Decription;
    });
}

function onBackClicked() {
  window.history.go(-1);
  return false;
}

function createReviewsWithInnerHTML(reviews) {
  const reviewPlaceholder = document.getElementById("reviewPlaceHolder");
  console.log(reviews);
  const rows = reviews.map((review) => {
    return `<section class="card slit-in-vertical">
                  <section class="content">
                      <section class="name">${review.Name}</section>
                      <section class="rating"> Rating: ${review.Rating}</section>
                      <section class="description">${review.Decription}</section>
                  </section>
             </section>`;
  });

  const html = `${rows.join(" ")}`;

  reviewPlaceholder.innerHTML = html;
}

loadReviews();
