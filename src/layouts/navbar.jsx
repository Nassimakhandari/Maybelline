import React from 'react';

const Navbar = () => {
    return (
        <>


            <nav class="bg-black border-gray-200 dark:bg-gray-900 ">
                <div class="max-w-screen-xl flex flex-col items-center mx-auto py-8 gap-5">
                    <div className=''>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRBKtHO3bjb2R2BkNluToEiVZQBgSyIz_eNw&s" class=" w-44" alt="Maybelline Logo" />
                    </div>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 " aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="" class="block py-2 px-3 text-gray-300 bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500 md:hover:text-blue-700" aria-current="page">STUDIO BEAUTE VIRTUELLE</a>
                            </li>
                            <li>
                                <a href="" class="block py-2 px-3 text-gray-300 bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500 md:hover:text-blue-700" aria-current="page">VOIR TOUT</a>
                            </li>
                            <li>
                                <a href="" class="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">YEUX</a>
                            </li>
                            <li>
                                <a href="" class="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">TEINT</a>
                            </li>
                            <li>
                                <a href="" class="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">LEVRES</a>
                            </li>
                            <li>
                                <a href="" class="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">VERNIS SOINS ONGLES</a>
                            </li>
                            <li>
                                <a href="" class="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">TIPS & TRENDS</a>
                            </li>
                            <li>
                                <a href="" class="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">ENGAGEMENTS</a>
                            </li>
                            <li>
                                <a href="" class="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">GREEN EDITION</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> 

            
        </>
    );
};

export default Navbar;