'use client'

import styles from '@/ui/styles/shared/selectorCourse.module.css'
import Image from 'next/image'
import Link from 'next/link'

import { useState } from 'react'


export default function SelectorCourse({elements}) {

    const [selectors , setSelectors] = useState([
        {
            id: 1,
            name:'Electricidad y Electrónica',
            checked: false
        },
        {
            id: 2,
            name:'Gestión y Producción',
            checked: false
        },
        {
            id: 3,
            name:'Mecánica y Aviación',
            checked: false
        },
        {
            id: 4,
            name:'Mecatrónica',
            checked: false
        },
        {
            id: 5,
            name:'Gestión y Producción',
            checked: false
        },
        {
            id: 6,
            name:'Minería, Procesos Químicos y Metalúrgicos',
            checked: false
        },
        {
            id: 7,
            name:'Seguridad y Salud en el Trabajo',
            checked: false
        },
        {
            id: 8,
            name:'Tecnología Digital',
            checked: false
        },
        {
            id: 9,
            name:'Tecnología Agrícola',
            checked: false
        },
    ])


    const handleCheckboxChange = (id) => {
        setSelectors((prevCheckboxes) =>
          prevCheckboxes.map((checkbox) =>
            checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
          )
        );
      };

      const handleGetInfo = () => {
        const selectedCheckboxes = selectors.filter((checkbox) => checkbox.checked);
        // Aquí puedes realizar acciones con la información de las checkboxes seleccionadas
        console.log('Checkboxes seleccionadas:', selectors);
        // También podrías realizar la petición GET al servidor aquí
      };

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
        <div className={styles.title_container}>
            <h2 className={styles.title_h2}>
                Una amplia
            </h2>
            <span className={styles.subtitle_span}>
            selección de cursos
            </span>
        </div>
        <section className={styles.selector_container}>
        <div className={styles.sc_container}>
            {
            elements.map((item , index) => (
                <div key={index} className={styles.sc_slide}>
                <Image src={item.img} width={380} height={240} alt='tecsup curso' style={{objectFit:'cover'}}/>
                <div className={styles.sc_info_container}>
                    <h3 className={styles.sc_h3}>{item.name}</h3>
                    <p className={styles.sc_description}>{item.description}</p>
                    <div className={styles.sc_stars}>{item.stars} <StarRating stars={item.stars}/></div>
                    <p className={styles.sc_time}>{item.time} horas</p>
                </div>
                <div className={styles.sc_button_container}>
                    <Link href='#' className={styles.sc_button}>{'Ver más >'}</Link>
                </div> 
                </div>
            )
            )
            }
        </div>

        <aside className={styles.aside_container}>
            <div className={styles.checkbox_container}>
            <h2>Área de formación</h2>
               {
                selectors.map((checkbox) => (
                    <div key={checkbox.id} className={styles.checkbox_item}>
                        <input
                            type="checkbox"
                            id={checkbox.id}
                            checked={checkbox.checked}
                            onChange={() => handleCheckboxChange(checkbox.id)}
                        />
                        <label htmlFor={checkbox.id}>
                            {checkbox.name}
                        </label>
                    </div>
                ))
               } 
            <button className={styles.aside_button}>Filtrar</button>
            </div>
            <div className={styles.highlightedText_container}>
                <h2 className={styles.highlightedText_h2}>
                    ¿Quieres ver los cursos
                </h2>
                <span className={styles.highlightedText_span}>
                    más calificados?
                </span>
            </div>
        </aside>
        </section>
    </>
  )
}
