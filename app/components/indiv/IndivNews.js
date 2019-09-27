import React from 'react';
import { connect } from "react-redux";
import { hydrateNewsThunk } from "../../../store/Portfolio/thunks_for_Portfolio"
import { isCell } from "../utils"

class IndivNews extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount(){

    if(!isCell()){
 
      const { hydrateNewsThunk, selectedPortfolioItem} = this.props
      
      hydrateNewsThunk(selectedPortfolioItem.symbol)
    }
  }
  
  render(){

    let { selectedPortfolioItem } = this.props

    return (

      <div className="indiv-container">
  
        { selectedPortfolioItem 
          && selectedPortfolioItem.news 
          && selectedPortfolioItem.news.map((newsItem, i) =>{
  
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
    };
  };

const mapDispatchToProps = dispatch => ({

  hydrateNewsThunk: (symbol) => dispatch(hydrateNewsThunk(symbol))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndivNews);