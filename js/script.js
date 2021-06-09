const refs = {
  form: document.querySelector('.js-small-form'),
  input: document.querySelector('#days'),
  inputRange: document.querySelector('#days-range'),
  result: document.querySelector('.js-result'),
  addBtn: document.querySelector('button[data-action="add"]'),
  subBtn: document.querySelector('button[data-action="sub"]'),
};

const INITIAL_NUMBER_OF_DAYS = 365;
const dayCounter = {
  numberOfDays: 0,
  updateInputsUI(newNumberOfDays) {
    refs.inputRange.value = newNumberOfDays;
    refs.input.value = newNumberOfDays;
  },
};

dayCounter.updateInputsUI(INITIAL_NUMBER_OF_DAYS);

refs.inputRange.addEventListener('input', e => {
  dayCounter.updateInputsUI(e.currentTarget.value);
});

refs.input.addEventListener('input', e => {
  if (e.currentTarget.value === '') {
    dayCounter.updateInputsUI(1);
  }
  dayCounter.updateInputsUI(e.currentTarget.value);
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

function onFormSubmit(event) {
  // console.log(event);
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  // formData.forEach((value, name) => {
  //   console.log(name, value);
  // });
  const days = Number(formData.get('days'));
  // console.log(days);
  // console.log(total(days));
  refs.result.textContent = total(days);
}

function setNumberOfDaysToVerified(e) {}
