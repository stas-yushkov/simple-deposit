//const numbers = [-11, 11, 0, 2, 4]
const days = prompt('days');
const total = function (days) {
  let sum =0;
  for (let i = 1; i <= days; i+=1) {
    sum += i;
  }
  return `sum: ${sum}, days: ${days} `;
}

//const days=365/2;

alert( total(days) );
alert(total(365) );
  //Math.max(a=for (const number of numbers){number}));