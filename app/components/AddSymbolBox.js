import React from 'react';

export default function TradeBox (props){

  return (
    <div className="trade-box symbol-box">

      <span>
        Symbol
      </span>

      <input 
        type="text" 
        min="1" 
        max="5"
      />
      <div>

        <button onClick={props.exit}>
          Add
        </button>

      </div>
</div>
  );
};