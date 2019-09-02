import React from 'react';

export default function TradeBox (props){

  return (
    <div>

      <span>
        Quantity
      </span>

      <input 
        type="number" 
        min="1" 
        max="5"
      />
      <div>

        <button onClick={props.exit}>
          Buy
        </button>
        
        <button onClick={props.exit}>
          Sell
        </button>

      </div>
</div>
  );
};