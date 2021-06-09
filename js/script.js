const refs = {
  form: document.querySelector('.js-small-form'),
  input: document.querySelector('#days'),
  inputRange: document.querySelector('#days-range'),
  result: document.querySelector('.js-result'),
  addBtn: document.querySelector('button[data-action="add"]'),
  subBtn: document.querySelector('button[data-action="sub"]'),
};

const INITIAL_NUMBER_OF_DAYS = 365;
const daysCounter = {
  updateInputsUI(event, newNumberOfDays) {
    if (event) {
      if (Number(event.currentTarget.value) + 1 > Number(refs.input.max)) {
        daysCounter.updateInputsUI('', refs.input.max);
      }

      if (
        Number(event.currentTarget.value) - 1 < Number(refs.input.min) ||
        event.currentTarget.value === '' ||
        newNumberOfDays === ''
      ) {
        daysCounter.updateInputsUI('', 1);
      }
    }

    refs.inputRange.value = newNumberOfDays;
    refs.input.value = newNumberOfDays;
    redrawResultMessage();
  },
};

daysCounter.updateInputsUI('', INITIAL_NUMBER_OF_DAYS);

refs.inputRange.addEventListener('input', e => {
  daysCounter.updateInputsUI(e, e.currentTarget.value);
});

refs.input.addEventListener('input', e => {
  // console.log('🚀 ~ +e.currentTarget.value', +e.currentTarget.value);
  // console.log(
  //   '🚀 ~ Number(e.currentTarget.value)',
  //   Number(e.currentTarget.value),
  // );
  // console.log('🚀 ~ e.currentTarget.value', e.currentTarget.value);

  // if (Number(e.currentTarget.value) + 1 > Number(refs.input.max)) {
  //   daysCounter.updateInputsUI(refs.input.max);
  // }

  // if (
  //   Number(e.currentTarget.value) - 1 < Number(refs.input.min) ||
  //   e.currentTarget.value === ''
  // ) {
  //   daysCounter.updateInputsUI(1);
  // }

  console.log('🚀 ~ e.currentTarget.value', e.currentTarget.value);
  console.log('🚀 ~ e', e);

  daysCounter.updateInputsUI(e, e.currentTarget.value);
});

// refs.form.addEventListener('submit', onFormSubmit);

refs.addBtn.addEventListener('click', onMathBtnsClick);
refs.subBtn.addEventListener('click', onMathBtnsClick);

function onMathBtnsClick(e) {
  let newValue = 0;
  switch (e.currentTarget.dataset.action) {
    case 'add':
      if (Number(refs.input.value) + 1 > Number(refs.input.max)) {
        return;
      }

      newValue = Number(refs.input.value) + 1;
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
  daysCounter.updateInputsUI('', refs.input.value);
}

function total(days) {
  // const days = Number(days);
  let sum = 0;

  for (let i = 1; i <= days; i += 1) {
    sum += i;
  }
  // message = `За ${days} дня/днів/день назбираєш сумму: ${sum}, \nА за 365 днів: 66795.`;
  let daysText = 'день';
  (() => {
    const digits = days.toString().split('');
    const lastDigit = Number(digits.pop());
    const preLastDigit = Number(digits[digits.length - 1]);
    console.log(days);
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
  })();
  console.log(daysText);

  return `За ${days} ${daysText} назбираєш сумму: ${sum} грн.`;
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
  // const days = Number(new FormData(refs.form).get('days'));
  const days = new FormData(refs.form).get('days');

  refs.result.textContent = total(days);
}
