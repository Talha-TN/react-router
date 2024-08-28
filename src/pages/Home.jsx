// import React from 'react'
// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export {Home}
////////////////////////////////////////
import React from 'react';

const Home = () => {
  // Sample data
  const data = [
    {
      id: 1,
      title: 'Feature One',
      description: 'Detail about feature one that explains its benefits.'
    },
    {
      id: 2,
      title: 'Feature Two',
      description: 'Detail about feature two that explains its benefits.'
    },
    {
      id: 3,
      title: 'Feature Three',
      description: 'Detail about feature three that explains its benefits.'
    }
  ];

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-xl mb-8">We provide the best services for you.</p>
        <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-200">
          Learn More
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.map(item => (
              <div key={item.id} className="bg-white p-8 shadow-lg rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export { Home };
