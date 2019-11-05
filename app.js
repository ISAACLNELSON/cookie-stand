'use strict;'

var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var hours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM']

var seattle = {
    minCustomers: 23,
    maxCustomers: 65,
    avgCookieSale: 6.3,
    howManyCustomers: function () {
        var random = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
        return random;
    },
    cookiesSoldPerHour: ['Seattle']
};
var seaCookies = seattle.cookiesSoldPerHour;
var sum = 0;

for (var seaIndex = 0; seaIndex < hours.length; seaIndex++) {
    var avgCustomersPerHour = seattle.howManyCustomers();
    var randomCookie = Math.ceil(seattle.avgCookieSale * avgCustomersPerHour)
    seaCookies.push(`${hours[seaIndex]}: ${randomCookie} cookies`);
    sum += randomCookie; 
}
seaCookies.push(`Total: ${sum} cookies`);
var seattleData = document.getElementById('salmon');
for(i = 0; i < seaCookies.length; i++){
    var bullet = document.createElement('li'); 
    bullet.textContent = seaCookies[i];
    seattleData.append(bullet);
}
//end seattle
//tokyo start
var tokyo = {
    minCustomers: 3,
    maxCustomers: 24,
    avgCookieSale: 1.2,
    howManyCustomers: function () {
        var random = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
        return random;
    },
    cookiesSoldPerHour: ['Tokyo']
}
var tokCookies = tokyo.cookiesSoldPerHour;
var sum = 0;
for (var tokIndex = 0; tokIndex < hours.length; tokIndex++) {
    var avgCustomersPerHour = tokyo.howManyCustomers();
    var randomCookie = Math.ceil(tokyo.avgCookieSale * avgCustomersPerHour)
    tokCookies.push(`${hours[tokIndex]}: ${randomCookie} cookies`);
    sum += randomCookie; 
}
tokCookies.push(`Total: ${sum} cookies`);
var tokyoData = document.getElementById('salmon');
for(i = 0; i < tokCookies.length; i++){
    var bullet = document.createElement('li'); 
    bullet.textContent = tokCookies[i];
    tokyoData.append(bullet);
}
//end tokyo
//dubai start
var dubai = {
    minCustomers: 11,
    maxCustomers: 38,
    avgCookieSale: 3.7,
    howManyCustomers: function () {
        var random = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
        return random;
    },
    cookiesSoldPerHour: ['Dubai']
}
var dubCookies = dubai.cookiesSoldPerHour;
var sum = 0;
for (var dubIndex = 0; dubIndex < hours.length; dubIndex++) {
    var avgCustomersPerHour = dubai.howManyCustomers();
    var randomCookie = Math.ceil(dubai.avgCookieSale * avgCustomersPerHour)
    dubCookies.push(`${hours[dubIndex]}: ${randomCookie} cookies`);
    sum += randomCookie; 
}
dubCookies.push(`Total: ${sum} cookies`);
var dubaiData = document.getElementById('salmon');
for(i = 0; i < dubCookies.length; i++){
    var bullet = document.createElement('li'); 
    bullet.textContent = dubCookies[i];
    dubaiData.append(bullet);
}
//end dubai
//paris start
var paris = {
    minCustomers: 20,
    maxCustomers: 38,
    avgCookieSale: 2.3,
    howManyCustomers: function () {
        var random = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
        return random;
    },
    cookiesSoldPerHour: ['Paris']
}
var parCookies = paris.cookiesSoldPerHour;
var sum = 0;
for (var parIndex = 0; parIndex < hours.length; parIndex++) {
    var avgCustomersPerHour = paris.howManyCustomers();
    var randomCookie = Math.ceil(paris.avgCookieSale * avgCustomersPerHour)
    parCookies.push(`${hours[parIndex]}: ${randomCookie} cookies`);
    sum += randomCookie; 
}
parCookies.push(`Total: ${sum} cookies`);
var parisData = document.getElementById('salmon');
for(i = 0; i < parCookies.length; i++){
    var bullet = document.createElement('li'); 
    bullet.textContent = parCookies[i];
    parisData.append(bullet);
}
//end paris
//start lima
var lima = {
    minCustomers: 2,
    maxCustomers: 16,
    avgCookieSale: 4.6,
    howManyCustomers: function () {
        var random = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
        return random;
    },

    cookiesSoldPerHour: ['Lima']
}
var limCookies = lima.cookiesSoldPerHour;
var sum = 0;
for (var limIndex = 0; limIndex < hours.length; limIndex++) {
    var avgCustomersPerHour = lima.howManyCustomers();
    var randomCookie = Math.ceil(lima.avgCookieSale * avgCustomersPerHour)
    limCookies.push(`${hours[limIndex]}: ${randomCookie} cookies`);
    sum += randomCookie; 
}
limCookies.push(`Total: ${sum} cookies`);
var limaData = document.getElementById('salmon');
for(i = 0; i < limCookies.length; i++){
    var bullet = document.createElement('li'); 
    bullet.textContent = limCookies[i];
    limaData.append(bullet);
}