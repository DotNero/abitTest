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
        // console.log(dd+ mm+ year)

        // var d = new Date(year, month, day)
        const response = await axios.get('https://www.cbr.ru/scripts/XML_daily.asp?date_req='+ dd +'/' + mm + '/' + year)
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(response.data, 'text/xml');
        
        var rub_to_usd; 
        var valutes = xmlDoc.getElementsByTagName('Valute');
        for (var i = 0; i < valutes.length; i++) {
            if (valutes[i].getElementsByTagName('CharCode')[0].childNodes[0].nodeValue == 'USD') {
                rub_to_usd = valutes[i].getElementsByTagName('Value')[0].childNodes[0].nodeValue;
                break;
            }
        }
        // console.log(rub_to_usd)
        return(rub_to_usd)

    }
}

module.exports = new rubService();