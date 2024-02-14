import Image from "next/image"
import Link from "next/link"
Image
Link

const Logo = () => {
  return (
    <Link href='/'>
        <Image src='/mylogo2.png' width={54} height={54} priority alt=""/>
    </Link>
    
  )
}

export default Logo