import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'
import MyPdfFiles from '.././assets/HUMIDOR.pdf'; //react-app-env.d.ts must be created declare for pdf-type. 

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.link}>
        <Link to="/">Home</Link>
        <Link to="First">My Fun Component</Link>
        <a href={MyPdfFiles} target='_blank' rel="noreferrer">Humidor</a>
      </div>
    </div>
  )
}

export default Navbar // check that this is defined in const module above 
