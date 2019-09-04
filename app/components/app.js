import React from 'react';
import { Route, withRouter } from 'react-router-dom'
import Landing from './Landing'
import Footer from './Footer'
import MainNav from './MainNav'

import IndivNav from './indiv/IndivNav'
import IndivPerf from './indiv/IndivPerf'
import IndivFin from './indiv/IndivFin'
import IndivNews from './indiv/IndivNews'
import IndivTrans from './indiv/IndivTrans'

import AllNav from './portfolio/AllNav'
import AllWatchlist from './portfolio/AllWatchlist'
import AllTrans from './portfolio/AllTrans'

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

        <Route path="/indiv" component={MainNav} />
        <Route path="/indiv" component={IndivNav} />

        <Route exact path="/indiv/perf" component={IndivPerf} />
        <Route exact path="/indiv/finan" component={IndivFin} />
        <Route exact path="/indiv/news" component={IndivNews} />
        <Route exact path="/indiv/trans" component={IndivTrans} />
         

        <Route path="/all" component={MainNav} />
        <Route path="/all" component={AllNav} />

        <Route path="/all/watchlist" component={AllWatchlist} />
        <Route path="/all/transactions" component={AllTrans} />

    </div>
  );
};

export default withRouter(App);