
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {motion} from 'framer-motion'

const links = [
    {path: '/', name: 'home'},
    {path: '/projects', name: 'my projects'},
    {path: '/contact', name: 'contact'},
];


const Nav = ({containerstyles, linkstyles, underlinestyles}) => {
    const path = usePathname();
  return <nav className={`${containerstyles}`}>
  {links.map((link, index)=>{
    return <Link href={link.path} key={index} className={`capitalize ${linkstyles}`}>
    
    {link.path === path && (
        <motion.span initial={{y: '-100%'}}
        animate={{y: 0}}
        transition={{type: 'tween'}}
        layoutId='underline'
        className={`${underlinestyles}`} />
    )}
    {link.name}</Link>
  })}
  </nav>
  
}

export default Nav