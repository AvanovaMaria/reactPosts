import React from 'react';

import { Card } from "../Card";
import { Main } from '../Main';

export const List = ({ list }) => {
  return (
    <div>
    <div><Main /></div>
      <div>{list.map((item, i) => 
    <Card key={i} itemPost={item}/>
  )}</div>
    </div>
  );
};
