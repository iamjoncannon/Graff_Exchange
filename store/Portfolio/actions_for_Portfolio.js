import actions from "./action_constants_for_Portfolio"

const hydratePortfolio = (payload) => {
      	return {
      		type: actions.HYDRATEPORTFOLIO,
      		payload
      	}
      }

const makeTrade = (payload) => {
      	return {
      		type: actions.MAKETRADE,
      		payload
      	}
      }

const getOnePrice = (payload) => {
      	return {
      		type: actions.GETONEPRICE,
      		payload
      	}
      }

const getOpeningPrice = (payload) => {
      	return {
      		type: actions.GETOPENINGPRICE,
      		payload
      	}
      }

export default {
	hydratePortfolio,
	makeTrade,
	getOnePrice,
	getOpeningPrice,
}