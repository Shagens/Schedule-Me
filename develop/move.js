var ZonedDateTime = document.querySelector('.zoned')
var DateTimeFormatter = document.querySelector('.format')

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

var tasks = {
    "16": [],
    "17": [],
    "18": [],
    "19": [],
    "20": [],
    "21": [],
    "22": [],
    "23": [],
    "24": []
};

var list = JSON.parse(localStorage.getItem('todolist')) || [];

let ZonedDateTime = ZonedDateTime.now();
System.out.println("Current Zoned Date & Time: " + now);
let DateTimeFormatter = DateTimeFormatter.ofPattern("EEEE, MMMM dd, yyyy HH:mm:ss Z");
System.out.println("Current Formatted Date & Time: " + now.format(formatter));
