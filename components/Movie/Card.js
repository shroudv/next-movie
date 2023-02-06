import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Card({movie}) {
    return (
        <div className="movie">
            <div className="image">
                <div className="overlay"></div>
                <Image src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} unoptimized fill alt=''/>
            </div>
            <div className="content">
                <div className="label primary">
                    <span>Fantastic</span>
                </div>
                <Link className="title" href={`/actions/${movie.id}`}>{movie.original_title}</Link>
                <div className="rate">
                    <Image src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" unoptimized width={13} height={13} alt="" /> {movie.vote_average} /10
                </div>
            </div>
        </div>
    )
}
