import { useState } from 'react';
import styles from './menu.module.css';
import { Link } from 'react-router-dom';
import { List } from 'phosphor-react';

const Menu = (props) => {
    const [open, setOpen] = useState(false)

    function handleMenu() {
      open ? setOpen(false) :  setOpen(true)
    }
  
  return(
    <nav>
      <List size={32} onClick={handleMenu} className={styles.hamburguer} />
      <ul className={open ? styles.hamburguerOpen : styles.menu}>
        <li className={open ? styles.itemOpen : styles.item}>
          <Link className={open ? styles.linkOpen : styles.link} to="/">Home</Link>
        </li>
        <li className={open ? styles.itemOpen : styles.item}>
          <Link  className={open ? styles.linkOpen : styles.link} to="/sobre">Sobre</Link>
        </li>
        <li className={open ? styles.itemOpen : styles.item}>
          <Link className={open ? styles.linkOpen : styles.link} to="/comentarios">Comentários</Link>
        </li>
        <li className={open ? styles.itemOpen : styles.item}>
          <Link className={open ? styles.linkOpen : styles.link} to="/contato">Contato</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;