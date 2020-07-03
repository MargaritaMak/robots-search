import React from 'react';
import Button from './Button';

const Box = (props) => {
   return ( 
      <div> 
      {props.value}
      <img src = {`https://robohash.org/${props.id}`}/>
      </div>
      )
}

export default Box; 