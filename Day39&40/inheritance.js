function teacher(subject, coordinatorName, noOfHours,noOfStudents){
    this.subject = subject;
    this.coordinatorName = coordinatorName;
    this.noOfHours = noOfHours;
    this.noOfStudents = noOfStudents;
}

var tolani = new teacher("networking", "Idris", 60, 25);
console.log("subject: " + tolani.subject + "\n coordinator Name: " + tolani.coordinatorName);