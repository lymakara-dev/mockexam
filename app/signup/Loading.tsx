// components/Loading.tsx
'use client'
import React from 'react';
import styles from './Loading.module.css';
import { GridLoader } from 'react-spinners';

const Loading: React.FC = () => {
  return (
    <div className={styles.loadingOverlay}>
        <GridLoader size={25}/>
    </div>
  );
};

export default Loading;
