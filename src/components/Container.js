import React from 'react';
import Box from './box';

const Container = (props) => {
    return (
        <div>
            {props.value.map(item =>{
                return <Box key ={item.id} id= {item.id} value={item.name}/>
            })} 
         </div>
    )
}


export default Container; 