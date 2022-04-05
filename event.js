const EventEmiiter = require("events");
const event = new EventEmiiter();

event.emit("ButtonClicked", "LOL"); //THIS WILL NOT WORK.

event.on("ButtonClicked", function (par) {
    console.log("Your " + par + " btn has been clicked..");
});

event.on("ButtonClicked", function (par) {
    console.log("Your " + par + " btn has been clicked 2 time..");
});

event.on("ButtonClicked", function (par) {
    console.log("Your " + par + " btn has been clicked 3 time..");
});

event.emit("ButtonClicked", "LOL"); //1st parameter is the event name and 2nd is the paramters you pass in function above
