alert('Szia! Adj meg két dátumot és megmondom hány nap van közöttük.');
var year1= prompt("Kérlek add meg az első dátum évét.");
var month1= prompt("Kérlek add meg az első dátum hónapját.");
var day1= prompt("Kérlek add meg az első dátum napját.");
var year2= prompt("Kérlek add meg a második dátum évét.");
var month2= prompt("Kérlek add meg a második dátum hónapját.");
var day2= prompt("Kérlek add meg a második dátum napját.");
var date1=year1+'.'+month1+'.'+day1+'.';
var date2=year2+'.'+month2+'.'+day2+'.';
var monthsInDays=[31,28,31,30,31,30,31,31,30,31,30,31];
/*
  FOR TESTING THE monthCounter
var monthsInDays=[1,2,3,4,5,6,7,8,9,10,11,12];*/
var monthCounter= 0;
if (year1>year2){

    for (var i=(month1); i>(month2); i--){
    monthCounter = monthCounter + monthsInDays[i-2];
    };
    var restDays= (year1-year2)*365+monthCounter+(day1-day2);

  } else if (year1<year2){

    for (var i=(month2); i>(month1); i--){
    monthCounter = monthCounter + monthsInDays[i-2];
    };
    var restDays= (year2-year1)*365+monthCounter+(day2-day1);

  } else if (month1>month2) {

    for (var i=(month1); i>(month2); i--){
    monthCounter = monthCounter + monthsInDays[i-2];
    };
    var restDays= (year1-year2)*365+monthCounter+(day1-day2);

  } else if (month1==month2) {

    var restDays= Math.abs(day2)-Math.abs(day1);

  } else {

    for (var i=(month2); i>(month1); i--){
    monthCounter = monthCounter + monthsInDays[i-2];
    };
    var restDays= (year2-year1)*365+monthCounter+(day2-day1);
  }

alert('Szóval a(z) '+date1+' és a(z) '+date2+' között pontosan '+ restDays+' nap van.');
console.log(restDays);
console.log(date1);
console.log(date2);
