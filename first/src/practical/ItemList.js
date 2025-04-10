import { useState } from 'react';

const ItemList = () =>{

    const Items = ["React","Vue","Angular"];

    return (
        <div> 
            
        <ul>
            {Items.map((item,index) => (
                <li key = {index}> {item} </li>
            ))}
        </ul>
        </div>
    )
}

export default ItemList;