// consts/vars

let timeSlotIds = document.querySelectorAll(["#hs0", "#hs1", "#hs2", "#hs3", "#hs4", "#hs5", "#hs6", "#hs7", "#hs8", "#hs9", "#hs10", "#hs11", "#hs12", "#hs13", "#hs14", "#hs15", "#hs16", "#hs17", "#hs18", "#hs19", "#hs20", "#hs21", "#hs22", "#hs23", ]);

let slotArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

slotArray = timeSlotIds; 

let saveBtn = document.querySelectorAll(".saveBtn");

let currentHour = moment().format('HH');



//Displays today's date and time at the top of the planner, in the current day div.

$(document).ready(function () {
  $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));


  //Takes values assigned to the date divs in the html and assigns their colors based off the current time. ignore basically everything below here for now as it's not complete.

  if (slotArray < currentHour) {


    
  } else if (slotArray > currentHour) {
    
  } else {

  }



});

//Allows input in the fields created in the time slots to be saved to local storage.
$(".saveBtn").on("click"), function () {
  console.log("button works"); 
  //it won't log anything, unsure of why just yet. 
};



//Saves input into timeslots to the local html upon enter or button press.