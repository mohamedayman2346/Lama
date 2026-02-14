import React from 'react'

export default function PortfolioLayout({children} : Readonly<{children : React.ReactNode}>) {
  return (
    <div>
      <h1 className='text-8xl  '>Our Works</h1>
      {children}
    </div>
  )
}
