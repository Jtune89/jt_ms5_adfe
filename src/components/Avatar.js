import React from 'react';
import styles from '../styles/Avatar.module.css';

const Avatar = ({ src, height = 45, width = 40, text} ) => {

  return (
    <span>
        <img className={styles.Avatar} src={src}
        height={height} width={width} alt="avatar"/>
        {text}
    </span>
  )
}

export default Avatar