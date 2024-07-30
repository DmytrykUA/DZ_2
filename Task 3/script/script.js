//Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

const minimum = 1;
const maximum = 5;

alert ("Спробуйте відгадати число в діапазоні від 1 до 5. Ви матимете дві спроби.")
let userNumber = (prompt("Введіть число, яке на Вашу думку загадав комп'ютер.", "3")) 
let randomNumber = minimum + Math.floor(Math.random() * (maximum - minimum + 1))

if (userNumber === randomNumber)
   document.write(`<p>Вітаємо, ви вгадали номер. Випадковий номер: ${randomNumber}</p>`)
else {
   alert('На жаль, ви не вгадали, спробуйте ще раз, у вас залишилась 1 спроба')
   let userNumber = parseFloat(prompt('Спроба №2. Введіть номер від 1 до 5', '1'))
   if (userNumber === randomNumber)
      document.write(`<p>Вітаємо, ви вгадали номер. Випадковий номер: ${randomNumber}</p>`)
   else
      document.write(`<p>На жаль, ви не вгадали. Ваші спроби закінчилися. Випадковий номер: ${randomNumber}</p>`)
}
