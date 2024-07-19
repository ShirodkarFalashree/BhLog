import React from 'react';
import { Container } from '../components';
import { home1, home2 } from '../assets';

function Home() {
    return (
        <div className='w-full py-8 '>
            <Container>
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-8 md:space-y-0 md:space-x-8">
                    <div className='md:w-1/3'>
                        <img src={home1} alt="Welcome" className='h-[350px] w-full object-cover rounded-lg transform transition duration-500 hover:scale-105' />
                    </div>
                    <div className='md:w-1/3 text-center md:text-left'>
                        <h1 className='text-5xl font-extrabold mb-4 text-heading font-sans'>Welcome to BhLog!</h1>
                        <p className='text-lg mb-8 text-accent1 font-bold'>Your go-to place for the latest blogs and articles on various topics. Dive in and explore!</p>
                        <p className='text-normalText font-poppins'>Welcome to bhLog, where thoughts meet creativity and ideas find their voice. bhLog is more than just a blog; it's a vibrant community where we explore diverse topics, share insights, and inspire each other to think differently. Whether you're here for in-depth articles, personal stories, or expert opinions, bhLog promises a rich and engaging experience. Thank you for being part of our journey, and we hope you find each visit thought-provoking and enjoyable.</p>
                    </div>
                    <div className='md:w-1/3'>
                        <img src={home2} alt="Community" className='h-[350px] w-full object-cover rounded-lg transform transition duration-500 hover:scale-105' />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Home;
