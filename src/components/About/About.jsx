import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>
            About
        </h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl("about/aboutImage.png")} 
                alt="Me sitting with a laptop" 
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}> 
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/cursorIcon.png")} 
                        alt="Cursor icon" 
                    />
                    <div className={styles.aboutItemText}>
                        <h3>
                            Frontend Developer
                        </h3>
                        <p>
                            I have experience in building reponsive and optimized sites with React, JavaScript and CSS.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/serverIcon.png")} 
                        alt="Server icon" 
                    />
                    <div className={styles.aboutItemText}>
                        <h3>
                            Backend Developer
                        </h3>
                        <p>
                            I have experience developing fast and optimized backend systems and APIs with Python, Groovy and POSTMAN
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/dbIcon.png")} 
                        alt="DB icon" 
                    />
                    <div className={styles.aboutItemText}>
                        <h3>
                            Data engineer
                        </h3>
                        <p>
                            I have experience in developing and maintaining ETL process in Oracle Database and got DP-203 Microsoft Certified: Azure Data Engineer Associate
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
