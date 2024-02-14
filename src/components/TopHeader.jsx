import React from 'react'
import { Link } from 'react-router-dom'
import phone from '../img/phone.svg'
import delivery from '../img/delivery-icon.svg'
const TopHeader = () => {
    return (
        <section className='py-2.5 bg-#313131 hidden md:block'>
            <div className='containerb flex items-center justify-between'>
                <div className='space-x-[30px] flex items-center'>
                   <Link to="/" className='text-sm leading-[16.41px] text-white' >Главная</Link>
                   <Link className='text-sm leading-[16.41px] text-white' >О нас</Link>
                   <Link className='text-sm leading-[16.41px] text-white' >Контакты</Link>
                </div>
                <div className='flex items-center space-x-[30px]'>
                     <div className='flex items-center'>
                        <img src={phone} alt="phone-number" />
                        <p className='text-white text-sm leading-[16.41px] ml-2.5'>8 (964) 89 99 119</p>
                     </div>
                     <div className='flex items-center'>
                        <img src={delivery} alt="delivery" />
                        <p className='text-white text-sm leading-[16.41px] ml-2.5'>Доставка</p>
                     </div>
                </div>
            </div>
        </section>
    )
}

export default TopHeader