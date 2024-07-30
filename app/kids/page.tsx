'use client'
import React from 'react'
import Header from '../header/page'
import Footer from '../footer/page'
import { Text } from '@chakra-ui/react'

export default function Kids() {
  return (
    <>
    <Header/>
    <main className='mx-28'>
      <Text className='mt-10'>OOPS,We are out of the stock!</Text>  
    </main>
    <Footer/>
    </>
  )
}
