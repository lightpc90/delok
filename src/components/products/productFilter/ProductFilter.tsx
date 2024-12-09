'use client'


import { Bebas_Neue } from "next/font/google";
import React, { useState, useEffect, Dispatch, SetStateAction, FC } from 'react'

import { TbBrandToyota } from "react-icons/tb";
import { SiHonda, SiAudi, SiMercedes, SiBmw, SiFord, SiNissan } from "react-icons/si";
// constants
import { cars } from '@/data/constant'
// types
import { Car, SearchPropsType } from '@/types/types'
// enums
import { SearchPropsKeysEnum, PriceRangeEnum, UsedTypeEnum, MakesEnum } from "@/enums/enums";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400", // Bebas Neue only supports 400 weight
  display: "swap",
});

const initialState: SearchPropsType = {
  usedType: 'all',
  makes: [],
  budget: 'all',
  model: 'all',
  year: 'all',
}

type SetProductsType = {
  setProducts: Dispatch<SetStateAction<Car[]>>
}



// default component function
const ProductFilter: FC<SetProductsType> = ({ setProducts }) => {
  const [search, setSearch] = useState<SearchPropsType>(initialState)


  // function that adds new item to a list or removes the item if existing in the list
  const handleAddRemove = (item: string) => {
    if (search.makes.includes(item)) {
      setSearch({
        ...search, makes: search.makes.filter((make) => make !== item)
      })
    }
    else {
      setSearch({ ...search, makes: [...search.makes, item] })
    }
  }
    const updateSearchProps = (key: string, value: string) => {
      // if the key is makes, add value to the list of makes in the search object
      if (key === SearchPropsKeysEnum.MAKES) {
        handleAddRemove(value)
      } else {
        setSearch({
          ...search,
          [key]: value
        })
      }
    }


    const filterProducts = (carFilter: SearchPropsType) => {
      const filtered = cars.filter(car => {
        return (
          (carFilter.usedType !== 'all' && car.usedType === carFilter.usedType) &&
          (carFilter.budget !== 'all' && carFilter.budget === car.priceRange) &&
          (carFilter.makes.length !== 0 && carFilter.makes.includes(car.make))
        )
      })
      setProducts(filtered)
      console.log("filter ran...")
    }

    useEffect(() => {
      filterProducts(search)
    }, [search])



    return (
      <div className='space-y-4 w-full p-4 flex flex-col items-center overflow-hidden'>
        <h1 className={`${bebas.className} text-3xl md:text-5xl md:text-center`}>Buy a car</h1>
        <div className='flex flex-flex-wrap items-center gap-4 w-full justify-center'>
          <button
            onClick={() => { updateSearchProps(SearchPropsKeysEnum.USED_TYPE, UsedTypeEnum.ALL) }}
            className={`${search.usedType === UsedTypeEnum.ALL ? 'bg-primary text-white' : 'bg-neutral'}  p-2 rounded-md shadow-md`}>
            All
          </button>
          <button
            onClick={() => { updateSearchProps(SearchPropsKeysEnum.USED_TYPE, UsedTypeEnum.FORIEGN_USED) }}
            className={`${search.usedType === UsedTypeEnum.FORIEGN_USED ? 'bg-primary text-white' : 'bg-neutral'}  p-2 rounded-md shadow-md`}>
            Foreign Used
          </button>
          <button
            onClick={() => { updateSearchProps(SearchPropsKeysEnum.USED_TYPE, UsedTypeEnum.NIGERIAN_USED) }}
            className={`${search.usedType === UsedTypeEnum.NIGERIAN_USED ? 'bg-primary text-white' : 'bg-neutral'}  p-2 rounded-md shadow-md`}>
            Nigerian Used
          </button>
        </div>
        <div className='w-full flex flex-col items-center'>
          <h3 className='mb-2 font-bold'>Shop by Budget</h3>
          {/* budget buttons */}
          <div className='flex w-[300px] md:w-[700px] gap-3 items-center p-2 overflow-x-auto text-sm'>
            <button
              onClick={() => { updateSearchProps(SearchPropsKeysEnum.BUDGET, PriceRangeEnum.UNDER_3) }}
              className={`${search.budget === PriceRangeEnum.UNDER_3 ? 'bg-primary text-white' : "border-2 border-neutral"} h-20 px-5 py-2 rounded-lg shadow-sm flex flex-col gap-2`}>
              <span className='text-neutral'>Under</span><span className='font-bold'>N3M</span>
            </button>
            <button
              onClick={() => { updateSearchProps(SearchPropsKeysEnum.BUDGET, PriceRangeEnum.BETWEEN_3_5) }}
              className={`${search.budget === PriceRangeEnum.BETWEEN_3_5 ? 'bg-primary text-white' : "border-2 border-neutral"} h-20 px-5 py-2 rounded-lg shadow-sm flex flex-col gap-2`}>
              <span>From</span><span className='font-bold'>N3M-5M</span>
            </button>
            <button
              onClick={() => { updateSearchProps(SearchPropsKeysEnum.BUDGET, PriceRangeEnum.BETWEEN_5_7) }}
              className={`${search.budget === PriceRangeEnum.BETWEEN_5_7 ? 'bg-primary text-white' : "border-2 border-neutral"} h-20 px-5 py-2 rounded-lg shadow-sm flex flex-col gap-2`}>
              <span>From</span><span className='font-bold'>N5M-7M</span>
            </button>
            <button
              onClick={() => { updateSearchProps(SearchPropsKeysEnum.BUDGET, PriceRangeEnum.BETWEEN_7_10) }}
              className={`${search.budget === PriceRangeEnum.BETWEEN_7_10 ? 'bg-primary text-white' : "border-2 border-neutral"} h-20 px-5 py-2 rounded-lg shadow-sm flex flex-col gap-2`}>
              <span>From</span><span className='font-bold'>7M-N10M</span></button>
            <button onClick={() => { updateSearchProps(SearchPropsKeysEnum.BUDGET, PriceRangeEnum.BETWEEN_10_15) }}
              className={`${search.budget === PriceRangeEnum.BETWEEN_10_15 ? 'bg-primary text-white' : "border-2 border-neutral"} h-20 px-5 py-2 rounded-lg shadow-sm flex flex-col gap-2`}>
              <span>From</span><span className='font-bold'>N10M-N15M</span>
            </button>
            <button onClick={() => { updateSearchProps(SearchPropsKeysEnum.BUDGET, PriceRangeEnum.ABOVE_15) }}
              className={`${search.budget === PriceRangeEnum.ABOVE_15 ? 'bg-primary text-white' : "border-2 border-neutral"} h-20 px-5 py-2 rounded-lg shadow-sm flex flex-col gap-2`}>
              <span>Above</span><span className='font-bold'>N15M</span>
            </button>
          </div>
        </div>
        <div className='w-full flex flex-col items-center'>
          <h3 className='mb-2 font-bold'>Shop by Make</h3>
          <div className='flex flex-wrap w-[300px] md:w-[700px] gap-3 items-center justify-center '>
            <button
              onClick={() => { updateSearchProps(SearchPropsKeysEnum.MAKES, MakesEnum.TOYOTA) }}
              className={`${search.makes.includes(MakesEnum.TOYOTA) ? 'bg-primary' : 'bg-neutral'} h-14 w-14 text-white items-center justify-center rounded-full p-2 flex`}>
              <TbBrandToyota size={27} />
            </button>
            <button
              onClick={() => { updateSearchProps(SearchPropsKeysEnum.MAKES, MakesEnum.HONDA) }}
              className={`${search.makes.includes(MakesEnum.HONDA) ? 'bg-primary' : 'bg-neutral'} h-14 w-14 text-white items-center justify-center rounded-full p-2 flex`}>
              <SiHonda size={27} />
            </button>
            <button
              onClick={() => { updateSearchProps(SearchPropsKeysEnum.MAKES, MakesEnum.AUDI) }}
              className={`${search.makes.includes(MakesEnum.AUDI) ? 'bg-primary' : 'bg-neutral'} h-14 w-14 text-white items-center justify-center rounded-full p-2 flex`}>
              <SiAudi size={27} />
            </button>
            <button
              onClick={() => { updateSearchProps(SearchPropsKeysEnum.MAKES, MakesEnum.BENZ) }}
              className={`${search.makes.includes(MakesEnum.BENZ) ? 'bg-primary' : 'bg-neutral'} h-14 w-14 text-white items-center justify-center rounded-full p-2 flex`}>
              <SiMercedes size={27} />
            </button>
            <button
              onClick={() => { updateSearchProps(SearchPropsKeysEnum.MAKES, MakesEnum.BMW) }}
              className={`${search.makes.includes(MakesEnum.BMW) ? 'bg-primary' : 'bg-neutral'} h-14 w-14 text-white items-center justify-center rounded-full p-2 flex`}>
              <SiBmw size={27} />
            </button>
            <button
              onClick={() => { updateSearchProps(SearchPropsKeysEnum.MAKES, MakesEnum.FORD) }}
              className={`${search.makes.includes(MakesEnum.FORD) ? 'bg-primary' : 'bg-neutral'} h-14 w-14 text-white items-center justify-center rounded-full p-2 flex`}>
              <SiFord size={27} />
            </button>
            <button
              onClick={() => { updateSearchProps(SearchPropsKeysEnum.MAKES, MakesEnum.NISSAN) }}
              className={`${search.makes.includes(MakesEnum.NISSAN) ? 'bg-primary' : 'bg-neutral'} h-14 w-14 text-white items-center justify-center rounded-full p-2 flex`}>
              <SiNissan size={27} />
            </button>
          </div>
        </div>
      </div>
    )
  }

  export default ProductFilter;