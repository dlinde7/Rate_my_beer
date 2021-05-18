function onClick() {
  const products = [
    {
      name: "Beer Name",
      rating: 4,
      description:
        "It’s about making placeholder text great again. That’s what people want, they want placeholder text to be great again. If Trump Ipsum weren’t my own words, perhaps I’d be dating it. Lorem Ipsum better hope that there are no 'tapes' of our conversations before he starts leaking to the press!",
    },
    {
      name: "Beer Name",
      rating: 5,
      description: "My text is long and beautiful, as, it has been well documented, are various other parts of my website. I think the only difference between me and the other placeholder text is that I’m more honest and my words are more beautiful. An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.",
    },
    {
      name: "Beer Name",
      rating: 3,
      description: "Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?! An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud. An 'extremely credible source' has called my office and told me that Lorem Ipsum's birth certificate is a fraud.",
    },
    {
      name: "Beer Name",
      rating: 2,
      description: "When other websites give you text, they’re not sending the best. They’re not sending you, they’re sending words that have lots of problems and they’re bringing those problems with us. They’re bringing mistakes. They’re bringing misspellings. They’re typists… And some, I assume, are good words.",
    },
  ];
  createElementsWithInnerHTML(products, "Search results");
}

function createElementsWithInnerHTML(products, message) {
  const productPlaceholder = document.getElementById("pageContent");
  const header = document.getElementById("headerText");

  console.log(products);
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
