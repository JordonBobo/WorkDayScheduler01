


var DateTime = luxon.DateTime;
var localTime = DateTime.local();
var rightNow = localTime.c.hour;


console.log(rightNow)   


//Header date label
var currentDate = localTime.c.month + "/" + localTime.c.day + "/" + localTime.c.year;
$("#currentDate").text(currentDate);




var times = [6,7,8,9,10,11,12,13,14,15,16,17,18];

//Assemles the time slots dynamically
for (let i = 0; i < times.length; i++) {
    // AM time slots
    if (times[i] < 12){
        var morning = times[i] + " AM";
        addTime(morning, times[i]); 
        console.log(times[i]);            //This consol log works, but none after
    }
    //pm time slots
    else if (times[i] === 12) {
        var noon = "12 Noon";
         addTime(noon, times[i]);
    }
    else if (times[i] > 12) {
        var afternoon = times[i] - 12 + " PM";
        console.log(afternoon);  
         addTime(afternoon, times[i]);
    }


//time slot, x is the text displayed, y is the ID
function addTime(x, y){
    var timeSlot = $("<div>").text(x);
    console.log(timeSlot);                     //This console log is not being shown
    $("#calendar").append(timeSlot);
    $(timeSlot).attr("id", x);
    relativeTime(y, timeSlot);
//Add save button
    var timeSlot3 = $('<input>').attr({'type': 'button', 'value': 'save', 'class': 'saveBtn'});
    $(timeSlot).append(timeSlot3);

}




//Decides if the slot is in the past present or future.
function relativeTime (y,a) {
    // past
        if (y < rightNow) {
            addTextArea("past", a);
        }
    //present
        else if (y === rightNow) {
           addTextArea("present", a);
        }
    //Future
        else {
            addTextArea("future", a);
        }

    }
    
    
    
    //text area
    function addTextArea(z,b) {
        var timeSlot2 = $("<textarea>");
        $(b).append(timeSlot2);
        timeSlot2.attr("class", z);
    }
}













//var newItem = JSON.stringify(rightNow);
//var newElement = $("<div>").text(newItem)
//$("#calendar").append(newItem)

