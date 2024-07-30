'use client'
import Image from 'next/image'
import Header from './header/page'
import Hero from './hero/page'
import Promotion from './promotion/page'
import Products from './products/page'
import Newsletter from './newsletter/page'
import Footer from './footer/page'

export default function Home() {
  return (
   <>
   <Header/>
   <Hero/>
   <Promotion/>
   <Products/>
   <Newsletter/>
   <Footer/>
   </>
  )
}
