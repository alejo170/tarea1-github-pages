import React from 'react';
import s from './style.module.css'

const Header = ({logo, title}) => {
  return (
    <header className={s.header}>
      <figure>
        <img src={logo} alt={title} />
      </figure>
    </header>
  )
}

export default Header