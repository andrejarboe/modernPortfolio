import { motion } from 'framer-motion';
import React from 'react'

type Props = {
    // skill: Skill;
    directionLeft?: boolean;
};

export default function Skill({ skill, directionLeft }: Props) {
    return (
        <div className=''>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_96102ac6497377cd53da621075fe828e/sanity.png"
                className="rounded-full border border-secondary object-cover h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32"
            />
        </div>
    )
}