
const days = prompt('Скільки днів плануєш збирати гроші? ');
let message = 'Не плануєш збирати? Шкода. \nБо за 365 днів міг би назбирати суму: 66795.';
const total = function (inputDays) {
  const days = Number(inputDays);
  let sum =0;
  
  if (!days) {
    return `<p>Не плануєш збирати? Шкода. \nБо за 365 днів міг би назбирати суму: 66795.</p>` ;
  }
  for (let i = 1; i <= days; i+=1) {
    sum += i;
  }
  message = `За ${days} дня/днів/день назбираєш сумму: ${sum}, \nА за 365 днів: 66795.`
  return `<p>За ${days} дня/днів/день назбираєш сумму: ${sum}, \nА за 365 днів: 66795.</p>` ;
}


//alert( total(days) );

const markup = total(days);
alert(message);


document.body.insertAdjacentHTML('beforeend', markup);
