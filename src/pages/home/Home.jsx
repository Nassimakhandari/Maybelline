import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);
  const [search, setsearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getWeatherData = async () => {
      const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
      const result = await response.json();
      setData(result);
    };

    getWeatherData();
  }, []);

  const filter = data.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className='flex flex-col items-center '>
        <div className="relative py-8 px-32">
          <img
            className="w-[80vw] h-[34vh] "
            src="https://www.maybelline.fr/-/media/project/loreal/brand-sites/mny/emea/fr/catalog-banners/banner.jpg?rev=bcadd06dac7d4ea59c95475091177e5b&cx=0.49&cy=0.45&cw=768&ch=250&hash=BC73D5D9034185A5008DB09E872D948D" alt="" />
          <a className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold right-[60vw]" href="">VOIR TOUT</a>
        </div>
        <div className="flex items-center relative">
          <svg className="w-6 h-6 text-gray-400 dark:text-white absolute left-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
          </svg>
          <input type="search" className="pl-10 pr-4 border-2 border-black py-2 w-[38vw]" placeholder="RECHERCHER ICI" value={search} onChange={(e) => setsearch(e.target.value)} />
        </div>
      </div>
      <div className="flex flex-wrap w-[100%] justify-center gap-14 pt-14 ">
        {filter.map(e => (
          <div className='sm:w-[20%] w-100 flex justify-center items-center cursor-pointer shadow-lg gap-6' onClick={() => navigate(`/about/${e.name}`)}>
            <div className="flex flex-col items-center gap-3">
              <div>
                <img src={e.image_link} alt="" className='w-[200px] h-[300px] object-contain' />
              </div>
              <div className="text-black py-3 px-2 flex flex-col gap-[2vh] rounded-b-md items-center text-center">
                <h1 className="font-bold">{e.name}</h1>
                <h1 className="font-bold text-pink-600">{e.price}$</h1>
                <h3 className="text-sm text-gray-500 font-bold">{e.product_type}</h3>
                <div className="flex justify-between gap-[2vw]">
                  <button className='bg-black text-white text-xs py-2 px-4 font-bold'>ACHETEZ MAINTENANT</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
