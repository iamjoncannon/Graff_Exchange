import React from 'react';
import { connect } from "react-redux";
import symbolHash from './symbolHash.json'
import  actions  from "../../store/Portfolio/actions_for_Portfolio.js"

class Socket extends React.Component {
 
  constructor(props) {
    super(props);
    
    this.state ={ 

    }
  }

  connectToSocket = () => {

    const socket = io('https://ws-api.iextrading.com/1.0/last')
    
    const myBook = []
    
    for (let stock in this.props.portfolio){

      myBook.push(this.props.portfolio[stock].symbol)
    }

    socket.on('connect', () => {

      myBook.forEach( stock=>{
        socket.emit('subscribe', stock)
      })
    })

    socket.on('message', message => {
    
      this.props.handleSocketMessage(JSON.parse(message))
    })

    this.setState({ socket, portfolioSize: Object.keys(this.props.portfolio).length })
  }

  async componentDidUpdate(){

    let currentPortfolio = Object.keys(this.props.portfolio).length

    let portfolioChanged = currentPortfolio !== this.state.portfolioSize

    if( portfolioChanged ){

      // otherwise we get a memory leak
      await this.state.socket.close()
      
      this.connectToSocket()
    }
  }

  componentDidMount(){
    this.connectToSocket()
  }

  render() {
    return (
      <div style={{height: "0", width: "0"}}></div>
    );
  }
}

const mapStateToProps = ({ Portfolio_state }) => {
    return {
      portfolio : Portfolio_state.portfolio,
    };
  };
  
const mapDispatchToProps = dispatch => ({

    handleSocketMessage: (message)=>dispatch(actions.handleSocketMessage(message))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Socket);