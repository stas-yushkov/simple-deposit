
const days = prompt('Скільки днів плануєш збирати гроші? ');
const total = function (inputDays) {
  const days = Number(inputDays);
  let sum =0;
  let message = ''
  if (!days) {
    return `Не плануєш збирати? Шкода. \nБо за 365 днів набирав би суму: 66795.`
  }
  for (let i = 1; i <= days; i+=1) {
    sum += i;
  }
  return  `За ${days} дня/днів/день назбираєш сумму: ${sum}, \nА за 365 днів: 66795.` ;
}


alert( total(days) );
