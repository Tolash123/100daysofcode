var n = 2;
switch (n) {
    case 1:
        console.log("You have 1 new notification.");
        break;
    case 2:
        console.log("You have 2 new notifications.");
        break;
    case 3:
        console.log("You have 3 new notifications. ");
        break;
    default:
        console.log("You have a notification. ");
}

console.log("\n")

var Day = "wednesday";
switch(Day) {
  case "sunday":
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
   console.log("it is work days");
   break;
  default:
   console.log("Happy weekend");
   break;
}
