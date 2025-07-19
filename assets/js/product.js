function loadProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10);
  if (!id) return;

  fetch('data/products.json')
    .then(res => res.json())
    .then(products => {
      const product = products.find(p => p.id === id);
      if (!product) return;
      document.getElementById('product-title').textContent = product.name;
      document.getElementById('product-image').src = product.image;
      document.getElementById('product-image').alt = product.name;
      document.getElementById('product-description').textContent = product.description;
      document.getElementById('product-price').textContent = product.price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });
    })
    .catch(err => console.error('Product load error', err));
}

document.addEventListener('DOMContentLoaded', loadProduct);
