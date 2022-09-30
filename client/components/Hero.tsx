import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({ }: Props) {
    const [text] = useTypewriter({
        words: [
            'Hi, my name is Andre Jarboe',
            'I am a Software Engineer',
        ],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div>
            <BackgroundCircles />
            <h1>
                <span>{text}</span>
                <Cursor cursorColor='#e53e3e' />
            </h1>
        </div>
    )
}