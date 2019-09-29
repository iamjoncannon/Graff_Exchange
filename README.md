# Graff Exchange

Fullstack application with data from web socket, SQL data store, external APIs, Redis cache

## Front End

- React, global state management with Redux
- Responsive design across mobile, tablet, desktop viewports, implemented in SASS with no CSS framework. 
- lazy loaded components to increase performance  
- socket connection to IEX api integrated into Redux store

Deployed: http://graff.joncannon.codes

## Back End

technologies: Node.js, GraphQL (Apollo client/server), Redis, PostgreSQL, AWS(EC2) 

Features:
- Authentication in GraphQL/Apollo Server via JWT
- trade mutation with "atomic" SQL transaction 
- data aggregated from PostgreSQL data store and external financial APIs 
- Redis caching with cache eviction strategy for each data source

Codebase for back-end API: https://github.com/iamjoncannon/Graff_Exchange_API
