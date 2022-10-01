import Link from 'next/link'
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from '../Animations/BackgroundCircles'

type Props = {}

export default function Hero1({ }: Props) {
    const [text] = useTypewriter({
        words: [
            'Hi, my name is Andre Jarboe',
            'I am a Software Engineer',
        ],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

<div className="z-20 relative">
                <h2 className='text-sm uppercase pb-2 tracking-[15px]'>Software Engineer</h2>
                <h1 className='text-5xl  lg:text-6xl font-semibold px-10'>
                    <span >{text}</span>
                    <Cursor cursorColor='#e53e3e' />
                </h1>
                <div className='pt-5'>
                    <Link href='#about'>
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href='#skills'>
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href='#projects'>
                        <button className='heroButton'>Projects</button>
                    </Link>
                    <Link href='#experience'>
                        <button className='heroButton'>Experience</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}