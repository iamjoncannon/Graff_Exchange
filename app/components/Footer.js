import React from "react";

const Footer = (props) => {

    return (

        <footer>
                <a href="https://github.com/iamjoncannon/GopherExchange/tree/master/app" target="_blank"> 
                    <img src="https://jayceecodesphotos.s3.amazonaws.com/react.png" /> 
                </a>
                
                <a href="https://github.com/iamjoncannon/GopherExchange/tree/master/store" target="_blank"> 
                
                    <img src="https://jayceecodesphotos.s3.amazonaws.com/redux.png" />
                </a>

                <a href="https://github.com/iamjoncannon/GopherExchange/tree/master/scss" target="_blank"> 

                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2000px-Sass_Logo_Color.svg.png" style={{backgroundColor: "white", borderRadius: "10px"}}/>
                </a>
                
                <a href="https://github.com/iamjoncannon/GopherExchangeAPI/tree/master/src" target="_blank"> 

                    <img src="https://www.idmworks.com/wp-content/uploads/2015/04/golang-250.png" />
                </a>

                <a href="https://github.com/iamjoncannon/GopherExchangeAPI/tree/master/src/dbqueries" target="_blank"> 
                    <img src="https://jayceecodesphotos.s3.amazonaws.com/postgres.png" />
                </a>
                
                <a href="https://github.com/iamjoncannon/GopherExchangeAPI/tree/master/deploy" target="_blank"> 

                    <img src="https://jayceecodesphotos.s3.amazonaws.com/aws.png" style={{borderRadius: "10px"}}/>
                </a>

        </footer>
    )
}

export default Footer