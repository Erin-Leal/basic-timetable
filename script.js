// consts/vars

let timeSlotIds = $(["#0", "#1", "#2", "#3", "#4", "#5", "#6", "#7", "#8", "#9", "#10", "#11", "#12", "#13", "#14", "#15", "#16", "#17", "#18", "#19", "#20", "#21", "#22", "#23",]);

let saveBtn = $(".saveBtn");

let currentHour = moment().format('HH');

let storedItems = {

  twelveAm: "",
  oneAm: "",
  twoAm: "",
  threeAm: "",
  fourAm: "",
  fiveAm: "",
  sixAm: "",
  sevenAm: "",
  eightAm: "",
  nineAm: "",
  tenAm: "",
  elevenAm: "",
  twelvePm: "",
  onePm: "",
  twoPm: "",
  threePm: "",
  fourPm: "",
  fivePm: "",
  sixPm: "",
  sevenPm: "",
  eightPm: "",
  ninePm: "",
  tenPm: "",
  elevenPm: "",

};

//Displays today's date and time at the top of the planner, in the current day div.

$(document).ready(function () {
  $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'))


});

//Allows input in the fields created in the time slots to be saved to local storage.
$(".saveBtn").click(function () {

  localStorage.setItem("example", valueHere);

  //I know that I want to have the saveBtn function like so.
  //find the sibling textarea to it in the html, take the input value and move it to corresponding local storage. I have no clue how to do this and could not get a straight answer on how to set that up.

});

//Takes values assigned to the date divs in the html and assigns their colors based off the current time. ignore basically everything below here for now as it's not complete.
$(timeSlotIds).each(function () {
   //console.log ($(this));
   //I want to use the colorCheck function I commented out in here but it doesn't work and I'm not sure what exactly I need to do to fix that because I'm not sure how to get this to put out the proper number data. Attempts at parseInting the timeSlotIds variable results in NaN. I honestly don't know how to fix these things. I've combed over the class materials, done more google searches than I normally do in a month, and have overall exhausted my resources on this, my energy included. I would have started on this sooner if I had the chance but unfortunately I didn't. I'm probably just going to push this up and call it, as I'm not sure what else I can really do for now. 
});

/*function colorCheck() {
  if ($(this) = currentHour) {

    //console.log("present");

    $(this).addClass(".present");

  } else if ($(this) > currentHour) {

    //console.log("future");

    $(this).addClass(".future");

  } else {

    //console.log("past");

    $(this).addClass(".past");

  }
}*/