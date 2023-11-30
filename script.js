// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var allClasses = [];

var allElements = document.querySelectorAll('*');

for (var i = 0; i < allElements.length; i++) {
  var classes = allElements[i].className.toString().split(/\s+/);
  for (var j = 0; j < classes.length; j++) {
    var cls = classes[j];
    if (cls && allClasses.indexOf(cls) === -1)
      allClasses.push(cls);
  }
}
console.log(allClasses);


$( "li.third-item" ).siblings().css( "background-color", "red" );

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  var timeDisplayEl = $('#time-display');
function displayTime()
{
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh::mm:ss a');
  timeDisplayEl.text(rightNow);
  setInterval(displayTime,1000);

}

displayTime();

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")) 
//$( "li.third-item" ).siblings().css( "background-color", "red" );
var currentHour = moment().hour();
console.log(currentHour);
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  var timeDisplayEl = $('#time-display');
function displayTime()
{
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
  setInterval(displayTime,1000);

   // Create a variable and use query selector to display current date and time
   var displayTime = document.querySelector("#currentDay");

   // Use dayjs to display current date and time in given format
   var currentTime = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");
 
   //displayTime.textContent = currentTime;

   // Assign saveBtn click listener for user input and get row id and save to local storage
   $(".saveBtn").on("click", function () {

    console.log("----"+document.getElementById('hh').getAttribute.val);


     var text = $(this).siblings(".description").val();
console.log(text+"------------");
     var time = $(this).parent().attr("id");
    console.log(time+" eeeeee")
   
 
     // Save text in local storage
     localStorage.setItem(time, text);
   });
 
   function hourTracker() {
     // Get current number of hours.
     var currentHour = dayjs().hour();
   // $("#i_am_a_href").attr('id').split('_')[1] // will return 'am'
     // Loop over time blocks
     $(".time-block").each(function () {
       var blockHour = ($(this).attr("id").split("-")[1]);
       console.log("---"+blockHour);
       // Check the time and add the classes for background indicators
       if (blockHour < currentHour) {
         $(this).addClass("past");
       } else if (blockHour === currentHour) {
         $(this).removeClass("past");
         $(this).addClass("present");
       } else {
         $(this).removeClass("past");
         $(this).removeClass("present");
         $(this).addClass("future");
       }
     });
   }
   hourTracker();
 
 // Create a function to loop over time blocks to retrieve and display data from local storage
 function displayText() {
   // Loop over time blocks
   $(".time-block").each(function () {
     // var blockHour = parseInt($(this).attr("id").split("-")[1]);
     var blockHour = $(this).attr("id");
     $(this).children(".description").val(localStorage.getItem(blockHour));
   });
 }
 displayText();

}

displayTime();
});
/*
 <!-- Example of a past time block. The "past" class adds a gray background color. -->
      <div id="hour-9" class="row time-block past">
        <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>

      <!-- Example of a a present time block. The "present" class adds a red background color. -->
      <div id="hour-10" class="row time-block present">
        <div class="col-2 col-md-1 hour text-center py-3">10AM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>

      <!-- Example of a future time block. The "future" class adds a green background color. -->
      <div id="hour-11" class="row time-block future">
        <div class="col-2 col-md-1 hour text-center py-3">11AM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>

*/
});
