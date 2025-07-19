fetch('data/products.json')
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById('product-list');
    if (!container) return;
    container.innerHTML = '';
    products.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';

      const img = document.createElement('img');
      img.src = p.image;
      img.alt = p.name;

      const h3 = document.createElement('h3');
      h3.textContent = p.name;

      const desc = document.createElement('p');
      desc.textContent = p.description;

      const price = document.createElement('p');
      price.className = 'price';
      price.textContent = p.price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });

      const link = document.createElement('a');
      link.className = 'button';
      link.href = `product.html?id=${p.id}`;
      link.textContent = 'View Details';

      card.appendChild(img);
      card.appendChild(h3);
      card.appendChild(desc);
      card.appendChild(price);
      card.appendChild(link);
      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error('Could not load products:', err);
  });
