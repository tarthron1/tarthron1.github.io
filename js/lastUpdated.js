document.getElementById("lastUpdated").innerHTML = "Last Updated: " + document.lastModified;
var date = new Date();
var stringDate = date.getFullYear().toString();
document.getElementById("copyRightInfo").innerHTML =  "&#169; " + stringDate + " Kyle Loertscher | Utah | <a href='https://www.byui.edu/online'>BYUI Online Learning</a>"