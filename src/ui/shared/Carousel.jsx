
import styles from '@/ui/styles/shared/carousel.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function Carousel({elements}) {

  const StarRating = ({ stars }) => {
    const maxStars = 5;
    const filledStars = Array.from({ length: stars }).fill(null);
    const emptyStars = Array.from({ length: maxStars - stars }).fill(null);
  
    return (
      <div className={styles.stars_container}>
        {filledStars.map((_, index) => (
          <span key={index} className={styles.star}><Image width={20} height={20} alt='star' src={'/icons/star.svg'}/></span>
        ))}
        {emptyStars.map((_, index) => (
          <span key={index} className={styles.star}><Image width={20} height={20} alt='star' src={'/icons/empty_star.svg'}/></span>
        ))}
      </div>
    );
  };
  
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
                <div className={styles.carousel_stars}>{item.stars} <StarRating stars={item.stars}/></div>
                <p className={styles.carousel_time}>{item.time} horas</p>
              </div>
              <div className={styles.carousel_button_container}>
                <Link href={`/curso/${item.id}`} className={styles.carousel_button}>{'Ver más >'}</Link>
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
