import React, { useState } from 'react';
import style from './style.module.css';
import { Info } from '../Info';

export const Header = ({user}) => {
  
  return (
    <div className={style.mainContainer}>
    <div className={style.logoContainer}> Реактивные посты</div>
     <Info {...user} />
    </div>
  );
};
