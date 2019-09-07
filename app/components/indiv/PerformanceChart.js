import React from "react";
import { connect } from "react-redux";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {isDesktop} from '../utils'

class PerformanceChart extends React.Component {

    constructor(props){
        super(props)

        this.state = {}
    }

    componentDidMount() {
        
        this.resize()

        window.addEventListener("resize", this.resize.bind(this))

    }

    componentDidUnmount(){

        window.removeEventListener("resize", this.resize.bind(this))

    }

    componentDidUpdate(argument){

    }
    
    resize = () => {

        this.setState({
            dimensions: {
              width: this.container.offsetWidth,
              height: this.container.offsetHeight,
            },
          });
    }

    renderContent(){

        const { width, height } = this.state.dimensions;

        const  {selectedPortfolioItem, period } = this.props

        let data = selectedPortfolioItem.historical.slice(0, period)

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

        return(

            <div className="chart" ref={el => (this.container = el)}>

                {dimensions && this.props.selectedPortfolioItem.historical && this.renderContent()}

            </div>
        )
    }
}

const mapStateToProps = ({ Portfolio_state }) => {

    return {
      historicalPrices : Portfolio_state.selectedPortfolioItem.historical,
      selectedPortfolioItem : Portfolio_state.selectedPortfolioItem
    };
};
  
export default connect(
    mapStateToProps,
    null
)(PerformanceChart);