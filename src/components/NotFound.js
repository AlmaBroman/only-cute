import React from 'react';
import NoResults from '../assets/wow.png';
import styles from '../styles/NotFound.module.css';
import Asset from './Asset';

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
        <Asset src={NoResults} message="Sorry, we were unable to find this page." />
    </div>
  )
}

export default NotFound