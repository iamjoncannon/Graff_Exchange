import React from "react";
import { logoUrl } from "./utils"

const front_end_url = "https://github.com/iamjoncannon/Graff_Exchange"
const back_end_url = "https://github.com/iamjoncannon/Graff_Exchange_API"

const Footer = (props) => {

    return (

        <footer>
                <a href={front_end_url} target="_blank"> 
                    <img src="https://jayceecodesphotos.s3.amazonaws.com/react.png" /> 
                </a>
                
                <a href={front_end_url} target="_blank"> 
                
                    <img src="https://jayceecodesphotos.s3.amazonaws.com/redux.png" />
                </a>

                <a href={front_end_url} target="_blank"> 

                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2000px-Sass_Logo_Color.svg.png" style={{backgroundColor: "white", borderRadius: "10px"}}/>
                </a>

                <a href={back_end_url} target="_blank"> 

                    <img src={logoUrl} />
                </a>
                
                <a href={back_end_url} target="_blank"> 

                    <img src={"http://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png"} />
                </a>

                <a href={back_end_url} target="_blank"> 

                    <img src="https://cdn.iconscout.com/icon/free/png-512/redis-6-1175105.png" />
                </a>

                <a href={back_end_url} target="_blank"> 
                    <img src="https://jayceecodesphotos.s3.amazonaws.com/postgres.png" />
                </a>
                
                <a href={back_end_url} target="_blank"> 

                    <img src="https://jayceecodesphotos.s3.amazonaws.com/aws.png" style={{borderRadius: "10px"}}/>
                </a>

        </footer>
    )
}

export default Footer