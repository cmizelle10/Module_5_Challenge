// Create currentDay and current Time variables using moment.js
// These variables will allow me to color the time blocks accordingly and display current date and time
var currentDay = moment().format("dddd, MMM Do YYYY, h:mma");
var currentTime = moment().hour();
// Use jQuery to update text of currentDay id
$("#currentDay").text(currentDay);
// Use jQuery to trigger function as soon as html document is loaded
$(document).ready(function() {
                // Use jQuery to listen for click on saveBtn to trigger anonymous function
           $(".saveBtn").on("click", function () {       
            // Use jQuery to create text and time variables
            // When saveBtn is clicked, get the value of the sibling with the "description" class and assign that to text variable
               var text = $(this).siblings(".description").val();
               // When saveBtn is clicked, get the value of the parent ("timeBlock" class) id. 
               // It will be something like "hour9", "hour10", etc. Assign this value to time variable
               var time = $(this).parent().attr("id");
               // Save in local storage. The variable time will be the key and the variable text will be the value
               localStorage.setItem(time, text);
           })
            // Use jQuery each to loop over each time block with anonymous function
            // Using the currentTime variable that we created, evaluate whether the time block is past, present or future
            // If past, color grey. If present, color red. If future, color green
               $(".time-block").each(function () {
                // Create blockTime variable. For each time block, parse the id ("hour9", "hour10", etc.) using "hour" as the delimiter.
                // Since "hour" will be taken out, the first element will be a blank string, so we will grab the second element in array.
                var blockTime = parseInt($(this).attr("id").split("hour")[1]);
                // Evaluate blockTime and color row accordingly
                if (blockTime < currentTime) {
                    $(this).addClass("past");
                }
                else if (blockTime === currentTime) {
                    $(this).addClass("present");
                }
                else {
                    $(this).addClass("future");
                }
            })
        //    Using localStorage, load any saved data so if page is refreshed, the text descriptions will be saved from before
           $("#hour9 .description").val(localStorage.getItem("hour9"));
           $("#hour10 .description").val(localStorage.getItem("hour10"));
           $("#hour11 .description").val(localStorage.getItem("hour11"));
           $("#hour12 .description").val(localStorage.getItem("hour12"));
           $("#hour13 .description").val(localStorage.getItem("hour13"));
           $("#hour14 .description").val(localStorage.getItem("hour14"));
           $("#hour15 .description").val(localStorage.getItem("hour15"));
           $("#hour16 .description").val(localStorage.getItem("hour16"));
           $("#hour17 .description").val(localStorage.getItem("hour17"));
});
