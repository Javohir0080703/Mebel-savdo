import React, { useState } from 'react';
import { homedata } from '../data';
import { Link } from 'react-router-dom';

const News = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleHover = (item) => {
        setHoveredItem(item);
    };

    const handleHoverLeave = () => {
        setHoveredItem(null);
    };

    const today = new Date();
    const formattedDate = `${today.getDate()}.0${today.getMonth() + 1}.${today.getFullYear()}`;

    
    const today2 = new Date();
    today2.setMonth(today.getMonth() - 1);
    const formattedDate2 = `${today.getDate()}.0${today.getMonth()}.${today.getFullYear()}`;
    const sortedCars = homedata.filter((item) => formattedDate.toString() >  formattedDate2);
    const newestCars = sortedCars.slice(0, 20);

    return (
        <div className='containerb'>
            <ul className='grid grid-cols-4 relative'>
                {sortedCars.reverse().slice(0, 20 ).map((item, index) => (
                    <li
                        key={index}
                        onMouseOver={() => handleHover(item)}
                        onMouseLeave={handleHoverLeave}
                        className={`w-full max-w-[263px] bg-white px-8 pt-10 ${hoveredItem ? 'relative' : ''} pb-5 ${hoveredItem === item ? 'shadow-2xl' : 'shadow-none'}`}
                    >
                        <Link to={`/news/${item.id}`}>
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
                                        <strike className={`text-#414141 font-medium text-base leading-5 ${item.skidka ? 'block' : 'hidden'} ${hoveredItem === item ? 'mb-2' : 'mb-0'}`}>
                                            {item.narx}
                                        </strike>
                                        <p className={`text-#414141 font-medium text-base leading-5 ${item.skidka ? 'hidden' : ''} ${hoveredItem === item ? 'mb-2' : 'mb-0'}`}>
                                            {item.narx}
                                        </p>
                                    </div>
                                    <p>{item.skidka}</p>
                                </div>
                                <p className={`text-base leading-3 text-#414141 mb-3 ${hoveredItem === item ? 'block' : 'hidden'}`}>
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

                        <button className={`py-3 w-full max-w-[223px] text-center bg-#245462 text-white text-sm leading-4 ${hoveredItem === item ? 'block' : 'hidden'}`}>Добавить в корзину</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default News;
