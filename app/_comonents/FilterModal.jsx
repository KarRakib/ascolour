import React from 'react';

const FilterModal = ({ setIsOpenModal, isOpenModal, products, setFilteredProducts }) => {
  const [selectedFilters, setSelectedFilters] = React.useState({
    productType: [],
    coreRange: [],
    colour: [],
    size: [],
    sort: [] // Sorting options (e.g., "Low to High", "Featured", etc.)
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

  // Filter products based on selected filters
  const filterProducts = products.filter(product => {
    // Check if product matches selected filters
    const matchesProductType = selectedFilters.productType.length === 0 || selectedFilters.productType.includes(product.category);
    const matchesCoreRange = selectedFilters.coreRange.length === 0 || selectedFilters.coreRange.some(range => product.coreRange.includes(range));
    const matchesColour = selectedFilters.colour.length === 0 || selectedFilters.colour.some(color => product.colors.includes(color));
    const matchesSize = selectedFilters.size.length === 0 || selectedFilters.size.some(size => product.sizes.includes(size));
    return matchesProductType && matchesCoreRange && matchesColour && matchesSize;
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

  // Update filtered products in the parent component or internal state
  React.useEffect(() => {
    setFilteredProducts(sortedProducts); // This will pass the sorted filtered products to the parent
  }, [sortedProducts, setFilteredProducts]); // Re-run when sorted products change

  // Calculate total selected filters
  const totalSelected = Object.values(selectedFilters).flat().length;

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
              <button type="submit" className="rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800">
                Show 50 results
              </button>
              <button type="reset" className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:hover:text-white dark:focus:ring-gray-700">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FilterModal;