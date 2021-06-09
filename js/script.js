const refs = {
  form: document.querySelector('.js-small-form'),
  input: document.querySelector('#days'),
  inputRange: document.querySelector('#days-range'),
  result: document.querySelector('.js-result'),
  addBtn: document.querySelector('button[data-action="add"]'),
  subBtn: document.querySelector('button[data-action="sub"]'),
};

refs.input.value = 365;
updateInputRangeUI();

refs.inputRange.addEventListener('input', e => {
  refs.input.value = e.currentTarget.value;
});

refs.input.addEventListener('input', e => {
  refs.inputRange.value = e.currentTarget.value;
});

refs.form.addEventListener('submit', onFormSubmit);

refs.addBtn.addEventListener('click', onMathBtnsClick);
refs.subBtn.addEventListener('click', onMathBtnsClick);

function onMathBtnsClick(e) {
  switch (e.currentTarget.dataset.action) {
    case 'add':
      if (Number(refs.input.value) + 1 > Number(refs.input.max)) {
        return;
      }
      refs.input.value = Number(refs.input.value) + 1;
      break;

    case 'sub':
      if (Number(refs.input.value) - 1 < Number(refs.input.min)) {
        return;
      }
      refs.input.value = Number(refs.input.value) - 1;
      break;

    default:
      break;
  }
  updateInputRangeUI();
}

function updateInputRangeUI() {
  refs.inputRange.value = refs.input.value;
}

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
  let daysText = 'день';
  (() => {
    console.log(inputDays);
    if (inputDays > 1 && inputDays < 5) {
      daysText = 'дня';
    }
    if (inputDays > 5) {
      daysText = 'днів';
    }
    if (inputDays > 20) {
      // daysText = 'днів';
      const lastDigit = Number(+inputDays.toString().split('').pop());
      if (lastDigit === 1) {
        daysText = 'день';
      }
      if (lastDigit > 1 && lastDigit < 5) {
        daysText = 'дня';
      }
      // TODO: переделать на анализ двух последних цифр
      // https://stackoverflow.com/questions/32695991/how-to-get-last-digit-of-number
      // https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv
    }
  })();
  console.log(daysText);

  return `За ${days} ${daysText} назбираєш сумму: ${sum} грн.`;
}

function onFormSubmit(event) {
  // console.log(event);
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    // console.log(name, value);
  });
  const days = formData.get('days');
  // console.log(days);
  console.log(total(days));
  refs.result.textContent = total(days);
}
