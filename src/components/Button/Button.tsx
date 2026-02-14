import Link from 'next/link'
import React from 'react'

export default function Button({title, url = '/', className} : {title : string, url: string, className?: string}) {
  return (
    <Link href = {url}>
        <button className={`btn ${className} `} >{title}</button>
    </Link>
  )
}
