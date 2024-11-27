import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Chunhao</h1>
            <p className={styles.description}>
                As a developer with a solution-focused mindset, I am eager to obtain a position that challenges me and provides me the opportunity to reach my full potential professionally and personally utilizing my abilities and years of experience.  Now I am ready to deliver service excellence as a software or data engineer. I am committed to delivering clean, reusable, and well-organized code. 
            </p>
            <a href="mailto:lichunhao2017@gmail.com" className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
        <img 
            src={getImageUrl("hero/heroImage.png")} 
            alt="Hero image of me" 
            className={styles.heroImg}
        />
        <div className={styles.topBlur}>
            
        </div>
        <div className={styles.bottomBlur}>

        </div>
    </section>
  )
}
