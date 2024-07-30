'use client'
import React from 'react'
import Header from '../header/page'
import { Box, HStack, Image, Text } from '@chakra-ui/react'
import Footer from '../footer/page'

export default function Male() {
  return (
    <>
        <Header/>
    <main className='mx-28'>
    <Box className=" font-bold mt-10 ">
          <HStack className="space-x-6">
            <div>
              <div className="">
                <Image
                  src="/images/Male 1.webp"
                  width='300'
                  height='300'
                  alt="Product no 1"
                />
              </div>
              <Text className="mt-2">Raglan Sweatshirt</Text>
              <Text className="">$155</Text>
            </div>

            <div>
              <div className=" bg-gray-300 px-6">
                <Image
                  src="/images/Pro 3.webp"
                  width='300'
                  height='300'
                  alt="Product no 2"
                />
              </div>
              <Text className="mt-2">Flex Push Button Bomber</Text>
              <Text className="">$190</Text>
            </div>
</HStack>
</Box>
    </main>
<Footer/>

    </>
  )
}
