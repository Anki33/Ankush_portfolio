import React from 'react'
import Image from 'next/image'

const DevImage = ({containerstyles, Imagesrc}) => {
  return (
    <div className={`${containerstyles}`}>
    <Image src={Imagesrc} fill priority alt=''/></div>
  )
}

export default DevImage