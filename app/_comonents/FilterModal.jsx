import React from 'react'

const FilterModal = ({setIsOpenModal,isOpenModal}) => {
   
    const [selectedFilters, setSelectedFilters] = React.useState({
        productType: [],
        coreRange: [],
        colour: [],
        size: [],
        sort: [] // Only one sort option can be active, but we use an array for consistency.
      });
      console.log('from Filtal Moda', selectedFilters);
      
      const handleFilterChange = (category, value) => {
        setSelectedFilters(prevFilters => {
          const newValues = prevFilters[category].includes(value)
            ? prevFilters[category].filter(item => item !== value)
            : [...prevFilters[category], value];
          return { ...prevFilters, [category]: newValues };
        });
      };
      const handleModal = () => {
        console.log('Modal');
    
        setIsOpenModal(!isOpenModal)
      }
  return (
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
                  onClick={()=> setIsOpenModal(false)}
                  type="button"
                  className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                X
                </button>
              </div>

              {/* <!-- Modal body --> */}
              <div className="px-4 md:px-5">
                <div className=' w-full'>
                  <ul className="grid grid-cols-2 gap-2 ">
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
                <button type="submit" className="rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800">
                  Show 50 results
                </button>
                <button type="reset" className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FilterModal