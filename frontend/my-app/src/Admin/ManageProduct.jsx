import React from 'react';
import './ManageProduct.css';

const products = [
  {
    id: 1,
    name: 'Heritage Leather Tote',
    price: 1200,
    stock: 8
  },
  {
    id: 2,
    name: 'Signature Gold Wallet',
    price: 480,
    stock: 15
  },
  {
    id: 3,
    name: 'Classic Business Bag',
    price: 1050,
    stock: 5
  }
];

const ManageProducts = () => {
  return (
    <div className="admin-products-container">
      <h2>Manage Products</h2>
      <button className="add-product-btn">+ Add New Product</button>

      <div className="products-table">
        <div className="table-header">
          <span>Name</span>
          <span>Price</span>
          <span>Stock</span>
          <span>Actions</span>
        </div>

        {products.map((product) => (
          <div className="table-row" key={product.id}>
            <span>{product.name}</span>
            <span>${product.price}</span>
            <span>{product.stock}</span>
            <span className="action-buttons">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
