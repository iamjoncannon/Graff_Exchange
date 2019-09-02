import React from 'react';

export default function DataNav (props){

  const { data, switchItem, selectedDataNavItem } = props;

  return (

    <div className="data-nav">
        {data.map( (item, i)=>{

          return(

            <span 
              key={i}
              onClick={()=>switchItem(item)}
              className={selectedDataNavItem === item ? "selected" : undefined}
             >
             {item}
            </span>
          )
        })}
    </div>
  );
};