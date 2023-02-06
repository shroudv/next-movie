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
                    <div className={styles.group}>
                        <div className={styles.groupHead}>
                            <h4 className={styles.groupHeadTitle}>Gallery</h4>
                            <Link className={styles.groupHeadLink} href={''}>View All</Link>
                        </div>
                        <div className={`${styles.groupBody}`}>
                            <div className="gal22leries">
                                <Swiper spaceBetween={1} slidesPerView={5}>
                                    <SwiperSlide key={1}>
                                        <div className={styles.galleryContainer}>
                                            <Image className={styles.galleryImage} src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/image1.jpg" unoptimized width={100} height={100} alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide key={2}>
                                        <div className={styles.galleryContainer}>
                                            <Image className={styles.galleryImage} src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/image1.jpg" unoptimized width={100} height={100} alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide key={3}>
                                        <div className={styles.galleryContainer}>
                                            <Image className={styles.galleryImage} src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/image1.jpg" unoptimized width={100} height={100} alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide key={4}>
                                        <div className={styles.galleryContainer}>
                                            <Image className={styles.galleryImage} src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/image1.jpg" unoptimized width={100} height={100} alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide key={5}>
                                        <div className={styles.galleryContainer}>
                                            <Image className={styles.galleryImage} src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/image1.jpg" unoptimized width={100} height={100} alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide key={6}>
                                        <div className={styles.galleryContainer}>
                                            <Image className={styles.galleryImage} src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/image1.jpg" unoptimized width={100} height={100} alt="" />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
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
