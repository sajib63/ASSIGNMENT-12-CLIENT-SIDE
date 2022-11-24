import React from 'react';
import { Link } from 'react-router-dom';
import tesla from '../../Assets/image/tesla2.png'
import audi from '../../Assets/image/audi.jpg'
import bmw from '../../Assets/image/bmw.jpg'
import hyundai from '../../Assets/image/hyundai.jpg'
import Lamborghini from '../../Assets/image/lamborghini.jpg'
import mercedese from '../../Assets/image/mercedes.jpg'
import { FaCarSide } from 'react-icons/fa';

const AllProducts = () => {
    return (
        <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-full ">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-3xl font-semibold tracking-wider text-neutral uppercase rounded-full bg-teal-accent-400">
             <div className='flex justify-center items-center gap-1'>
             Our <span><FaCarSide className='text-primary'></FaCarSide></span> Products
             </div>
            </p>
          </div>
         
       
        </div>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
         

            <Link>
            
            <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={tesla}
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-neutral">
               Tesla
                </p>
            
               
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                 
                  </a>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                  
                  </a>
                </div>
              </div>
            </div>
          </div>
            </Link>
            <Link>
            
            <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={audi}
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-neutral">
               Audi
                </p>
            
               
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                 
                  </a>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                  
                  </a>
                </div>
              </div>
            </div>
          </div>
            </Link>
            <Link>
            
            <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={bmw}
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-neutral">
               BMW
                </p>
            
               
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                 
                  </a>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                  
                  </a>
                </div>
              </div>
            </div>
          </div>
            </Link>
            <Link>
            
            <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={hyundai}
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-neutral">
               Hyundai
                </p>
            
               
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                 
                  </a>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                  
                  </a>
                </div>
              </div>
            </div>
          </div>
            </Link>
            <Link>
            
            <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={mercedese}
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-neutral">
               Mercedes
                </p>
            
               
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                 
                  </a>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                  
                  </a>
                </div>
              </div>
            </div>
          </div>
            </Link>
            <Link>
            
            <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={Lamborghini}
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-neutral">
               Lamborghini
                </p>
            
               
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                 
                  </a>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                  
                  </a>
                </div>
              </div>
            </div>
          </div>
            </Link>



        </div>
      </div>
    );
};

export default AllProducts;