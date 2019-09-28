import React from 'react';
import { connect } from "react-redux";
import { hydrateNewsThunk } from "../../../store/Portfolio/thunks_for_Portfolio"
import { isCell } from "../utils"
import LoadingDots from '../loadingDots'

class IndivNews extends React.Component {

  constructor(props) {
    super(props);

  }

  hydrate_data = () => {

    const { hydrateNewsThunk, selectedPortfolioItem } = this.props 
    
    hydrateNewsThunk(selectedPortfolioItem)
  }

  componentDidMount(){

    const { selectedPortfolioItem, portfolio } = this.props
    
    const selectedPortfolioItem_object = portfolio[selectedPortfolioItem]

    if(!isCell() && !selectedPortfolioItem_object.news){
   
      this.hydrate_data()
    }
    
  }

  componentDidUpdate(){
    
    const { selectedPortfolioItem, portfolio } = this.props
    
    const selectedPortfolioItem_object = portfolio[selectedPortfolioItem]

    if(!isCell() && !selectedPortfolioItem_object.news){
   
      this.hydrate_data()
    }

  }

  render(){

    const { selectedPortfolioItem, portfolio } = this.props

    const selectedPortfolioItem_object = portfolio[selectedPortfolioItem]

    const is_loaded = selectedPortfolioItem_object 
                      && selectedPortfolioItem_object.news 
                      && selectedPortfolioItem_object.news.length

    const no_news_data = selectedPortfolioItem_object 
                        && selectedPortfolioItem_object.news 
                        && selectedPortfolioItem_object.news.length === 0

    return (

      <div className="indiv-container">
  
        { is_loaded ? selectedPortfolioItem_object.news.map((newsItem, i) =>{
  
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
        : no_news_data ? 
            <span className={"error_message"}>
              Data Not Available
            </span>

        :
        <div style={{display: "block", textAlign: "center"}}> 
          <LoadingDots size={"10vh"} />
        </div>
        }
      </div>
    );

  }
}

const mapStateToProps = ({ Portfolio_state }) => {
    return {
      portfolio: Portfolio_state.portfolio,     
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