import React from 'react';

const dummyData = {
    thing : 'value',
    anotherThing : 'another value',
    thing2 : 'value',
    anotherThing2 : 'another value',
    thing3 : 'value',
    anotherThing3 : 'another value',
    thing4 : 'value',
    anotherThing4 : 'another value',
    thing5 : 'value',
    anotherThing5 : 'another value',
    thing6 : 'value',
    anotherThing6 : 'another value',
    thing7 : 'value',
    anotherThing7 : 'another value',
    thing8 : 'value',
    anotherThing8 : 'another value',
    athing : 'value',
    aanotherThing : 'another value',
    athing2 : 'value',
    aanotherThing2 : 'another value',
    athing3 : 'value',
    aanotherThing3 : 'another value',
    athing4 : 'value',
    anotherThing4 : 'another value',
    athing5 : 'value',
    aanotherThing5 : 'another value',
    athing6 : 'value',
    aanotherThing6 : 'another value',
    athing7 : 'value',
    aanotherThing7 : 'another value',
    athing8 : 'value',
    aanotherThing8 : 'another value',
}

export default class IndivFin extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount(){

  }

  render() {

    return (

      <div className="indiv-fin indiv-container">
        <span>Q4 Financials</span>
        {Object.entries(dummyData).map(item=>{
          
          return(

            <div>
                <span>
                  {item[0]}
                </span>
              
                <span>
                  {item[1]}
                </span>
            </div>
          )
        })}

      </div>
    );
  }
}