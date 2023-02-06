"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from '../styles.module.css'
import "swiper/swiper.min.css";
import Image from 'next/image'


export default function Collapse() {

    const [getMovie, setMovie] = useState({
        selectedCollapse: 0
    });


    const collapseHandler = (e, key) => {
        e.preventDefault();
        setMovie({ ...getMovie, selectedCollapse: key })
    }

    return (
        <div className="tabsContainer">
            <div className={styles.tabs}>
                <div key={0} className={`${styles.tab}`}>
                    <Link className={`${styles.tabLink} ${getMovie.selectedCollapse === 0 ? styles.active : ''}`} onClick={(e) => collapseHandler(e, 0)} href={''}>OVERVIEW</Link>
                </div>
                <div key={1} className={`${styles.tab}`}>
                    <Link className={`${styles.tabLink} ${getMovie.selectedCollapse === 1 ? styles.active : ''}`} onClick={(e) => collapseHandler(e, 1)} href={''}>SHARE</Link>
                </div>
            </div>
            <div className="tab-contents">
                <div className={`${styles.tabContent} ${getMovie.selectedCollapse === 0 ? styles.show : ''}`}>
                    <p className={styles.tabContentDescription}>
                        {"Tony Stark creates the Ultron Program to protect the world, but when the peacekeeping program becomes hostile, The Avengers go into action to try and defeat a virtually impossible enemy together. Earth's mightiest heroes must come together once again to protect the world from global extinction."}
                    </p>
                </div>
                <div className={`${styles.tabContent} ${getMovie.selectedCollapse === 1 ? styles.show : ''}`}>
                    <p className={`${styles.tabContentDescription}`}>
                        {"Tony Stark creates the Ultron Program to protect the world, but when the peacekeeping program becomes hostile, The Avengers go into action to try and defeat a virtually impossible enemy together. Earth's mightiest heroes must come together once again to protect the world from global extinction."}
                    </p>

                </div>
            </div>
        </div>
    )
}
