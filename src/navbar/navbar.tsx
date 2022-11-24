import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
      <p className={styles.link}>
      <Link to ="/">Home</Link>
      <Link to ="First">My First Component</Link>
      </p>
    </div>
  )
}

export default Navbar
