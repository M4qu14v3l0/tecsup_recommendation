import styles from '@/ui/styles/shared/navbar.module.css'

import Image from "next/image";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.navbar_container}>
        <ul className={styles.navbar_elements}>
            <li><Link href={"/"}><Image src={'/logo/logo.svg'} alt="TECSUP LOGO" width={150} height={40} style={{objectFit: 'contain'}}/></Link></li>
            <li><Image src={'/icons/user.svg'} alt="user login" width={40} height={40} style={{objectFit: 'contain'}}/></li>
        </ul>

    </nav>
  )
}
