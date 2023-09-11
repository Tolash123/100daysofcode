var teacher = {
    subject: "network",
    coordinatorName: "Amal",
    NoofHours: "60",
    noofstudents: "25",
    get getSubject(){
        return this.subject;
    },
    set setSubject(value){
        this.subject = value;
    }
};
teacher.setSubject = "computer";

console.log(teacher);