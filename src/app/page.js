import Carousel from '@/ui/shared/Carousel'
import HighlightedText from '@/ui/shared/HighlightedText'

import styles from '@/ui/styles/home.module.css'
import Image from 'next/image'

const courses = [
  { img: 'https://picsum.photos/420/260',name: 'Automatización Industrial con PLC' , description: 'Cursos y Programas de Extensión • Programas Integrales', stars: 5 , time: 36},
  { img: 'https://picsum.photos/420/260',name: 'Automatización Industrial con PLC' , description: 'Cursos y Programas de Extensión • Programas Integrales', stars: 5 , time: 36},
  { img: 'https://picsum.photos/420/260',name: 'Automatización Industrial con PLC' , description: 'Cursos y Programas de Extensión • Programas Integrales', stars: 5 , time: 36},
  { img: 'https://picsum.photos/420/260',name: 'Automatización Industrial con PLC' , description: 'Cursos y Programas de Extensión • Programas Integrales', stars: 5 , time: 36},
]

export default function Home() {

  return (
    <main className={`margin_container`}>
      <HighlightedText firstText='Cursos con' highlightedText='mayor calificación'/>
      <Carousel elements={courses}/>
    </main>
  )
}
 