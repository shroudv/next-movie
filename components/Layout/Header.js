import Link from 'next/link'
import React from 'react'
import Search from '@/components/Search/Index'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Header(params) {

  const route= useRouter();
  const path= route.pathname

  return (
    <header className={`${path == '/' ? 'absolute' :''}`}>
      <div className="container">
      <div className="navbar">
        <div className="logo">
          <Link href={'/'}>
            <Image src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/logo1.png" unoptimized width={100} height={48} alt="" />
          </Link>
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
          <ul>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/">HOME</Link></li>
            <li><Link className='btn btn-primary' href="/">SIGN UP</Link></li>
          </ul>
        </div>
      </div>
      <Search />
      </div>
    </header>
  )
}
