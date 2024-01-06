// const { DOMParser, XMLSerializer } = require('@xmldom/xmldom')
const { DOMParser, XMLSerializer } = require('xmldom');
const axios = require('axios').default

// const xmlparser = require('xmlparser')

// var express = require('express')
// var xmlparser = require('express-xml-bodyparser')

class rubService{

    async getDollar(day, month, year){
        // try{
        var dd = 0
        var mm = 0
        if (day < 10) dd = '0' + day;
        else dd = day;
        if (month < 10) mm = '0' + month;
        else mm = month;
        console.log(dd+ mm+ year)

        // var d = new Date(year, month, day)
        const response = await axios.get('https://www.cbr.ru/scripts/XML_daily.asp?date_req='+ dd +'/' + mm + '/' + year)
        console.log(response)
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(response, 'text/xml');
        var dollar = xmlDoc.querySelectorAll('#R01235');
        const value = dollar.XMLSerializer()
        
        console.log(value)
        // console.log(day, month, year)
        // return {day: day,
        //         month: month,
        //         year: year};
        // // }
        
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

module.exports = new rubService();