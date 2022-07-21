import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import Card from './Sales/Card';
import certificate from '../Media/Cartificate-Dark.png'
import { useState, useEffect } from 'react'


export default function SplideCrousel() {
    const [items, setitems] = useState([])
    useEffect(() => {
        const getData = async () => {
            try {
                const fetchApi = await fetch('http://3.138.238.97:8080/availableNFB')
                const datas = await fetchApi.json()
                console.log(datas)
                setitems(datas)
            }
            catch (error) {
                console.log(error)
            }
        }
        getData()
    },[items.length])
        return (
        <>
            <div className='text-white -z-10 xl:hidden'>
                <Splide aria-label="My Favorite Images" options={{ perPage: '4' }} >
                    {items.map((e, i) => {
                        return (
                            <SplideSlide id={i}>
                                <Card img={e.image} price={e.price} band={e.bondId} time={e.timestamp} button='BUY' />
                            </SplideSlide>
                        )
                    }).slice(0, 5)}
                </Splide>
            </div>
            <div className='text-white hidden xl:block lg:hidden'>
                <Splide aria-label="My Favorite Images" options={{ perPage: '3' }} >
                {items.map((e, i) => {
                        return (
                            <SplideSlide id={i}>
                                <Card img={e.image} price={e.price} band={e.bondId} time={e.timestamp} button='BUY' />
                            </SplideSlide>
                        )
                    }).slice(0, 5)}
                </Splide>
            </div>
            <div className='text-white hidden lg:block sm:hidden'>
                <Splide aria-label="My Favorite Images" options={{ perPage: '2' }} >
                {items.map((e, i) => {
                        return (
                            <SplideSlide id={i}>
                                <Card img={e.image} price={e.price} band={e.bondId} time={e.timestamp} button='BUY' />
                            </SplideSlide>
                        )
                    }).slice(0, 5)}
                </Splide>
            </div>
            <div className='text-white hidden sm:block '>
                <Splide aria-label="My Favorite Images" options={{ perPage: '1' }} >
                {items.map((e, i) => {
                        return (
                            <SplideSlide id={i}>
                                <Card img={e.image} price={e.price} band={e.bondId} time={e.timestamp} button='BUY' />
                            </SplideSlide>
                        )
                    }).slice(0, 5)}
                </Splide>
            </div>
        </>
    )
}
