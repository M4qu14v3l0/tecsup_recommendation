'use client'

import styles from '@/ui/styles/shared/carousel.module.css'


export default function Carousel({elements}) {

    
  return (
    <>
      <div className={styles.carousel_container}>
        {
          elements.map((item , index) => (
            <div key={index} className={styles.carousel_slide}>
              
            </div>
          )
          )
        }
      </div>
    </>
  )
}
