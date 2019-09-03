import React from 'react';
import {isDesktop} from './utils'


const dummyData = [
  ["Bitcoin", "BTC", "4878", "2.54"],
  ["Bitcoin4", "BTC", "4878", "2.54"],
  ["Bitcoinr", "BTC", "4878", "2.54"],
  ["Bitcoin", "BTC", "4878", "2.54"],
  ["Bitcoin", "BTC", "4878", "2.54"],
  ["Bitcoin", "BTC", "4878", "2.54"],
  ["Bitcoin", "BTC", "4878", "2.54"],
  ["Bitcoin", "BTC", "4878", "2.54"],
  ["Bitcoin", "BTC", "4878", "2.54"],
  ["Bitcoin", "BTC", "4878", "2.54"],
]

export default function Watchlist (props){

  return (
    <div className="all-watchlist">
    
      <div>
        <i className={`fas fa-plus fa-${isDesktop() ? "2" : "7"}x`} />
        <i className={`fas fa-edit fa-${isDesktop() ? "2" : "7"}x`} />
      </div>

      <span>Portfolio</span>

      {
        dummyData.map((item, i)=>{

          return(

            <div>
              <div>

                <span>{item[0]}</span>
                <span>{item[1]} </span>
                
              </div>

              <div>
           
                <span>{item[2]}</span>
                <span>{item[3]}</span>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};
