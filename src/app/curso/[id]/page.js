import styles from '@/ui/styles/shared/coursePage.module.css'
import Image from 'next/image'


const courses = [
  { id: 1 ,img: 'https://picsum.photos/1800/400',name: 'Automatización Industrial con PLC' , description: 'Cursos y Programas de Extensión • Programas Integrales', stars: 5 , time: 36 ,
    largeDescription:'El adecuado alineamiento de la maquinaria de las plantas industriales es primordial para reducir drásticamente los costos de mantenimiento y al mismo tiempo para aumentar la vida efectiva de la maquinaria. El curso abarca actividades reales de alineamiento en maquinaria de planta utilizando reloj comparador, alineadores Láser y software de soporte para alineamiento.',
    modules: [
      { id: 1, name: 'Introducción al Alineamiento de Maquinaria', resources_cod: 60, duration_cod: "02:40:20"},
      { id: 2, name: 'Métodos Tradicionales de Alineamiento', resources_cod: 60, duration_cod: "02:40:20"},
      { id: 3, name: 'Alineamiento Avanzado con Tecnología Láser', resources_cod: 60, duration_cod: "02:40:20"},
      { id: 4, name: 'Software de Soporte para Alineamiento', resources_cod: 60, duration_cod: "02:40:20"},
      { id: 5, name: 'Seguridad y Normativas', resources_cod: 60, duration_cod: "02:40:20"},
      { id: 6, name: 'Evaluación y Certificación', resources_cod: 60, duration_cod: "02:40:20"},
    ],
    learnings: [
      { id: 1, name: 'Reconocer y emplear los diferentes métodos de alineamiento, aplicados a maquinarias industriales.'},
      { id: 2, name: 'Alinear ejes en máquinas rotativas utilizando equipos de reloj comparador y con equipos de rayos láser.'},
      { id: 3, name: 'Reemplazar acoplamientos, acondicionando al eje de la máquina rotativa.'},
      { id: 4, name: 'Medir y corregir soltura de pie en maquinarias industriales utilizando reloj comparador y equipos de rayos láser.'},
      { id: 5, name: 'Alinear poleas y ruedas para cadenas utilizando equipos de rayos láser.'},
    ],},
  { id: 2,img: 'https://picsum.photos/1800/400',name: 'Automatización Industrial con PLC' , description: 'Cursos y Programas de Extensión • Programas Integrales', stars: 5 , time: 36 ,
  largeDescription:'El adecuado alineamiento de la maquinaria de las plantas industriales es primordial para reducir drásticamente los costos de mantenimiento y al mismo tiempo para aumentar la vida efectiva de la maquinaria. El curso abarca actividades reales de alineamiento en maquinaria de planta utilizando reloj comparador, alineadores Láser y software de soporte para alineamiento.',
  modules: [
    { id: 1, name: 'Introducción al Alineamiento de Maquinaria', resources_cod: 60, duration_cod: "02:40:20"},
    { id: 2, name: 'Métodos Tradicionales de Alineamiento', resources_cod: 60, duration_cod: "02:40:20"},
    { id: 3, name: 'Alineamiento Avanzado con Tecnología Láser', resources_cod: 60, duration_cod: "02:40:20"},
    { id: 4, name: 'Software de Soporte para Alineamiento', resources_cod: 60, duration_cod: "02:40:20"},
    { id: 5, name: 'Seguridad y Normativas', resources_cod: 60, duration_cod: "02:40:20"},
    { id: 6, name: 'Evaluación y Certificación', resources_cod: 60, duration_cod: "02:40:20"},
  ],
  learnings: [
    { id: 1, name: 'Reconocer y emplear los diferentes métodos de alineamiento, aplicados a maquinarias industriales.'},
    { id: 2, name: 'Alinear ejes en máquinas rotativas utilizando equipos de reloj comparador y con equipos de rayos láser.'},
    { id: 3, name: 'Reemplazar acoplamientos, acondicionando al eje de la máquina rotativa.'},
    { id: 4, name: 'Medir y corregir soltura de pie en maquinarias industriales utilizando reloj comparador y equipos de rayos láser.'},
    { id: 5, name: 'Alinear poleas y ruedas para cadenas utilizando equipos de rayos láser.'},
  ],},
  { id: 3,img: 'https://picsum.photos/1800/400',name: 'Automatización Industrial con PLC' , description: 'Cursos y Programas de Extensión • Programas Integrales', stars: 2 , time: 36,
  largeDescription:'El adecuado alineamiento de la maquinaria de las plantas industriales es primordial para reducir drásticamente los costos de mantenimiento y al mismo tiempo para aumentar la vida efectiva de la maquinaria. El curso abarca actividades reales de alineamiento en maquinaria de planta utilizando reloj comparador, alineadores Láser y software de soporte para alineamiento.',
  modules: [
    { id: 1, name: 'Introducción al Alineamiento de Maquinaria', resources_cod: 60, duration_cod: "02:40:20"},
    { id: 2, name: 'Métodos Tradicionales de Alineamiento', resources_cod: 60, duration_cod: "02:40:20"},
    { id: 3, name: 'Alineamiento Avanzado con Tecnología Láser', resources_cod: 60, duration_cod: "02:40:20"},
    { id: 4, name: 'Software de Soporte para Alineamiento', resources_cod: 60, duration_cod: "02:40:20"},
    { id: 5, name: 'Seguridad y Normativas', resources_cod: 60, duration_cod: "02:40:20"},
    { id: 6, name: 'Evaluación y Certificación', resources_cod: 60, duration_cod: "02:40:20"},
  ],
  learnings: [
    { id: 1, name: 'Reconocer y emplear los diferentes métodos de alineamiento, aplicados a maquinarias industriales.'},
    { id: 2, name: 'Alinear ejes en máquinas rotativas utilizando equipos de reloj comparador y con equipos de rayos láser.'},
    { id: 3, name: 'Reemplazar acoplamientos, acondicionando al eje de la máquina rotativa.'},
    { id: 4, name: 'Medir y corregir soltura de pie en maquinarias industriales utilizando reloj comparador y equipos de rayos láser.'},
    { id: 5, name: 'Alinear poleas y ruedas para cadenas utilizando equipos de rayos láser.'},
  ],},
  { id: 4,img: 'https://picsum.photos/1800/400',name: 'Automatización Industrial con PLC' , description: 'Cursos y Programas de Extensión • Programas Integrales', stars: 3 , time: 36,
  largeDescription:'El adecuado alineamiento de la maquinaria de las plantas industriales es primordial para reducir drásticamente los costos de mantenimiento y al mismo tiempo para aumentar la vida efectiva de la maquinaria. El curso abarca actividades reales de alineamiento en maquinaria de planta utilizando reloj comparador, alineadores Láser y software de soporte para alineamiento.',
  modules: [
    { id: 1, name: 'Introducción al Alineamiento de Maquinaria', resources_cod: 60, duration_cod: "02:40:20"},
    { id: 2, name: 'Métodos Tradicionales de Alineamiento', resources_cod: 60, duration_cod: "02:40:20"},
    { id: 3, name: 'Alineamiento Avanzado con Tecnología Láser', resources_cod: 60, duration_cod: "02:40:20"},
    { id: 4, name: 'Software de Soporte para Alineamiento', resources_cod: 60, duration_cod: "02:40:20"},
    { id: 5, name: 'Seguridad y Normativas', resources_cod: 60, duration_cod: "02:40:20"},
    { id: 6, name: 'Evaluación y Certificación', resources_cod: 60, duration_cod: "02:40:20"},
  ],
  learnings: [
    { id: 1, name: 'Reconocer y emplear los diferentes métodos de alineamiento, aplicados a maquinarias industriales.'},
    { id: 2, name: 'Alinear ejes en máquinas rotativas utilizando equipos de reloj comparador y con equipos de rayos láser.'},
    { id: 3, name: 'Reemplazar acoplamientos, acondicionando al eje de la máquina rotativa.'},
    { id: 4, name: 'Medir y corregir soltura de pie en maquinarias industriales utilizando reloj comparador y equipos de rayos láser.'},
    { id: 5, name: 'Alinear poleas y ruedas para cadenas utilizando equipos de rayos láser.'},
  ],},
  { id: 5,img: 'https://picsum.photos/1800/400',name: 'Automatización Industrial con PLC' , description: 'Cursos y Programas de Extensión • Programas Integrales', stars: 3 , time: 36,
  largeDescription:'El adecuado alineamiento de la maquinaria de las plantas industriales es primordial para reducir drásticamente los costos de mantenimiento y al mismo tiempo para aumentar la vida efectiva de la maquinaria. El curso abarca actividades reales de alineamiento en maquinaria de planta utilizando reloj comparador, alineadores Láser y software de soporte para alineamiento.',
  modules: [
    { id: 1, name: 'Introducción al Alineamiento de Maquinaria', resources_cod: 60, duration_cod: "02:40:20"},
    { id: 2, name: 'Métodos Tradicionales de Alineamiento', resources_cod: 60, duration_cod: "02:40:20"},
    { id: 3, name: 'Alineamiento Avanzado con Tecnología Láser', resources_cod: 60, duration_cod: "02:40:20"},
    { id: 4, name: 'Software de Soporte para Alineamiento', resources_cod: 60, duration_cod: "02:40:20"},
    { id: 5, name: 'Seguridad y Normativas', resources_cod: 60, duration_cod: "02:40:20"},
    { id: 6, name: 'Evaluación y Certificación', resources_cod: 60, duration_cod: "02:40:20"},
  ],
  learnings: [
    { id: 1, name: 'Reconocer y emplear los diferentes métodos de alineamiento, aplicados a maquinarias industriales.'},
    { id: 2, name: 'Alinear ejes en máquinas rotativas utilizando equipos de reloj comparador y con equipos de rayos láser.'},
    { id: 3, name: 'Reemplazar acoplamientos, acondicionando al eje de la máquina rotativa.'},
    { id: 4, name: 'Medir y corregir soltura de pie en maquinarias industriales utilizando reloj comparador y equipos de rayos láser.'},
    { id: 5, name: 'Alinear poleas y ruedas para cadenas utilizando equipos de rayos láser.'},
  ],},
  { id: 6,img: 'https://picsum.photos/1800/400',name: 'Automatización Industrial con PLC' , description: 'Cursos y Programas de Extensión • Programas Integrales', stars: 1 , time: 36,
  largeDescription:'El adecuado alineamiento de la maquinaria de las plantas industriales es primordial para reducir drásticamente los costos de mantenimiento y al mismo tiempo para aumentar la vida efectiva de la maquinaria. El curso abarca actividades reales de alineamiento en maquinaria de planta utilizando reloj comparador, alineadores Láser y software de soporte para alineamiento.',
  modules: [
    { id: 1, name: 'Introducción al Alineamiento de Maquinaria', resources_cod: 60, duration_cod: "02:40:20"},
    { id: 2, name: 'Métodos Tradicionales de Alineamiento', resources_cod: 60, duration_cod: "02:40:20"},
    { id: 3, name: 'Alineamiento Avanzado con Tecnología Láser', resources_cod: 60, duration_cod: "02:40:20"},
    { id: 4, name: 'Software de Soporte para Alineamiento', resources_cod: 60, duration_cod: "02:40:20"},
    { id: 5, name: 'Seguridad y Normativas', resources_cod: 60, duration_cod: "02:40:20"},
    { id: 6, name: 'Evaluación y Certificación', resources_cod: 60, duration_cod: "02:40:20"},
  ],
  learnings: [
    { id: 1, name: 'Reconocer y emplear los diferentes métodos de alineamiento, aplicados a maquinarias industriales.'},
    { id: 2, name: 'Alinear ejes en máquinas rotativas utilizando equipos de reloj comparador y con equipos de rayos láser.'},
    { id: 3, name: 'Reemplazar acoplamientos, acondicionando al eje de la máquina rotativa.'},
    { id: 4, name: 'Medir y corregir soltura de pie en maquinarias industriales utilizando reloj comparador y equipos de rayos láser.'},
    { id: 5, name: 'Alinear poleas y ruedas para cadenas utilizando equipos de rayos láser.'},
  ],},
]


