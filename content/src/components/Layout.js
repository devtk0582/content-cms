import React from 'react'
import { ExampleButton } from './button'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <ExampleButton>Click</ExampleButton>
    </>
  )
}

export default Layout
