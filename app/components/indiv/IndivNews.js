import React from 'react';
import { logoUrl } from '../utils'
import { connect } from "react-redux";

class IndivNews extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      news : null
    }
  }

  componentDidMount(){

    let { selectedPortfolioItem }  = this.props
    
    if(selectedPortfolioItem){

      this.setState({

        news: selectedPortfolioItem.news
      })
    }
    
  }

  componentDidUpdate(update){

    const { selectedPortfolioItem } = this.props 
    
    if(selectedPortfolioItem){
      if(selectedPortfolioItem.news){
        if(selectedPortfolioItem.news.length){

          if(selectedPortfolioItem.news[0].title !== this.state.news[0].title){
        
            this.setState({
              
              news: selectedPortfolioItem.news
            })
          }
        }   
      }
    }
}

  render(){

    let { news } = this.state

    return (

      <div className="indiv-container">
  
        { news && news.map((newsItem, i) =>{
  
            return (
                <div className="news-box" key={i}> 
                    
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

  }
}

const mapStateToProps = ({ Portfolio_state }) => {
    return {
      selectedPortfolioItem: Portfolio_state.selectedPortfolioItem,
      portfolio: Portfolio_state.portfolio
    };
  };
  
export default connect(
  mapStateToProps,
  null
)(IndivNews);