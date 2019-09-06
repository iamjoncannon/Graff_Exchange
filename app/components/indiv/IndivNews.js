import React from 'react';
import { logoUrl } from '../utils'
import { connect } from "react-redux";

function IndivNews (props){

    const {selectedPortfolioItem} = props

    window.scrollTo(0, 0);

  return (

    <div className="indiv-container">

      {selectedPortfolioItem && selectedPortfolioItem.news.map((newsItem, i) =>{

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

const mapStateToProps = ({ Portfolio_state }) => {
    return {
      selectedPortfolioItem: Portfolio_state.selectedPortfolioItem
    };
  };
  
  export default connect(
    mapStateToProps,
    null
  )(IndivNews);