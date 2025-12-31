import { products } from './products.js';

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});

function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = products.map(product => `
        <article class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-meta">
                <h3 class="product-name">${product.name}</h3>
                <span class="product-positioning">${product.positioning}</span>
            </div>
            <p class="product-use-case">${product.useCase}</p>
            <ul class="product-features">
                ${product.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <div class="product-actions" style="margin-top: 16px;">
                <a href="#" class="btn" style="border: 1px solid #E0E0E0; padding: 8px 16px; font-size: 0.85rem;">View Datasheet</a>
            </div>
        </article>
    `).join('');
}
