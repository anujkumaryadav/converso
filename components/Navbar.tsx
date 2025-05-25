import React from 'react'
import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link href='/' className='flex items-center gap-2.5 cursor-pointer'>
                <Image src="/images/logo.svg" alt="Converso Logo" height={44} width={46} />
            </Link>
            <div className="flex items-center gap-8">
                <NavItems/>
                <p>Sign In</p>
            </div>
        </nav>
    )
}
export default Navbar