/*
const courses =[
  {
    course_id: 1,
		title_cou: "Business Intelligence (with BUBAAAAA)",
		description_cou: "TF course",
		price_cou: 10000000.3,
		course_cat: [
			{
				category_id: 4,
				name_cat: "Programming"
			},
			{
				category_id: 5,
				name_cat: "Side hustle"
			}
		],
		course_content: [
			{
				coursedetails_id: 5,
				title_cod: "Introduction to Pandas",
				resources_cod: 60,
				duration_cod: "02:40:20",
				course: 1
			},
			{
				coursedetails_id: 6,
				title_cod: "Developing with Pandas",
				resources_cod: 30,
				duration_cod: "01:30:20",
				course: 1
			},
			{
				coursedetails_id: 7,
				title_cod: "Introduction to PyTorch",
				resources_cod: 13,
				duration_cod: "00:40:20",
				course: 1
			}
		]
  }
];
*/

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
            <div className={styles.course_description}>
              {course.description} • {course.time} horas
            </div>
            <div className={styles.sc_stars}>
              {course.stars}<StarRating stars={course.stars}/>
            </div>
            <div className={styles.info_left}>
              {course.largeDescription}
            </div>
            <div className={styles.course_modules_title}>
              <p>Módulos</p>
            </div>
            <div className={styles.course_modules}>
              {course.modules.map((module) => (
                <div key={module.id} className={styles.course_module}>
                  <div>
                    <p>{module.name}</p>
                    <span>{module.resources_cod} recursos</span>
                  </div>
                  <span className={styles.course_module_duration}>{module.duration_cod}</span>
                </div>
              ))}
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
            <div className={styles.course_learnings}>
              {course.learnings.map((learning) => (
                <div key={learning.id} className={styles.course_learn}>
                  <Image src={'/icons/check.svg'} width={28} height={28} alt='check'/>
                  <p>{learning.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  )
}
