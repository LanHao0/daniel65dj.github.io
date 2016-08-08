
let monthNames = new Array( "01","02","03","04","05","06","07","08","09","10","11","12");
let now = new Date();
thisYear = now.getYear();
if(thisYear < 1900) {thisYear += 1900;} // corrections if Y2K display problem
document.write(now.getDate() + "." + monthNames[now.getMonth()] + "." + thisYear + "&nbsp; �.");
// -->
