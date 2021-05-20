function loadReviews() {
  const reviews = [
    {
      username: "User Name",
      rating: 4,
      review:
        "It’s about making placeholder text great again. That’s what people want, they want placeholder text to be great again. If Trump Ipsum weren’t my own words, perhaps I’d be dating it. Lorem Ipsum better hope that there are no 'tapes' of our conversations before he starts leaking to the press!",
    },
    {
      username: "User Name",
      rating: 5,
      review:
        "My text is long and beautiful, as, it has been well documented, are various other parts of my website. I think the only difference between me and the other placeholder text is that I’m more honest and my words are more beautiful. An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.",
    },
    {
      username: "User Name",
      rating: 3,
      review:
        "Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?! An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud. An 'extremely credible source' has called my office and told me that Lorem Ipsum's birth certificate is a fraud.",
    },
    {
      username: "User Name",
      rating: 2,
      review:
        "When other websites give you text, they’re not sending the best. They’re not sending you, they’re sending words that have lots of problems and they’re bringing those problems with us. They’re bringing mistakes. They’re bringing misspellings. They’re typists… And some, I assume, are good words.",
    },
    ,
    {
      username: "User Name",
      rating: 5,
      review:
        "My text is long and beautiful, as, it has been well documented, are various other parts of my website. I think the only difference between me and the other placeholder text is that I’m more honest and my words are more beautiful. An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.",
    },
  ];
  createReviewsWithInnerHTML(reviews);
}

function onBackClicked(){
    window.history.go(-1); 
    return false;
}

function createReviewsWithInnerHTML(reviews) {
  const reviewPlaceholder = document.getElementById("reviewPlaceHolder");
  console.log(reviews);
  const rows = reviews.map((review) => {
    return `<section class="card slit-in-vertical">
                  <section class="content">
                      <section class="name">${review.username}</section>
                      <section class="rating"> Rating: ${review.rating}</section>
                      <section class="description">${review.review}</section>
                  </section>
             </section>`;
  });

  const html = `${rows.join(" ")}`;

  reviewPlaceholder.innerHTML = html;
}

// SELECT avg(Rating) FROM ratemybeer.Reviews where idBeer = {id.idbeer};
// SELECT * FROM ratemybeer.Reviews where idBeer = {id.idbeer};
