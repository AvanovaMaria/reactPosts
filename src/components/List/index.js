import React from 'react';
import { Main } from '../Main';
import { Card } from "../Card";

import './index.css';

export const List = ({ list }) => {
  return (
    <div>
    <div>
    <Main />
    </div>
      <div className='cards'>
      {list?.map((item) => (
    <Card 
    itemPost={item}
    key={item._id} 
    
    
    />
      ))
      }
      </div>
    </div>
  );
};
