import styles from '@/ui/styles/shared/coursePage.module.css'


const courses = [
    { id: 1 ,img: 'https://picsum.photos/420/260',name: 'Automatización Industrial con PLC' , description: 'Cursos y Programas de Extensión • Programas Integrales', stars: 5 , time: 36},
    { id: 2,img: 'https://picsum.photos/420/260',name: 'Automatización Industrial con PLC' , description: 'Cursos y Programas de Extensión • Programas Integrales', stars: 5 , time: 36},
    { id: 3,img: 'https://picsum.photos/420/260',name: 'Automatización Industrial con PLC' , description: 'Cursos y Programas de Extensión • Programas Integrales', stars: 2 , time: 36},
    { id: 4,img: 'https://picsum.photos/420/260',name: 'Automatización Industrial con PLC' , description: 'Cursos y Programas de Extensión • Programas Integrales', stars: 3 , time: 36},
    { id: 5,img: 'https://picsum.photos/420/260',name: 'Automatización Industrial con PLC' , description: 'Cursos y Programas de Extensión • Programas Integrales', stars: 3 , time: 36},
    { id: 6,img: 'https://picsum.photos/420/260',name: 'Automatización Industrial con PLC' , description: 'Cursos y Programas de Extensión • Programas Integrales', stars: 1 , time: 36},
  ]


export default function Curso({params}) {
  
    console.log(params)
  
    const course = courses.filter((course) => course.id === params.id)

    console.log(course)

    return (
    <section>
        {course}
        

    </section>
  )
}
