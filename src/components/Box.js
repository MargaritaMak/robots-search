import React from 'react';

const Box = (props) => {
   return ( 
      <div> 
      {props.value}
      <img src = {`https://robohash.org/${props.id}`}/>
      </div>
      )
}

export default Box; 