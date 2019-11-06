'use strict;'

var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var hours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM']


function getAvgCustAndTotal(city, citysArr) {
    var sum = 0;
    for (var i = 0; i < hours.length; i++) {
        var avgCustomersPerHour = city.howManyCustomers();
        var randomCookie = Math.ceil(city.avgCookieSale * avgCustomersPerHour)
        citysArr.push(randomCookie);
        sum += randomCookie;
    }
    citysArr.push(sum);
    
    
}


function appendToHTML(data, eleTypeVar, eleType, array, HTMLtag) {
    data = document.getElementById(HTMLtag);
    
    for (var i = 0; i < array.length; i++) {
        eleTypeVar = document.createElement(eleType);
        eleTypeVar.textContent = array[i];
        data.append(eleTypeVar);
    }
}
appendToHTML('hourData', 'hrHeader', 'th', hours, 'hour-row');

var dailyTotalData = document.getElementById('hour-row')
var th = document.createElement('th');
th.textContent = 'Daily Location Total';
dailyTotalData.append(th);
/*TO DO LAB 07 
create and append Daily Location Total for bottom row

*/

// constructor
function City(minCustomers, maxCustomers, avgCookieSale) {
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookieSale = avgCookieSale;
    this.howManyCustomers = function () {
        var random = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
        return random;
    }
    this.cookiesSoldPerHour = [];
}

// seattle start
var seattle = new City(23, 65, 6.3, 'Seattle');
var seaCookies = seattle.cookiesSoldPerHour;

getAvgCustAndTotal(seattle, seaCookies);
appendToHTML('seattleData', 'bullet', 'td', seaCookies, 'sea-row');

//seattle end
//tokyo start
var tokyo = new City(3, 24, 1.2, 'Tokyo');
var tokCookies = tokyo.cookiesSoldPerHour;

getAvgCustAndTotal(tokyo, tokCookies);
appendToHTML('tokyoData', 'bullet', 'td', tokCookies, 'tok-row');

// //end tokyo

// //dubai start
var dubai = new City(11, 38, 3.7, 'Dubai');
var dubCookies = dubai.cookiesSoldPerHour;

getAvgCustAndTotal(dubai, dubCookies);
appendToHTML('dubaiData', 'bullet', 'td', dubCookies, 'dub-row');
// //end dubai

// //paris start
var paris = new City(20, 38, 2.3, 'Paris');
var parCookies = paris.cookiesSoldPerHour;

getAvgCustAndTotal(paris, parCookies);
appendToHTML('parisData', 'bullet', 'td', parCookies, 'par-row');
// //end paris

// //start lima
var lima = new City(2, 16, 4.6, 'Lima')

var limCookies = lima.cookiesSoldPerHour;

getAvgCustAndTotal(lima, limCookies);
appendToHTML('limaData', 'bullet', 'td', limCookies, 'lim-row');




var totalPerHour = {
    total: [],
    getTotalHour: function () {
        var hourlyYield;
        for (i = 0; i < hours.length; i++) {
            hourlyYield = 0;
            hourlyYield = hourlyYield + seaCookies[i] + tokCookies[i] + dubCookies[i] + parCookies[i] + limCookies[i];
            this.total.push(hourlyYield);
        }
    }
};
totalPerHour.getTotalHour();   
console.log(totalPerHour.total);    
appendToHTML('totalData', 'bullet', 'td', totalPerHour.total, 'store-total');

//needs to iterate over all city arrays at once, returning the sum of all current indexs in all arrays then moving on.
