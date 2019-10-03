import React from "react";
import { connect } from "react-redux";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {isDesktop} from '../utils'
import LoadingDots from '../loadingDots'

class PerformanceChart extends React.Component {

    constructor(props){
        super(props)

        this.state = {}
    }

    componentDidMount() {
        
        this.resize()

        window.addEventListener("resize", this.resize.bind(this))

    }

    componentWillUnmount(){

        window.removeEventListener("resize", this.resize.bind(this))

    }
    
    resize = () => {

        if(process.env.NODE_ENV === "test"){
            this.container = {}
            this.container.offsetHeight = 100
            this.container.offsetWidth = 100 
        }

        this.setState({
            dimensions: {
              width: this.container.offsetWidth,
              height: this.container.offsetHeight,
            },
          });
    }

    renderContent(){

        const { width, height } = this.state.dimensions;

        const  { selectedPortfolioItem, period, portfolio } = this.props

        const selectedPortfolioItem_object = portfolio[selectedPortfolioItem]

        let data = selectedPortfolioItem_object.historical.slice(0, period).reverse()

        for(let each in data){
            data[each].date = data[each].date.replace("2019-", "").replace("2018-", "")
        }

        return (

            <LineChart 
                width={width} height={height} data={data}
                margin={{top: 30, right: 30, left: 30, bottom: 5}}
            >

                <XAxis dataKey="date"  hide={ !isDesktop() || period > 100 ? true : false}/>

                <YAxis domain={['auto', 'auto']} />
                
                {/* <CartesianGrid strokeDasharray="3 3"/> */}
                <Tooltip/>
                {/* <Legend /> */}
                <Line type="monotone" dataKey="open" stroke="blue" dot={false} /> 
                {/* activeDot={{r: 1}} */}
                <Line type="monotone" dataKey="high" stroke="green"dot={false} />
                <Line type="monotone" dataKey="low" stroke="red" dot={false} />
                <Line type="monotone" dataKey="close" stroke="black" dot={false}/>
          </LineChart>

        );
    } 

    render(){
      
        const { dimensions } = this.state;

        const { portfolio, selectedPortfolioItem } = this.props

        const selectedPortfolioItem_object = portfolio[selectedPortfolioItem]

        return(

            <div className="chart" ref={el => (this.container = el)}>

                { dimensions && selectedPortfolioItem_object.historical ? 
                    this.renderContent()
                    : 
                    <LoadingDots size="10rem"/>
                }

            </div>
        )
    }
}

const mapStateToProps = ({ Portfolio_state }) => {

    return {
      selectedPortfolioItem : Portfolio_state.selectedPortfolioItem,
      portfolio: Portfolio_state.portfolio
    };
};
  
export default connect(
    mapStateToProps,
    null
)(PerformanceChart);
