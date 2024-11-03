'use client'
import Image from 'next/image';
import React from 'react'

const HotItems = () => {
    const [nav, setNav] = React.useState('New');
  const [datas, setDatas] = React.useState([]);
  const [filterData, setFilterData] = React.useState([]);

  const handleClickNave = (value) => {
    setNav(value);
    // Filter data based on the new `nav` value
    const filtered = datas.filter(data => data.category === value);
    setFilterData(filtered);
  };

  React.useEffect(() => {
    fetch('/hotitems.json')
      .then(res => res.json())
      .then(data => {
        setDatas(data);
        // Initialize `filterData` with the first filter based on the default `nav`
        setFilterData(data.filter(item => item.category === 'New'));
      });
  }, []);


    return (
        <div>
            {/* nav  */}
            <nav>

                <div className='flex p-5 bg-[#FAFAFA]'>
                    <p className='w-1/3 text-2xl font-bold hidden md:block'> {nav} </p>
                    <ul className="flex justify-center md:gap-4 gap-2 md:pl-20 text-black font-extrabold">
                        {['New', 'Workwear', 'Activewear', 'Womenswear'].map((item, index) => (
                            <li
                                key={index}
                                className="group hover:-translate-y-2 text-sky-600 transition duration-300 cursor-pointer"
                                onClick={() => handleClickNave(item)} // Log or use the value here
                            >
                                {item}
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            {/* Card  */}
            <div className='grid grid-cols-4 gap-3'>
                {
                    filterData?.map((data, i) => (
                        <div className='relative border overflow-hidden' key={i}>
                            <Image className='md:w-72 object-button md:h-60 w-44 scale-110' src={data.image} width={230} height={150} alt='kar' />
                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
} 

export default HotItems