import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import logo from '../portFolioLogo.png'

const Navbar = () => {
  return (
    <div style={{display:'flex', flexDirection:'row', gap:'20px', justifyContent:'left', alignItems:'center'}}>
        <Link href={'/'}>
            <Image src={logo} alt='LOGO' width={180} height={200}/>
        </Link>
        <Link style={{fontSize:'25px',fontWeight:'bold',color:'teal'}} href={'/project'}>Projects</Link>
    </div>
  )
}

export default Navbar;