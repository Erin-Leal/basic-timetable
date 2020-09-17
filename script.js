// consts/vars

let timeSlotIds = $(["#0", "#1", "#2", "#3", "#4", "#5", "#6", "#7", "#8", "#9", "#10", "#11", "#12", "#13", "#14", "#15", "#16", "#17", "#18", "#19", "#20", "#21", "#22", "#23",]);

let saveBtn = $(".saveBtn");

let currentHour = moment().format('HH');



//Displays today's date and time at the top of the planner, in the current day div.

$(document).ready(function () {
  $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

  //Takes values assigned to the date divs in the html and assigns their colors based off the current time. ignore basically everything below here for now as it's not complete.
  parseInt(timeSlotIds);
  console.log(parseInt(timeSlotIds));
  for (let i = 0; i < array.length; i++) {
    
    //parseInt(timeSlotIds);
    //console.log(parseInt(timeSlotIds));

    if (timeSlotIds === currentHour) {
      
        $(this).addClass(".present");

    } else if (timeSlotIds > currentHour){
      
      $(this).addClass(".future");

    } else {

      $(this).addClass(".past");

    }
    
  }

});

//Allows input in the fields created in the time slots to be saved to local storage.
$(".saveBtn").click(function () {
  console.log("button works"); 
});



//Saves input into timeslots to the local html upon enter or button press.