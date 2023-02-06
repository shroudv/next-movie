import Link from 'next/link'
import React from 'react'
import Search from '@/components/Search/Index'
import Image from 'next/image'

export default function Header() {
  return (
    <header className={`container absolute`}>
      <div className="navbar">
        <div className="logo">
          <Image src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/logo1.png" unoptimized width={100} height={48} alt="" />
        </div>
        <div className="nav-links">
          <ul>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/">HOME</Link></li>
          </ul>
        </div>
        <div className="actions">
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/">HOME</Link></li>
          <li><Link className='btn btn-primary' href="/">SIGN UP</Link></li>
        </div>
      </div>
      <Search />
    </header>
  )
}
