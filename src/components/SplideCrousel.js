import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import Card from './Sales/Card';
import certificate from '../Media/Cartificate-Dark.png'

export default function SplideCrousel() {
    return (
        <>
            <div className='text-white -z-10 xl:hidden'>
                <Splide aria-label="My Favorite Images" options={{ perPage: '4' }} >
                    <SplideSlide>
                        <Card img={certificate} price='$2345.66' band='#124' time='12:31 PM GMT, 5.26.22' button='BUY' />
                    </SplideSlide>
                    <SplideSlide>
                        <Card img={certificate} price='$2345.66' band='#124' time='12:31 PM GMT, 5.26.22' button='BUY' />
                    </SplideSlide>
                    <SplideSlide>
                        <Card img={certificate} price='$2345.66' band='#124' time='12:31 PM GMT, 5.26.22' button='BUY' />
                    </SplideSlide>
                    <SplideSlide>
                        <Card img={certificate} price='$2345.66' band='#124' time='12:31 PM GMT, 5.26.22' button='BUY' />
                    </SplideSlide>
                    <SplideSlide>
                        <Card img={certificate} price='$2345.66' band='#124' time='12:31 PM GMT, 5.26.22' button='BUY' />
                    </SplideSlide>
                </Splide>
            </div>
            <div className='text-white hidden xl:block lg:hidden'>
                <Splide aria-label="My Favorite Images" options={{ perPage: '3' }} >
                    <SplideSlide>
                        <Card img={certificate} price='$2345.66' band='#124' time='12:31 PM GMT, 5.26.22' button='BUY' />
                    </SplideSlide>
                    <SplideSlide>
                        <Card img={certificate} price='$2345.66' band='#124' time='12:31 PM GMT, 5.26.22' button='BUY' />
                    </SplideSlide>
                    <SplideSlide>
                        <Card img={certificate} price='$2345.66' band='#124' time='12:31 PM GMT, 5.26.22' button='BUY' />
                    </SplideSlide>
                    <SplideSlide>
                        <Card img={certificate} price='$2345.66' band='#124' time='12:31 PM GMT, 5.26.22' button='BUY' />
                    </SplideSlide>
                    <SplideSlide>
                        <Card img={certificate} price='$2345.66' band='#124' time='12:31 PM GMT, 5.26.22' button='BUY' />
                    </SplideSlide>
                </Splide>
            </div>
            <div className='text-white hidden lg:block sm:hidden'>
                <Splide aria-label="My Favorite Images" options={{ perPage: '2' }} >
                    <SplideSlide>
                        <Card img={certificate} price='$2345.66' band='#124' time='12:31 PM GMT, 5.26.22' button='BUY' />
                    </SplideSlide>
                    <SplideSlide>
                        <Card img={certificate} price='$2345.66' band='#124' time='12:31 PM GMT, 5.26.22' button='BUY' />
                    </SplideSlide>
                    <SplideSlide>
                        <Card img={certificate} price='$2345.66' band='#124' time='12:31 PM GMT, 5.26.22' button='BUY' />
                    </SplideSlide>
                    <SplideSlide>
                        <Card img={certificate} price='$2345.66' band='#124' time='12:31 PM GMT, 5.26.22' button='BUY' />
                    </SplideSlide>
                    <SplideSlide>
                        <Card img={certificate} price='$2345.66' band='#124' time='12:31 PM GMT, 5.26.22' button='BUY' />
                    </SplideSlide>
                </Splide>
            </div>
            <div className='text-white hidden sm:block '>
                <Splide aria-label="My Favorite Images" options={{ perPage: '1' }} >
                    <SplideSlide>
                        <Card img={certificate} price='$2345.66' band='#124' time='12:31 PM GMT, 5.26.22' button='BUY' />
                    </SplideSlide>
                    <SplideSlide>
                        <Card img={certificate} price='$2345.66' band='#124' time='12:31 PM GMT, 5.26.22' button='BUY' />
                    </SplideSlide>
                    <SplideSlide>
                        <Card img={certificate} price='$2345.66' band='#124' time='12:31 PM GMT, 5.26.22' button='BUY' />
                    </SplideSlide>
                    <SplideSlide>
                        <Card img={certificate} price='$2345.66' band='#124' time='12:31 PM GMT, 5.26.22' button='BUY' />
                    </SplideSlide>
                    <SplideSlide>
                        <Card img={certificate} price='$2345.66' band='#124' time='12:31 PM GMT, 5.26.22' button='BUY' />
                    </SplideSlide>
                </Splide>
            </div>
        </>
    )
}
