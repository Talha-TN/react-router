// import React from 'react'
// import { useNavigate } from 'react-router'
// import { useParams } from 'react-router'
// const ProductDetails = () => {
//   const params = useParams()
//   console.log(params.id)
//   const navigate = useNavigate()
//   return (
//     <div>
//       <h1>product id {params.id}</h1>
//       <button className='bg-blue-400 p-3 rounded-lg ml-10 mt-10' onClick={()=>navigate("/")}>back to home </button>
//     </div>
    
//   )
// }

// export {ProductDetails}
//////////////////////////////////////////////////
import React from 'react';
import { useNavigate, useParams } from 'react-router';

const ProductDetails = () => {
  const { id } = useParams(); // Destructure to get id directly
  const navigate = useNavigate();

  // Sample product data (you might replace this with real data from an API)
  const products = [
    {
      id: '1',
      name: 'Product One',
      description: 'Description of product one. It provides detailed information about the features and benefits of this product.',
      price: '$49.99',
    },
    {
      id: '2',
      name: 'Product Two',
      description: 'Description of product two. It highlights the unique aspects and advantages of this product.',
      price: '$79.99',
    },
    {
      id: '3',
      name: 'Product Three',
      description: 'Description of product three. It covers key details and selling points of this product.',
      price: '$99.99',
    }
  ];

  // Find the selected product based on the id from params
  const product = products.find(prod => prod.id === id);

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen py-8">
      {/* Product Details Section */}
      <section className="container mx-auto px-4 bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Product Details</h1>
        {product ? (
          <div>
            <h2 className="text-2xl font-semibold mb-2">Product ID: {product.id}</h2>
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-lg mb-4">{product.description}</p>
            <p className="text-xl font-bold mb-4">Price: {product.price}</p>
          </div>
        ) : (
          <p className="text-lg font-semibold text-center">Product not found.</p>
        )}
        <button
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition mt-6"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </section>
    </div>
  );
};

export { ProductDetails };
