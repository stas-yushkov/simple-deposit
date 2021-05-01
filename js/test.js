
const days = prompt('Скільки днів плануєш збирати гроші? ');
const total = function (days) {
  let sum =0;
  for (let i = 1; i <= days; i+=1) {
    sum += i;
  }
  return `За ${days} дня/днів/день назбираєш ${sum} грошей, \nА за: 365 днів -   66795.`;
}


alert( total(days) );
