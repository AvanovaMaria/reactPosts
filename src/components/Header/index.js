import React, { useState } from 'react';
import style from './style.module.css'

export const Header = () => {
  
  return (
    <div className={style.mainContainer}>
      <div className={style.logoContainer}>logo РЕАКТИВНЫЕ ПОСТЫ</div>
      <div className={style.buttonContainer}>BUTTON</div>
    </div>
  );
};
