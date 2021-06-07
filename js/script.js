// const days = prompt('Скільки днів плануєш збирати гроші? ');
// let message =
//   'Не плануєш збирати? Шкода. \nБо за 365 днів міг би назбирати суму: 66795.';
// const total = function (inputDays) {
//   const days = Number(inputDays);
//   let sum = 0;

//   if (!days) {
//     return `<p>Не плануєш збирати? Шкода. \nБо за 365 днів міг би назбирати суму: 66795.</p>`;
//   }
//   for (let i = 1; i <= days; i += 1) {
//     sum += i;
//   }
//   message = `За ${days} дня/днів/день назбираєш сумму: ${sum}, \nА за 365 днів: 66795.`;
//   return `<p>За ${days} дня/днів/день назбираєш сумму: ${sum}, \nА за 365 днів: 66795.</p>`;
// };

// const markup = total(days);
// alert(message);

// document.body.insertAdjacentHTML('beforeend', markup);

const formRef = document.querySelector('.js-small-form');
console.log('🚀 ~  formRef', formRef);
const imgRef = document.querySelector('.js-image');
console.log('🚀 ~  imgRef', imgRef);
const inputRef = document.querySelector('#days');
console.log('🚀 ~  inputRef', inputRef);
const resultRef = document.querySelector('.js-result');
console.log('🚀 ~  resultRef', resultRef);

inputRef.value = 365;

formRef.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    console.log(name, value);
  });
  const days = formData.get('days');
  console.log(days);
  console.log(total(days));
  resultRef.textContent = total(days);
});

function total(inputDays) {
  const days = Number(inputDays);
  let sum = 0;

  // if (!days) {
  //   return `<p>Не плануєш збирати? Шкода. \nБо за 365 днів міг би назбирати суму: 66795.</p>`;
  // }
  for (let i = 1; i <= days; i += 1) {
    sum += i;
  }
  // message = `За ${days} дня/днів/день назбираєш сумму: ${sum}, \nА за 365 днів: 66795.`;
  return `За ${days} дня/днів/день назбираєш сумму: ${sum} грн.`;
}
