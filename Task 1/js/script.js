// З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.

//Введення величин
let firstChildName = prompt ("Введіть ім'я першої дитини:", "Петро");
let candyFirstChild = parseInt(prompt("Введіть кількість цукерок для першої дитини:", "5"));
let secondChildName = prompt ("Введіть ім'я другої дитини:", "Марія");
let candySecondChild = parseInt(prompt("Введіть кількість цукерок для другої дитини:", "5"));

//логічні операції
if (candyFirstChild > candySecondChild)
	document.write (`
	<p>${firstChildName} має більшу кількість цукерок.</p>
`);
else if (candySecondChild > candyFirstChild)
	document.write (`
	<p>${secondChildName} має більшу кількість цукерок.</p>
	`);
else if (candyFirstChild === candySecondChild)
alert ("Обидві дитини мають однакову кількість цукерок!")