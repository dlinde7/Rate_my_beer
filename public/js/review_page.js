function loadReviews() {
  const params = new URLSearchParams(window.location.search);
  console.log(params.get('id'));
  var fetchString = '/getproduct?id=' + params.get('id');

  fetch(fetchString)
    .then((response) => response.json())
    .then((data) => {
      let beer = Object();
      beer = data;
      document.getElementById('name').innerText = beer.Name;
      document.getElementById('rating').innerText =
        'Average Rating: ' + beer.Rating;
      document.getElementById('description').innerText = beer.Decription;
    });

  fetchString = '/get_product_reviews?productId=' + params.get('id');
  fetch(fetchString)
    .then((response) => response.json())
    .then((data) => {
      createReviewsWithInnerHTML(data);
    });
}

function onBackClicked() {
  window.history.go(-1);
  return false;
}

function createReviewsWithInnerHTML(reviews) {
  const reviewPlaceholder = document.getElementById('reviewPlaceHolder');
  console.log(reviews);
  const rows = reviews.map((review) => {
    if (review.Username) {
      return `<section class="card slit-in-vertical">
                    <section class="contentrev">
                        <section class="name">${review.Username}</section>
                        <section class="rating"> Rating: ${review.Rating}</section>
                        <section class="description">${review.Review}</section>
                    </section>
              </section>`;
    } else {
      return `<section class="card slit-in-vertical">
                    <section class="contentrev">
                        <section class="name">Anonymous</section>
                        <section class="rating"> Rating: ${review.Rating}</section>
                        <section class="description">${review.Review}</section>
                    </section>
              </section>`;
    }
  });

  const html = `${rows.join(' ')}`;

  reviewPlaceholder.innerHTML = html;
}
function onRateClicked() {
  const params = new URLSearchParams(window.location.search);
  var radios = document.getElementsByName('rate');
  let radioValue = 0;
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      radioValue = radios[i].value;
      break;
    }
  }
  const reviewText = document.getElementById('userReview').value;

  const review = {
    userId: 1,
    beerId: params.get('id'),
    rating: radioValue,
    reviewText: reviewText,
  };

  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/add_review', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(review));
  location.reload();
}

loadReviews();
