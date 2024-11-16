import React from 'react'
import FilterModal from './FilterModal';
import Link from 'next/link';

const Products = ({ products,filtereds }) => {
  const [mainImageIndex, setMainImageIndex] = React.useState(0);
  const mainCategory = products[0]?.mainCate;
  const handleThumbnailClick = (index) => {
    setMainImageIndex(index);
  };

  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        {/* <!-- Heading & Filters --> */}
        <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
          <div>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                  <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white">
                    <svg className="me-2.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                    </svg>
                    <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white md:ms-2">Products</a>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                    </svg>
                    <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">{mainCategory}</span>
                  </div>
                </li>
              </ol>
            </nav>
            <h2 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">{mainCategory}</h2>
          </div>
    
        </div>
        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
          {
            products?.map((product, i) => (
              <div key={i} className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
                {/* Product Image Slider */}
                <Link href={`/view-more/${product?._id}`} className="relative">
                  {/* Main Image */}
                  {product?.images?.length > 0 ? (
                    <img
                      src={product.images[mainImageIndex]}
                      alt={`Product Image ${mainImageIndex + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  ) : (
                    <div className="w-full h-64 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                      <span className="text-gray-500 dark:text-gray-400">No Image</span>
                    </div>
                  )}
                </Link>

                <div className="p-4">
                  {/* Product Title */}
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {product?.title || "Product Title"}
                  </h2>
                  {/* Product Price */}
                  <p className="text-gray-600 dark:text-gray-400">
                    ${product?.price || "0.00"}
                  </p>

                  {/* Mini Image Slider */}
                  {product?.images?.length > 0 && (
                    <div className="flex space-x-2 mt-4 overflow-x-auto">
                      {product.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          onClick={() => handleThumbnailClick(index)}
                          className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${mainImageIndex === index
                            ? "border-blue-500"
                            : "border-transparent"
                            }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))
          }
        </div>
        <div className="w-full text-center">
          <button type="button" className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Show more</button>
        </div>
      </div>
    </section>
  )
}

export default Products