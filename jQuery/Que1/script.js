$(document).ready(() => {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/photos",
    method: "GET",
    success: (resp) => {
      resp.forEach((ele) => {
        console.log(
          $("#products").append(
            createProduct(ele.thumbnailUrl, ele.title, ele.id)
          )
        );
      });
    },
    error: (err) => {
      console.log(err);
    },
  });
});

const createProduct = (imgUrl, desc, price) => {
  return `<div class="product">
  <img src="${imgUrl}" />
  <div class="title">${desc.split(" ").slice(0, 2).join(" ")}</div>
  <div class="price">₹ ${price}</div>
  <button>Add to Cart</button>
</div>`;
};
