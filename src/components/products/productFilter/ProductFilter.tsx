'use client'


import { Bebas_Neue } from "next/font/google";
import React, { useState, useEffect } from 'react'

import { TbBrandToyota } from "react-icons/tb";
import { SiHonda, SiAudi, SiMercedes, SiBmw, SiFord, SiNissan } from "react-icons/si";
// import { cars } from '@/data/constant'

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400", // Bebas Neue only supports 400 weight
  display: "swap",
});

type InitialState = {
  usedType: 'all' | "Nigerian used" | "Foreign used" | "New";
  makes: string[]; // This allows an array of strings of any length, including an empty array.
  budget: string;
  model: 'all';
  year: 'all';
};

const initialState: InitialState = {
  usedType: 'all',
  makes: [],
  budget: 'all',
  model: 'all',
  year: 'all',
}

const ProductFilter = () => {
  // // to store all the filters selected
  // const [searchProps, setSearchProps] = useState(initialState)
  // // to store the key of the latest filter added
  // const [latestFilterKey, setLatestFilterKey] = useState('')
  // // current filterProps
  // const [previousFilter, setPreviousFilter] = useState(initialState)
  // const [products, setProducts] = useState([])
  // const [filteredProducts, setFilteredProducts] = useState([])

  // const updateSearch = (filterObject: any, key: string) => {
  //   // console.log(searchProps)
  //   setPreviousFilter(searchProps)
  //   setSearchProps({ ...searchProps, ...filterObject })
  //   setLatestFilterKey(key)
  // }

  // const filteredProductsHandler = () => {
  //   const { usedType, makes, budget, model, year } = searchProps
  //   let isArray;
  //   if(Array.isArray(previousFilter[latestFilterKey])){
  //     isArray = true
  //   } else {
  //     isArray = false
  //   }
  //   const keyValue = previousFilter[latestFilterKey]
  //   console.log("keyValue", keyValue)
  //   //  if the key has not been searched before
  //   if (keyValue === 'all' || (isArray && keyValue.length === 0)) {
  //     if (usedType === 'all') {
  //       setFilteredProducts(cars)
  //     }
  //   }
  // }



  return (
    <div className='space-y-4 w-full p-4 flex flex-col items-center overflow-hidden'>
      <h1 className={`${bebas.className} text-3xl md:text-5xl md:text-center`}>Buy a car</h1>
      <div className='flex flex-flex-wrap items-center gap-4 w-full justify-center'>
        <button className='bg-primary text-white p-2 rounded-md shadow-md'>All</button>
        <button className='bg-neutral p-2 rounded-md shadow-md'>Foreign Used</button>
        <button className='bg-neutral p-2 rounded-md shadow-md'>Nigerian Used</button>
      </div>
      <div className='w-full flex flex-col items-center'>
        <h3 className='mb-2 font-bold'>Shop by Budget</h3>
        {/* budget buttons */}
        <div className='flex w-[300px] md:w-[700px] gap-3 items-center p-2 overflow-x-auto text-sm'>
          <button className='bg-primary text-white h-20 px-5 py-2 rounded-lg shadow-sm flex flex-col gap-2'><span className='text-neutral'>Under</span><span className='font-bold'>N3M</span></button>
          <button className='border-2 border-neutral h-20 px-5 py-2 rounded-lg shadow-sm flex flex-col gap-2'><span>From</span><span className='font-bold'>N3M-5M</span></button>
          <button className='border-2 border-neutral h-20 px-5 py-2 rounded-lg shadow-sm flex flex-col gap-2'><span>From</span><span className='font-bold'>N5M-7M</span></button>
          <button className='border-2 border-neutral h-20 px-5 py-2 rounded-lg shadow-sm flex flex-col gap-2'><span>From</span><span className='font-bold'>7M-N10M</span></button>
          <button className='border-2 border-neutral h-20 px-5 py-2 rounded-lg shadow-sm flex flex-col gap-2'><span>From</span><span className='font-bold'>N10M-N15M</span></button>
          <button className='border-2 border-neutral h-20 px-5 py-2 rounded-lg shadow-sm flex flex-col gap-2'><span>Above</span><span className='font-bold'>N15M</span></button>
        </div>
      </div>
      <div className='w-full flex flex-col items-center'>
        <h3 className='mb-2 font-bold'>Shop by Make</h3>
        <div className='flex flex-wrap w-[300px] md:w-[700px] gap-3 items-center justify-center '>
          <button className='h-14 w-14 bg-neutral text-white items-center justify-center rounded-full p-2 flex'>
            <TbBrandToyota size={27} />
          </button>
          <button className='h-14 w-14 bg-primary text-white items-center justify-center rounded-full p-2 flex'>
            <SiHonda size={27} />
          </button>
          <button className='h-14 w-14 bg-neutral text-white items-center justify-center rounded-full p-2 flex'>
            <SiAudi size={27} />
          </button>
          <button className='h-14 w-14 bg-neutral text-white items-center justify-center rounded-full p-2 flex'>
            <SiMercedes size={27} />
          </button>
          <button className='h-14 w-14 bg-neutral text-white items-center justify-center rounded-full p-2 flex'>
            <SiBmw size={27} />
          </button>
          <button className='h-14 w-14 bg-neutral text-white items-center justify-center rounded-full p-2 flex'>
            <SiFord size={27} />
          </button>
          <button className='h-14 w-14 bg-primary text-white items-center justify-center rounded-full p-2 flex'>
            <SiNissan size={27} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductFilter;