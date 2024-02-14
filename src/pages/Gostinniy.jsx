import React, { useState } from 'react'
import { homedata } from '../data';
import { Link } from 'react-router-dom';

const Gostinniy = () => {
   
    
      const filteredData = homedata.filter(item => item.tip === 'Гостинные');
    
      const [hoveredItem, setHoveredItem] = useState(null);
      const handleHover = (item) => {
          setHoveredItem(item);
      };
  
      const handleHoverLeave = () => {
          setHoveredItem(null);
      };
     

  return (
    <section className='py-10'>
        <div className='containerb'>
           <h1 className='text-center text-5xl font-semibold mb-16'>Гостинные</h1>
           <ul>
           <ul className='grid grid-cols-4 relative'>
                    {filteredData.map((item) => (
                        <li
                        key={item.id}
                            onMouseOver={() => handleHover(item)}
                            onMouseLeave={handleHoverLeave}
                            className={`w-full max-w-[263px] bg-white px-8 pt-10 ${ hoveredItem ? 'relative' : '' } pb-5 ${hoveredItem === item ? 'shadow-2xl  ' : 'shadow-none '}`}
                        >
                            <Link >
                                <img
                                    className='w-full max-w-[200px] h-full max-h-[150px] mb-14 mx-auto'
                                    src={item.img}
                                    alt={item.name}
                                />
                                <div>
                                    <h4 className='font-medium text-base leading-5 mb-1.5 text-#414141'>
                                        {item.name}
                                    </h4>
                                    <p className='text-sm leading-3 text-#414141 mb-2.5'>
                                        {item.kakoy}
                                    </p>
                                    <div className='flex items-center space-x-3'>
                                   <div>
                                    <strike className={`text-#414141 font-medium text-base leading-5   ${ item.skidka.length > 0 ? 'block' : 'hidden' }  ${hoveredItem === item ? 'mb-2' : 'mb-0'}`}>
                                        {item.narx}
                                    </strike>
                                    <p className={`text-#414141 font-medium text-base leading-5  ${ item.skidka.length > 0 ? 'hidden' : '' }  ${hoveredItem === item ? 'mb-2' : 'mb-0'}`}>
                                        {item.narx}
                                    </p>
                                    </div>
                                    <p>{item.skidka}</p>
                                   </div>
                                    <p
                                        className={`text-base leading-3 text-#414141 mb-3 ${hoveredItem === item ? 'block ' : 'hidden '}`}
                                    >
                                        Размеры
                                    </p>
                                    <div className={`flex items-center justify-between mb-4 ${hoveredItem === item ? 'block' : 'hidden'}`}>
                                        <p className='text-xs leading-[10px] text-#C4C4C4 block'>
                                            ШИРИНА
                                            <span className='mt-2 block'>{item.shirina}</span>
                                        </p>
                                        <p className='text-xs leading-3 text-#414141'>x</p>
                                        <p className='text-xs leading-[10px] text-#C4C4C4 block'>
                                            ГЛУБИНА
                                            <span className='mt-2 block'>{item.glubina}</span>
                                        </p>
                                        <p className='text-xs leading-3 text-#414141'>x</p>
                                        <p className='text-xs leading-[10px] text-#C4C4C4 block'>
                                            ВЫСОТА
                                            <span className='mt-2 block'>{item.visota}</span>
                                        </p>
                                    </div>
                                </div>
                            </Link>

                            <button className={`py-3  w-full max-w-[223px] text-center bg-#245462 text-white text-sm leading-4 ${hoveredItem === item ? 'block' : 'hidden'}`}>Добавить в корзину</button>
                        </li>
                    ))}
                </ul>
           </ul>
        </div>
    </section>
  )
}

export default Gostinniy