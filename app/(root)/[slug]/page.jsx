'use client'
import React from 'react'
import { FaSortAmountDownAlt, FaSortAmountUp } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import Products from '@/app/_comonents/Products';
import FilterModal from '@/app/_comonents/FilterModal';

const Page = () => {
    const router = usePathname()
    const slug = router.split('/')[1]; // Get slug from the URL
    const [products, setProducts] = React.useState([]);
    const [filtered, setFiltered] = React.useState([])
    const [isOpenModal, setIsOpenModal] = React.useState(false)
    const handleModal = () => {
        setIsOpenModal(!isOpenModal)
      }
    const [selectedFilters, setSelectedFilters] = React.useState({
        productType: [],
        coreRange: [],
        colour: [],
        size: [],
        sort: [] // Sorting options (e.g., "Low to High", "Featured", etc.)
    });
    const [sortIsOpen, setSortIsOpen] = React.useState(false);
    let filtereds;
    // Toggle Sort dropdown
    const handleSort = () => setSortIsOpen(prev => !prev);

    // Handle filter changes
    const handleFilterChange = (category, value) => {
        setSelectedFilters(prevFilters => {
            const newValues = prevFilters[category].includes(value)
                ? prevFilters[category].filter(item => item !== value)
                : [...prevFilters[category], value];

            console.log('Updated Filters', category, newValues); // Log the updated filters
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
    // Fetch products on initial load
    React.useEffect(() => {
        fetch('/asproducts.json')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);;
    // Filter products based on selected filters
    const filterProducts = products.filter(product => {
        const matchesSlug = product.mainCate.toLowerCase() === slug.toLowerCase();
        // Check if product matches selected filters
        const matchesProductType = selectedFilters.productType.length === 0 || selectedFilters.productType.includes(product.category);
        const matchesCoreRange = selectedFilters.coreRange.length === 0 || selectedFilters.coreRange.some(range => product.coreRange.includes(range));
        const matchesColour = selectedFilters.colour.length === 0 || selectedFilters.colour.some(color => product.colors.includes(color));
        const matchesSize = selectedFilters.size.length === 0 || selectedFilters.size.some(size => product.sizes.includes(size));
        return matchesSlug && matchesProductType && matchesCoreRange && matchesColour && matchesSize;
    });

    // Sort products based on the selected sort option
    const sortedProducts = filterProducts.sort((a, b) => {
        const sortOption = selectedFilters.sort[0];
        if (!sortOption) return 0; // No sorting if no sort option is selected
        switch (sortOption) {
            case 'Low to High':
                return a.price - b.price;
            case 'High to Low':
                return b.price - a.price;
            case 'Newest':
                return new Date(b.releaseDate) - new Date(a.releaseDate); // Assuming `releaseDate` is available
            case 'Featured':
                return a.featured ? -1 : 1; // Assume `featured` is a boolean flag
            case 'Best Selling':
                return b.sales - a.sales; // Assuming `sales` is available
            default:
                return 0;
        }
    });
    console.log('filter', sortedProducts, selectedFilters);
    filtereds = filterProducts
    // Calculate total selected filters
    const totalSelected = Object.values(selectedFilters).flat().length;

    return (
        <div>
            {/* Selected filters and sorting */}
            <div className="pl-2">
                <div className=" flex justify-between px-5 mt-3">
                    <p>Selected filter ({totalSelected})</p>
                </div>
                <div className="px-5 pb-2 gap-2 ml flex justify-between items-stretch">
                    <div className="hidden md:flex gap-2 items-center">
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
                    <button
                            onClick={handleModal}
                            type="button"
                            className="flex w-1/2 items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
                        >
                            <svg className="-ms-0.5 me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z" />
                            </svg>
                            Filters
                            <svg className="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                            </svg>
                        </button>
                    {/* Sort By Section */}
                    <div className="relative flex items-center gap-1 pr-12">
                        {isOpenModal && (
                            <div className='w-'>
                            <div
                              id="filterModal"
                              tabIndex="-1"
                              aria-hidden="true"
                              className="fixed inset-0 z-50 flex items-center justify-center h-modal w-full overflow-y-auto p-1 bg-black bg-opacity-50"
                            >
                              <div className="relative w-full max-w-xl">
                                <div className="relative rounded-lg bg-white shadow dark:bg-gray-800">
                                  {/* Modal header */}
                                  <div className="flex items-start justify-between rounded-t p-2 md:p-2">
                                    <h3 className="text-lg font-normal text-gray-500 dark:text-gray-400">Filters</h3>
                                    <button
                                      onClick={() => setIsOpenModal(false)}
                                      type="button"
                                      className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                      X
                                    </button>
                                  </div>
                      
                                  {/* Modal body */}
                                  <div className="px-4 md:px-5">
                                    <div className='w-full'>
                                      <ul className="grid grid-cols-2 gap-2">
                                        {/* Product Type */}
                                        <li>
                                          <div className="flex flex-col gap-2">
                                            <span className="font-bold">Product Type</span>
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
                                  </div>
                      
                                  {/* Modal footer */}
                                  <div className="flex items-center space-x-4 rounded-b p-4 dark:border-gray-600 md:p-5">
                                    <button onClick={()=>setIsOpenModal(false)} type="submit" className="rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-gray-900 border-spacing-1">
                                      OK
                                    </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                          </div>
                        )}
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
            </div>

            <hr className="mt-3" />

            {/* Grid Layout for Filters and Products */}
            <div className="grid md:grid-cols-[20%,80%] gap-4">
                {/* Side nav - Filters */}
                <div className=' hidden md:block w-full'>
                    <ul className="flex flex-col gap-2 p-5">
                        {/* Product Type Filter */}
                        <li>
                            <div className="flex flex-col gap-2">
                                <span className="font-bold text-xl">Product Type</span>
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

                        {/* Core Range Filter */}
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

                        {/* Colour Filter */}
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

                        {/* Size Filter */}
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
                <div className="w-full">
                    <Products products={filtereds} filtereds={filtereds} />
                </div>
            </div>
        </div>
    );
};

export default Page;
