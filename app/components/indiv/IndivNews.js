import React from 'react';
import { connect } from "react-redux";
import { hydrateNewsThunk } from "../../../store/Portfolio/thunks_for_Portfolio"
import { isCell } from "../utils"

class IndivNews extends React.Component {

  constructor(props) {
    super(props);

  }

  hydrate_data = () => {

    const { hydrateNewsThunk, selectedPortfolioItem } = this.props 

    console.log("calling hydrate data inside indiv news component", hydrateNewsThunk)

    hydrateNewsThunk(selectedPortfolioItem)
  }

  componentDidMount(){

    !isCell() && this.hydrate_data() 
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


    return (

      <div className="indiv-container">
  
        { selectedPortfolioItem_object 
          && selectedPortfolioItem_object.news 
          && selectedPortfolioItem_object.news.map((newsItem, i) =>{
  
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