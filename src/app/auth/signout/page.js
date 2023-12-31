import styles from '@/ui/styles/shared/register.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Register() {
   return (
      <section className={styles.login}>
         <Image fill src='/img/image_auth.svg' sizes='100vw' alt='tecsup arequipa' style={{objectFit:'cover'}}/>
         <div className={styles.content_login}>
            <div>
               <Image src='/logo/logo_white.svg' width={600} height={200} alt='tecsup logo white' style={{objectFit:'cover'}}/>
            </div>
            <div className={styles.form_login}>
               <div className={styles.form_login1}>
                  <input className={styles.auth_input} placeholder='Nombres' type='text'></input>
                  <input className={styles.auth_input} placeholder='Apellidos' type='text'></input>
               </div>
               <div className={styles.form_login2}>
                  <input className={styles.auth_input} placeholder='Correo Electrónico' type='email'></input>
                  <input className={styles.auth_input} placeholder='Contraseña' type='password'></input>
               </div>
               <Link className={styles.auth_button} href='/'>Registrarse</Link>
            </div>
            <div>
               ¿Ya tienes correo de Tecsup? <Link href='/auth/signin'>Inicia sesión aquí</Link>
            </div>
         </div>
         
      </section>
   )
}