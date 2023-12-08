import styles from '@/ui/styles/shared/login.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
   return (
      <section className={styles.login}>
         <Image fill src='/img/image_auth.svg' sizes='100vw' alt='tecsup arequipa' style={{objectFit:'cover'}}/>
         <div className={styles.content_login}>
            <div>
               <Image src='/logo/logo_white.svg' width={600} height={200} alt='tecsup logo white' style={{objectFit:'cover'}}/>
            </div>
            <div className={styles.form_login}>
               <div>
                  <input className={styles.auth_input} placeholder='Correo Electrónico' type='email'></input>
               </div>
               <div>
                  <input className={styles.auth_input} placeholder='Contraseña' type='password'></input>
               </div>
               <Link className={styles.auth_button} href='/'>Iniciar sesión</Link>
            </div>
            <div>
               ¿No tienes correo de Tecsup? <Link href='/register'>Regístrate aquí</Link>
            </div>
         </div>
         
      </section>
   )
}