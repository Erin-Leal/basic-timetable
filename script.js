// consts/vars

//Displays today's date and time at the top of the planner, in the current day div.

moment().format('MMMM Do YYYY, h:mm:ss a');

$(document).ready(function(){
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
  });

//Takes values assigned to the date divs in the html and assigns their colors based off the current time.

//Allows input in the fields created in the time slots.

//Saves input into timeslots to the local html upon enter or button press.