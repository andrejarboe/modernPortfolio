import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

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
        <div>Hero</div>
    )
}