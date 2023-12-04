import styles from '@/ui/styles/shared/coursePage.module.css'
import Image from 'next/image'


const courses = [
    { id: 1 ,img: 'https://picsum.photos/1800/400',name: 'Automatización Industrial con PLC' , description: 'Cursos y Programas de Extensión • Programas Integrales', stars: 5 , time: 36},
    { id: 2,img: 'https://picsum.photos/1800/400',name: 'Automatización Industrial con PLC' , description: 'Cursos y Programas de Extensión • Programas Integrales', stars: 5 , time: 36},
    { id: 3,img: 'https://picsum.photos/1800/400',name: 'Automatización Industrial con PLC' , description: 'Cursos y Programas de Extensión • Programas Integrales', stars: 2 , time: 36},
    { id: 4,img: 'https://picsum.photos/1800/400',name: 'Automatización Industrial con PLC' , description: 'Cursos y Programas de Extensión • Programas Integrales', stars: 3 , time: 36},
    { id: 5,img: 'https://picsum.photos/1800/400',name: 'Automatización Industrial con PLC' , description: 'Cursos y Programas de Extensión • Programas Integrales', stars: 3 , time: 36},
    { id: 6,img: 'https://picsum.photos/1800/400',name: 'Automatización Industrial con PLC' , description: 'Cursos y Programas de Extensión • Programas Integrales', stars: 1 , time: 36},
  ]


export default function Curso({params}) {
  
    const course = courses.find((course) => course.id === parseInt(params.id))

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
    <section className={styles.course_container}>
        <div className={styles.course_banner}>
          <Image src={course.img} alt={course.name} fill style={{objectFit: 'cover'}}/>
          <div className={styles.course_banner_title}>
            <h2>Curso de <span>{course.name}</span></h2>
          </div>
        </div>

        <div className={styles.info_course_container}>
          <div className={styles.info_left}>
            <div className={styles.sc_stars}>
              {course.stars}<StarRating stars={course.stars}/>
            </div>
            <div className={styles.course_description}>
              {course.description}
            </div>
            <div className={styles.course_modules_title}>
              <p>Módulos</p>
            </div>

          </div>

          <div className={styles.info_right}>
            <div className={styles.course_like}>
              <p>¿Ya llevaste este curso?<span>Déjanos tu like.</span></p>
              <Image src={'/icons/like.svg'} width={40} height={40} alt='like'/>
            </div>
            <div className={styles.course_learning}>
              Lo que aprenderás
            </div>

          </div>
        </div>
        

    </section>
  )
}
