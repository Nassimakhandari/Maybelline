import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function About() {
  const [data, setData] = useState([]);
  const { about } = useParams();

  useEffect(() => {
    const getWeatherData = async () => {
      const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
      const result = await response.json();
      setData(result);
    };
    getWeatherData();
  }, []);
  const product = data.find((e) => e.name === about);

  return (

    <div>
      {product && (
        
        <div className='flex gap-24 pt-7'>
          <div>
            <img src={product.image_link} alt="" className='w-[50vw] h-[50vh] object-contain' />
          </div>
          <div className='w-[40%] flex flex-col gap-16'>
            <div className='flex flex-col gap-6'>
              <h1 className='text-6xl font-bold'>{product.name}</h1>
              <h3 className="text-2xl text-gray-700">{product.product_type}</h3>
            </div>
            <div className='flex flex-col gap-6'>
              <h1 className='font-bold text-2xl '>À propos</h1>
              <h2 className='text-xl'>{product.description}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
