// consts/vars

let currentHour = moment().format('HH');
//console.log (currentHour);

let divHour = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
//console.log(divHour);

//Displays today's date and time at the top of the planner, in the current day div.

moment().format('MMMM Do YYYY, h:mm:ss a');

$(document).ready(function () {
  $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
});

//Takes values assigned to the date divs in the html and assigns their colors based off the current time.

//if (divHour === currentHour) {

//add .present class via .addClass

//} else if (divHour < currentHour) {

//add .past class

//} else //add .future class

//Allows input in the fields created in the time slots.

//Saves input into timeslots to the local html upon enter or button press.