'use client'
import React from 'react'
import { FaSortAmountDownAlt } from "react-icons/fa";
import { FaSortAmountUp } from "react-icons/fa";
import Products from '../_comonents/products';

const page = () => {
    const [products, setproducts] = React.useState([])
    const [selectedFilters, setSelectedFilters] = React.useState({
        productType: [],
        coreRange: [],
        colour: [],
        size: [],
        sort: [] // Only one sort option can be active, but we use an array for consistency.
    });
    const [sortIsOpen, setSortIsOpen] = React.useState(false);
    
    // Toggle Sort dropdown
    const handleSort = () => setSortIsOpen(prev => !prev);
    
    // Handle filter changes
    const handleFilterChange = (category, value) => {
        setSelectedFilters(prevFilters => {
            const newValues = prevFilters[category].includes(value)
                ? prevFilters[category].filter(item => item !== value)
                : [...prevFilters[category], value];
            return { ...prevFilters, [category]: newValues };
        });
    };
    
    // Handle sort selection
    const handleSortSelection = (sortOption) => {
        setSelectedFilters(prevFilters => ({ ...prevFilters, sort: [sortOption] }));
        setSortIsOpen(false); // Close dropdown after selection
    };
    
    // Clear all filters
    const clearFilters = () => {
        setSelectedFilters({
            productType: [],
            coreRange: [],
            colour: [],
            size: [],
            sort: []
        });
    };
    
    // Calculate total selected filters
    const totalSelected = Object.values(selectedFilters).flat().length;
    console.log(selectedFilters);
React.useEffect(() => {
 fetch('/asproducts.json')
  .then(res => res.json())
  .then(data => setproducts(data))

  
}, [])


    
    return (
        <div className="pl-2">
            <div className="flex justify-between px-5 mt-3">
                <p>Selected filter ({totalSelected})</p>
            </div>
            <div className="px-5 pb-2 gap-2 ml flex justify-between items-stretch">
        <div className="flex gap-2 items-center">
            {/* Selected Filters */}
            {Object.entries(selectedFilters)
                .flatMap(([category, values]) =>
                    values.map(value => (
                        <button
                            key={`${category}-${value}`}
                            className="bg-[#EFEFEF] border px-2 rounded flex items-center gap-1"
                            onClick={() => handleFilterChange(category, value)}
                        >
                            {value} <span className="ml-1 text-gray-500">✕</span>
                        </button>
                    ))
                )
            }

            {/* Clear Filters Button */}
            {totalSelected > 0 &&
                <button
                    onClick={clearFilters}
                    className="ml-3 text-blue-500 underline"
                >
                    Clear Filter
                </button>
            }
        </div>

        {/* Sort By Section */}
        <div className="relative flex items-center gap-1 pr-12">
            {/* Sort Icon and Toggle Button */}
            {sortIsOpen ? <FaSortAmountDownAlt /> : <FaSortAmountUp />}
            <button onClick={handleSort} className="font-medium">Sort by:</button>

            {/* Sort Options Dropdown */}
            {sortIsOpen && (
                <div className="absolute top-8 right-0 bg-white shadow-md rounded p-2 w-40">
                    <ul className="space-y-1 text-sm">
                        <li className="cursor-pointer hover:text-blue-500" onClick={() => handleSortSelection('Featured')}>Featured</li>
                        <li className="cursor-pointer hover:text-blue-500" onClick={() => handleSortSelection('Newest')}>Newest</li>
                        <li className="cursor-pointer hover:text-blue-500" onClick={() => handleSortSelection('Low to High')}>Price: Low to High</li>
                        <li className="cursor-pointer hover:text-blue-500" onClick={() => handleSortSelection('High to Low')}>Price: High to Low</li>
                        <li className="cursor-pointer hover:text-blue-500" onClick={() => handleSortSelection('Best Selling')}>Best Selling</li>
                    </ul>
                </div>
            )}
        </div>
    </div>


            <hr className="mt-" />
            <div className="grid md:grid-cols-[20%,80%] gap-4">
                {/* Side nav */}
                <div className=' hidden md:block w-full'>
                    <ul className="flex flex-col gap-2  p-5">
                        {/* Product Type */}
                        <li>
                            <div className="flex flex-col gap-2">
                                <span className="font-bold text-xl ">Product Type</span>
                                {['Headwear', 'T-Shirts', 'Hoodies', 'Jackets', 'Short', 'Longeleeves', 'Socks'].map((type) => (
                                    <label key={type} className="flex gap-2 text-sm">
                                        <input
                                            type="checkbox"
                                            checked={selectedFilters.productType.includes(type)}
                                            onChange={() => handleFilterChange('productType', type)}
                                        />
                                        {type}
                                    </label>
                                ))}
                            </div>
                        </li>

                        {/* Core Range */}
                        <li>
                            <div className="flex flex-col gap-2">
                                <span className="font-bold">Core Range</span>
                                {['Staple', 'Heavy', 'Relax', 'Class', 'Classic', 'Finn', 'Icon'].map((range) => (
                                    <label key={range} className="flex gap-2 text-sm">
                                        <input
                                            type="checkbox"
                                            checked={selectedFilters.coreRange.includes(range)}
                                            onChange={() => handleFilterChange('coreRange', range)}
                                        />
                                        {range}
                                    </label>
                                ))}
                            </div>
                        </li>

                        {/* Colour */}
                        <li>
                            <div className="flex flex-col gap-2">
                                <span className="font-bold">Colour</span>
                                {['Black', 'White', 'Blue', 'Brown', 'Green', 'Grey', 'Tan'].map((colour) => (
                                    <label key={colour} className="flex gap-2 text-sm">
                                        <input
                                            type="checkbox"
                                            checked={selectedFilters.colour.includes(colour)}
                                            onChange={() => handleFilterChange('colour', colour)}
                                        />
                                        {colour}
                                    </label>
                                ))}
                            </div>
                        </li>

                        {/* Size */}
                        <li>
                            <div className="flex flex-col gap-2">
                                <span className="font-bold">Size</span>
                                {['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'].map((size) => (
                                    <label key={size} className="flex gap-2 text-sm">
                                        <input
                                            type="checkbox"
                                            checked={selectedFilters.size.includes(size)}
                                            onChange={() => handleFilterChange('size', size)}
                                        />
                                        {size}
                                    </label>
                                ))}
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Products content */}
                <div className=' w-full'>
                    <Products products={products}/>
                </div>
            </div>
        </div>
    )
}

export default page