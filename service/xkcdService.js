const axios = require('axios').default

class xkcdService{

    async getData(id){
        // try{
        const response = await axios.get('https://xkcd.com/'+ id +'/info.0.json')
        // console.log(response.data)
        const {day, month, year, img} = response.data
        // console.log(day, month, year)
        return {day: day,
                month: month,
                year: year,
                img: img};
        // }
        
        // catch(error){
        //   // console.error(error);
        // }
        //  .then(function (response) {
        //     console.log(response)
        //     return response.status
        //  })
        //   .catch(function (error) {
        //     console.log(error)
        //   })
    }
}

module.exports = new xkcdService();