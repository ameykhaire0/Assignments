let showNav = false;
let showForm = false;

const products = [
  { name: "Product", price: "120", description: "This is a fine product" },
  { name: "Product", price: "120", description: "This is a fine product" },
  { name: "Product", price: "120", description: "This is a fine product" },
  { name: "Product", price: "120", description: "This is a fine product" },
  { name: "Product", price: "120", description: "This is a fine product" },
  { name: "Product", price: "120", description: "This is a fine product" },
];

const navChangeHandler = () => {
  let ham = document.getElementsByClassName("mobile-navbar")[0];
  showNav = !showNav;
  showNav ? (ham.style.display = "contents") : (ham.style.display = "none");
};

$(document).ready(() => {
  $("input").focus(function () {
    $(this).parents(".form-group").addClass("focused");
  });

  $("#add").click(() => {
    let name = $("#name").val();
    let price = $("#price").val();
    let description = $("#desc").val();
    let product = { name, price, description };
    products.unshift(product);
    $("#products").html("");
    updateProduct();
    clearInputs();
  });

  $("#cancel").click(() => {
    clearInputs();
    showForm = false;
    $(".form-wrapper").hide();
  });

  $("input").blur(function () {
    var inputValue = $(this).val();
    if (inputValue == "") {
      $(this).removeClass("filled");
      $(this).parents(".form-group").removeClass("focused");
    } else {
      $(this).addClass("filled");
    }
  });

  $("#add-product").click(() => {
    showForm = !showForm;
    showForm ? $(".form-wrapper").show() : $(".form-wrapper").hide();
  });

  const updateProduct = () => {
    products.forEach((ele) => {
      $("#products").append(
        createProduct(ele.name, ele.description, ele.price)
      );
    });
  };

  const clearInputs = () => {
    $("input").val("").blur();
  };
  updateProduct();
});

const createProduct = (name, desc, price) => {
  return `<div class="product">
  <img src="../images/logo.jpg" />
  <div class="title">${name}</div>
  <div class="price">₹ ${price}</div>
  <div class="desc">${desc}</div>
  <button>Add to Cart</button>
</div>`;
};
