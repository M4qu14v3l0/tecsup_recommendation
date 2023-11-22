import styles from '@/ui/styles/shared/navbar.module.css'

import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
        <ul className={styles.navbar_elements}>
            <li><Image src={'/logo/logo.svg'} alt="TECSUP LOGO" width={150} height={40} style={{objectFit: 'contain'}}/></li>
            <li><Image src={'/icons/user.svg'} alt="user login" width={40} height={40} style={{objectFit: 'contain'}}/></li>
        </ul>

    </nav>
  )
}
