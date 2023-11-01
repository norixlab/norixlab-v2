'use client'
import React from 'react';
import Button from '../../button/Button';

import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../../../utils/motion';
import styles from './about.module.css'
import Image from 'next/image';
const About = () => {
    return (
        	<section className={styles.about} id="about">
		<div className={styles.container}>
			<motion.div initial='hidden' whileInView='visible' className={styles.inner}>
				 <motion.div variants={slideInFromLeft(0.3,1.5)}> 
				
                  <Image
                        className={styles.img}
                        src="/assets/my-about.png"
                        alt="My photo"
                        width={500}
                        height={600}
                        quality={75}
                        priority={false}
                    />
				 </motion.div> 
				<motion.div variants={slideInFromRight(0.3, 1.5)} className={styles.content}>
					<motion.h2 variants={slideInFromTop(0.3,1.5)} className={styles.title}>About <span>Me</span></motion.h2>
					<h3>Frontend Developer!</h3>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem est doloribus autem rem
						officiis
						aperiam dolores adipisci quos vel perferendis ipsum nisi atque voluptatibus hic voluptatem
						repellat
						soluta, ducimus molestias totam voluptate. Quae similique ut ratione est, hic dolorum sunt,
						officiis
						consequatur quod architecto consequuntur beatae!</p>
					{/* <a className="btn about__btn" href="#">Read More</a> */}
                    <Button title='Last Projects' url='#projects' />
				</motion.div>
			</motion.div>
		</div>
	</section>
    );
};

export default About;
