// Вводимо необхідні дані
let WeekDayNumber = parseInt(prompt('Просимо ввести номер дня тижня від 1 до 7', '3'))


// Виводимо результат
if (WeekDayNumber <= 0 || WeekDayNumber > 7)
  document.write(`
  <p>Введіть корректне значення.</p>
  `)
else
  if (WeekDayNumber === 1)
    document.write(`
  <p>Це понеділок.</p>
  `)
  else
    if (WeekDayNumber === 2)
      document.write(`
  <p>Це вівторок.</p>
  `)
    else
      if (WeekDayNumber === 3)
        document.write(`
  <p>Це середа.</p>
  `)
      else
        if (WeekDayNumber === 4)
          document.write(`
  <p>Це четвер.</p>
  `)
        else
          if (WeekDayNumber=== 5)
            document.write(`
  <p>Це п\'ятниця.</p>
  `)
          else
            if (WeekDayNumber === 6)
              document.write(`
  <p>Це субота.</p>
  `)
            else
              document.write(`
  <p>Це неділя.</p>
  `)