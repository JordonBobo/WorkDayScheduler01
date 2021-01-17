


var DateTime = luxon.DateTime;
var localTime = DateTime.local();
var rightNow = localTime.c.hour;





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
    }
    //pm time slots
    else if (times[i] === 12) {
        var noon = "12 Noon";
         addTime(noon, times[i]);
    }
    else if (times[i] > 12) {
        var afternoon = times[i] - 12 + " PM";
         addTime(afternoon, times[i]);
    }


//time slot, x is the text displayed, y is the ID
function addTime(x, y){
    var timeSlot = $("<div>").text(x);
    $("#calendar").append(timeSlot);
    $(timeSlot).attr("id", "timeSlot" + y);
    relativeTime(y, timeSlot);
//Add save button
    // var timeSlot3 = $('<input>').attr({'id': "timeSlot" + y, 'type': 'button', 'value': 'save', 'class': 'saveBtn'});
    // $(timeSlot).append(timeSlot3);

}




//Decides if the slot is in the past present or future.
function relativeTime (y,a) {
    // past
        if (y < rightNow) {
            addTextArea("past", a, y);
        }
    //present
        else if (y === rightNow) {
           addTextArea("present", a, y);
        }
    //Future
        else {
            addTextArea("future", a, y);
        }

    }
    
    
    
    //text area
    function addTextArea(z,b, ID) {
        var timeSlot2 = $("<textarea>");
        $(b).append(timeSlot2);
        timeSlot2.attr({"class": z, "id" : "text" + ID});
        // console.log(timeSlot2.attr('id'))
        timeSlot2.text( localStorage.getItem(timeSlot2.attr('id')))
        // console.log(localStorage.getItem(timeSlot2.attr('id')))
    }
}

$(".saveBtn").on("click", function() {
    for (let i = 0; i < times.length; i++) {
        var eachHour = eval("$('#text" + times[i] + "')");
        var eachHour2 = "text" + times[i];
        var savedText = eachHour.val();
        console.log(times[i])
        localStorage.setItem (eachHour2, savedText);
    }
  });


  $(".clearBtn").on("click", function() {
    for (let i = 0; i < times.length; i++) {
        var eachHour = eval("$('#text" + times[i] + "')");
        var eachHour2 = "text" + times[i];
        eachHour.text("")
        // console.log(times[i])
        localStorage.removeItem(eachHour2)
    }
  });






//var newItem = JSON.stringify(rightNow);
//var newElement = $("<div>").text(newItem)
//$("#calendar").append(newItem)

