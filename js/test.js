//const numbers = [-11, 11, 0, 2, 4]
const days = prompt('days');
const total = function (days) {
  let sum =0;
  for (let i = 1; i <= days; i+=1) {
    sum += i;
  }
  return `Days: ${days} sum: ${sum}, \nDays: 365 sum:  66795`;
}


alert( total(days) );
