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

const handleSocketMessage = (payload) => {
      	return {
      		type: actions.HANDLESOCKETMESSAGE,
      		payload
      	}
      }

const handleNews = (payload) => {
      	return {
      		type: actions.HANDLENEWS,
      		payload
      	}
      }

const handleFinancials = (payload) => {
      	return {
      		type: actions.HANDLEFINANCIALS,
      		payload
      	}
      }

const handleHistoricalPrice = (payload) => {
      	return {
      		type: actions.HANDLEHISTORICALPRICE,
      		payload
      	}
      }

export default {
	hydratePortfolio,
	makeTrade,
	getOnePrice,
	getOpeningPrice,
	handleSocketMessage,
	handleNews,
	handleFinancials,
	handleHistoricalPrice,
}