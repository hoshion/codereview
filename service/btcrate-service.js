const axios = require('axios')

class BTCRateService {
  async btcRate () {
    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/UAH.json')

    return response.data
  }
}

module.exports = new BTCRateService()
