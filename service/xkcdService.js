const axios = require('axuis').default

class xkcdService{

    async getData(id){

        await axios.get('/https://xkcd.com/${id}/info.0.json')
         .then(function (response) {
            return response
         })
          .catch(function (error) {
            return error
          })
    }
}

module.exports = new xkcdService();