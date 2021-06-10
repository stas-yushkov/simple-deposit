const refs = {
  form: document.querySelector('.js-small-form'),
  input: document.querySelector('#days'),
  inputRange: document.querySelector('#days-range'),
  result: document.querySelector('.js-result'),
  addBtn: document.querySelector('button[data-action="add"]'),
  subBtn: document.querySelector('button[data-action="sub"]'),
};

const INITIAL_NUMBER_OF_DAYS = 365;

updateInputsUI(INITIAL_NUMBER_OF_DAYS);

refs.inputRange.addEventListener('input', e => {
  updateInputsUI(e.currentTarget.value);
});

refs.input.addEventListener('input', e => {
  if (Number(e.currentTarget.value) + 1 > Number(refs.input.max)) {
    updateInputsUI(refs.input.max);
  }

  if (
    Number(e.currentTarget.value) - 1 < Number(refs.input.min) ||
    e.currentTarget.value === ''
  ) {
    updateInputsUI(1);
  }

  console.log('🚀 ~ e.currentTarget.value', e.currentTarget.value);

  updateInputsUI(e.currentTarget.value);
});

// refs.form.addEventListener('submit', onFormSubmit);

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
  updateInputsUI(refs.input.value);
}

function total(days) {
  let sum = 0;

  for (let i = 1; i <= days; i += 1) {
    sum += i;
  }

  const daysText = transformTheWordAccordingToTheNumeral(days);

  console.log(`За ${days} ${daysText} назбираєш сумму: ${sum} грн.`);

  return `За ${days} ${daysText} назбираєш сумму: ${sum} грн.`;
}

function transformTheWordAccordingToTheNumeral(days) {
  const digits = days.toString().split('');
  const lastDigit = Number(digits.pop());
  const preLastDigit = Number(digits[digits.length - 1]);
  let daysText = 'день';

  if (days > 1 && days < 5) {
    daysText = 'дня';
  }

  if (days >= 5) {
    daysText = 'днів';
  }

  if (days > 20 && preLastDigit !== 1) {
    if (lastDigit === 1) {
      daysText = 'день';
    }

    if (lastDigit > 1 && lastDigit < 5) {
      daysText = 'дня';
    }
  }

  return daysText;
}

// function onFormSubmit(event) {
//   // console.log(event);
//   event.preventDefault();
//   const formData = new FormData(event.currentTarget);
//   // formData.forEach((value, name) => {
//   //   console.log(name, value);
//   // });
//   const days = Number(formData.get('days'));
//   // console.log(days);
//   // console.log(total(days));
//   refs.result.textContent = total(days);
// }

function redrawResultMessage() {
  const days = new FormData(refs.form).get('days');

  refs.result.textContent = total(days);
}

function updateInputsUI(newNumberOfDays) {
  refs.inputRange.value = newNumberOfDays;
  refs.input.value = newNumberOfDays;
  redrawResultMessage();
}
