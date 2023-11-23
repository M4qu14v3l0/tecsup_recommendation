
import styles from '@/ui/styles/shared/carousel.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function Carousel({elements}) {

    
  return (
    <>
      <div className={styles.carousel_container}>
        {
          elements.map((item , index) => (
            <div key={index} className={styles.carousel_slide}>
              <Image src={item.img} width={400} height={260} alt='tecsup curso' style={{objectFit:'cover'}}/>
              <div className={styles.carousel_info_container}>
                <h3 className={styles.carousel_h3}>{item.name}</h3>
                <p className={styles.carousel_description}>{item.description}</p>
                <p className={styles.carousel_stars}>{item.stars}</p>
                <p className={styles.carousel_time}>{item.time} horas</p>
              </div>
              <div className={styles.carousel_button_container}>
                <Link href='#' className={styles.carousel_button}>{'Ver más >'}</Link>
                <Image src={'/icons/hearth.svg'} alt='Like' width={40} height={40}/>
              </div> 
            </div>
          )
          )
        }
      </div>
    </>
  )
}
