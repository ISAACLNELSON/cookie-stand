'use strict;'

var target = document.getElementById('city-table')
var bottomRow = document.getElementById('store-total');
var td = document.createElement('td');
var th = document.createElement('th')
var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var hours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM']
var sixAM = [];
var sevenAM = [];
var eightAM = [];
var nineAM = [];
var tenAM = [];
var elevenAM = [];
var twelveAM = [];
var onePM = [];
var twoPM = [];
var threePM = [];
var fourPM = [];
var fivePM = [];
var sixPM = [];
var sevenPM = [];


function renderHourRow() {
    var tr = document.createElement('tr');
    th = document.createElement('th');
    th.textContent = '';
    tr.append(th);
    for (var i = 0; i < hours.length; i++) {
        th = document.createElement('th')
        th.textContent = hours[i];
        tr.append(th);
    }
    th = document.createElement('th');
    th.textContent = 'Daily Location Total';
    tr.append(th);
    target.append(tr);
}
renderHourRow();

function City(name, minCustomers, maxCustomers, avgCookieSale) {
    this.name = name;
    this.data = data;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookieSale = avgCookieSale;
    this.cookiesSoldPerHour = [];

    this.howManyCustomers = function () {
        var random = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
        return random;
    }

    this.getAvgCustAndTotal = function () {
        var sum = 0;

        for (var i = 0; i < hours.length; i++) {
            var avgCustomersPerHour = this.howManyCustomers();
            var randomCookie = Math.ceil(this.avgCookieSale * avgCustomersPerHour)
            this.cookiesSoldPerHour.push(randomCookie);
            sum += randomCookie;

            switch (i) {
                case 0:
                    sixAM.push(randomCookie);
                    break;
                case 1:
                    sevenAM.push(randomCookie);
                    break;
                case 2:
                    eightAM.push(randomCookie);
                    break;
                case 3:
                    nineAM.push(randomCookie);
                    break;
                case 4:
                    tenAM.push(randomCookie);
                    break;
                case 5:
                    elevenAM.push(randomCookie);
                    break;
                case 6:
                    twelveAM.push(randomCookie);
                    break;
                case 7:
                    onePM.push(randomCookie);
                    break;
                case 8:
                    twoPM.push(randomCookie);
                    break;
                case 9:
                    threePM.push(randomCookie);
                    break;
                case 10:
                    fourPM.push(randomCookie);
                    break;
                case 11:
                    fivePM.push(randomCookie);
                    break;
                case 12:
                    sixPM.push(randomCookie);
                    break;
                case 13:
                    sevenPM.push(randomCookie);
                    break;
            }
        }
        this.cookiesSoldPerHour.push(sum);


    }
    this.getAvgCustAndTotal();

    this.appendToHTML = function () {
        tr = document.createElement('tr');
        var tdName = document.createElement('td');
        tdName.textContent = this.name;
        tr.append(tdName);
        for (var j = 0; j < this.cookiesSoldPerHour.length; j++) {
            td = document.createElement('td');
            td.textContent = this.cookiesSoldPerHour[j];
            tr.append(td);
        }
        target.append(tr);
    }
    this.appendToHTML();
}


var seattle = new City('Seattle', 23, 65, 6.3);

var tokyo = new City('Tokyo', 3, 24, 1.2);
var dubai = new City('Dubai', 11, 38, 3.7);
var paris = new City('Paris', 20, 38, 2.3);
var lima = new City('Lima', 2, 16, 4.6)

var cities = [seattle, tokyo, dubai, paris, lima];

function getTotalHour() {
    total = [];
    function loopOverHour(hourArr) {
        var sum = 0;
        for (i = 0; i < sixAM.length; i++) {
            sum += hourArr[i];
        }
        total.push(sum);
    }
    loopOverHour(sixAM);
    loopOverHour(sevenAM);
    loopOverHour(eightAM);
    loopOverHour(nineAM);
    loopOverHour(tenAM);
    loopOverHour(elevenAM);
    loopOverHour(twelveAM);
    loopOverHour(onePM);
    loopOverHour(twoPM);
    loopOverHour(threePM);
    loopOverHour(fourPM);
    loopOverHour(fivePM);
    loopOverHour(sixPM);
    loopOverHour(sevenPM);
    tr = document.createElement('tr');
    td = document.createElement('td')
    td.textContent = 'Hourly Yield';
    tr.append(td)
    for (j = 0; j < total.length; j++) {
        td = document.createElement('td');
        td.textContent = total[j];
        tr.append(td);
    }
    
    bottomRow.append(tr);
    target.append(bottomRow)
}

function newCityRow() {
    var form = document.getElementById('city-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // alert(event.target.newCity.value);
        //  alert(event.target.minCust.value);
        //  alert(event.target.maxCust.value);
        //  alert(event.target.avgCust.value);
        var cityValue = event.target.newCity.value;
        var nextCity = new City(cityValue, parseInt(event.target.minCust.value), parseInt(event.target.maxCust.value), parseFloat(event.target.avgCust.value), 'city-table');
        getAvgCustAndTotal(cityValue, this.cookiesSoldPerHour);
        cities.push(nextCity);
    })
}

newCityRow();
getTotalHour(bottomRow);