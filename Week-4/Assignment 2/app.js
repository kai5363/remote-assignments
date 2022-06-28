function ajax(src, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText);
    }
  };
  xhr.send();
}

function render(data) {
  products = JSON.parse(data);
  const body = document.querySelector("body");
  for (const product of products) {
    const productName = document.createElement("h2");
    productName.textContent = product.name;
    body.append(productName);
    const productPrice = document.createElement("p");
    productPrice.textContent = `$${product.price}`;
    body.append(productPrice);
    const productDescription = document.createElement("p");
    productDescription.textContent = product.description;
    body.append(productDescription);
  }
}

ajax(
  "https://appworks-school.github.io/Remote-Aassigiment-Data/products",
  function (response) {
    render(response);
  }
);
