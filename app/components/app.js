import React from 'react';
import { Route, withRouter } from 'react-router-dom'
import Landing from './Landing'
import Footer from './Footer'
// import Navbar from './components/Navbar';

/*

Use RR instead of a nav state slice to manage navigation

* NavBar renders with every path 
  - NavBar alters selection appearance based on RR props

* Individual 
  - IndivNav component includes subnav bars and the trade modal
    - SubNav alters selection appearance based on RR props
  - Performance, Financials, News, Trans are subpages that render
    below the navs, or, the navs use absolute/fixed positioning
    and render order doesn't matter (?) we'll see 

* Portfolio
  - /all path renders the nav and WatchList
  - /all/trans renders nav with the trans component

The trans component seems like its the same for both, can use RR 
props to hydrate component properly if all goes well

*/

const App = () => {
  return (

    <div className="app-container">
  
        <Route exact path="/" component={Landing} />
        <Route exact path="/" component={Footer} />

        {/*
        

        <Route path="/" component={NavBar} />

        <Route path="/indiv" component={IndivNav} />
        <Route exact path="/indiv" component={Performance} />
        <Route exact path="/indiv/fin" component={Financials} />
        <Route exact path="/indiv/news" component={News} />
        <Route exact path="/indiv/trans" component={Trans} />

        <Route path="/all" component={PortNav} />

        <Route exact path="/all" component={WatchList} />
        <Route exact path="/all/trans" component={Trans} />

        

         */}
    </div>
  );
};

export default withRouter(App);