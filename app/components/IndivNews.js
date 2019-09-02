import React from 'react';
import { logoUrl } from './utils'

export default function IndivNews (props){

  const news  = [
     {title : "blankity blank", date : "1/1/2019", text: "yada yada", image_url: logoUrl }, 
     {title : "blankity blank", date : "1/1/2019", text: "yada yada", image_url: logoUrl }, 
     {title : "blankity blank", date : "1/1/2019", text: "yada yada", image_url: logoUrl }, 
     {title : "blankity blank", date : "1/1/2019", text: "yada yada", image_url: logoUrl }, 
     {title : "blankity blank", date : "1/1/2019", text: "yada yada", image_url: logoUrl }, 
     {title : "blankity blank", date : "1/1/2019", text: "yada yada", image_url: logoUrl }, 
     {title : "blankity blank", date : "1/1/2019", text: "yada yada", image_url: logoUrl }, 
     {title : "blankity blank", date : "1/1/2019", text: "yada yada", image_url: logoUrl }, 
     {title : "blankity blank", date : "1/1/2019", text: "yada yada", image_url: logoUrl }, 
     {title : "blankity blank", date : "1/1/2019", text: "yada yada", image_url: logoUrl }, 
    ];

  return (

    <div className="indiv-container">

      {news.map((newsItem, i) =>{

          return (
              <div className="news-box"> 
                  

                  <div>

                      <span>
                          <a href={newsItem.news_url} target="_blank">
                          {newsItem.title}
                          </a>
                      </span>

                      <span>
                          {newsItem.date}
                      </span>
                      
                      <span>
                          {newsItem.text}
                      </span>
                  
                  </div>

                  <img 
                      src={newsItem.image_url} 
                  />


              </div>
          )
      })

      }
    </div>
  );
};