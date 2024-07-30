//З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

let userAge = parseInt (prompt("Введіть свій вік:", "25"));
const maxChildAge = 6;
const maxPupilAge = 17;
const maxStudentAge = 24;
const maxWorkerAge = 55;
const maxSeniorAge = 90;

if (userAge <= maxChildAge) {
	alert ("Це дитина")
}
else if (userAge <=maxPupilAge) {
	alert ("Це школяр.")
}

else if (userAge <=maxStudentAge) {
	alert ("Це студент.")
}

else if (userAge <=maxWorkerAge) {
	alert ("Це працівник.")
}

else if (userAge <=maxSeniorAge) {
	alert ("Це пенсіонер.")
}
