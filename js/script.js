const refs = {
  form: document.querySelector('.js-small-form'),
  input: document.querySelector('#days'),
  inputRange: document.querySelector('#days-range'),
  result: document.querySelector('.js-result'),
  addBtn: document.querySelector('button[data-action="add"]'),
  subBtn: document.querySelector('button[data-action="sub"]'),
};
const INITIAL_NUMBER_OF_DAYS = 365;
const THROTTLE_MS = 100;

updateInputsUI(INITIAL_NUMBER_OF_DAYS);

refs.inputRange.addEventListener(
  'input',
  _.throttle(onRangeInput, THROTTLE_MS),
);
refs.input.addEventListener(
  'input',
  // _.debounce(onInput, THROTTLE_MS, { leading: false, trailing: true }),
  _.throttle(onInput, THROTTLE_MS),
  // _.debounce(onInput, THROTTLE_MS),
);
refs.addBtn.addEventListener('click', onMathBtnsClick);
refs.subBtn.addEventListener('click', onMathBtnsClick);
// refs.form.addEventListener('submit', onFormSubmit);

function onRangeInput() {
  updateInputsUI(refs.inputRange.value);
}

function onInput() {
  const isIncrementedValueGreaterThanMax =
    Number(refs.input.value) + 1 > Number(refs.input.max);
  const isDecrementedValueLessThanMin =
    Number(refs.input.value) - 1 < Number(refs.input.min);

  if (isIncrementedValueGreaterThanMax) {
    updateInputsUI(refs.input.max);
  }

  if (isDecrementedValueLessThanMin || !refs.input.value) {
    updateInputsUI(Number(refs.input.min));
  }

  updateInputsUI(refs.input.value);
}

function onMathBtnsClick(e) {
  const isIncrementedValueGreaterThanMax =
    Number(refs.input.value) + 1 > Number(refs.input.max);
  const isDecrementedValueLessThanMin =
    Number(refs.input.value) - 1 < Number(refs.input.min);

  switch (e.currentTarget.dataset.action) {
    case 'add':
      if (isIncrementedValueGreaterThanMax) {
        return;
      }

      refs.input.value = Number(refs.input.value) + 1;
      break;

    case 'sub':
      if (isDecrementedValueLessThanMin) {
        return;
      }
      refs.input.value = Number(refs.input.value) - 1;
      break;
  }
  updateInputsUI(refs.input.value);
}

function updateInputsUI(newNumberOfDays) {
  refs.inputRange.value = newNumberOfDays;
  refs.input.value = newNumberOfDays;
  redrawMarkup();
}

function transformTheWordAccordingToTheNumeral(days) {
  const digits = days.toString().split('');
  const lastDigit = Number(digits.pop());
  const preLastDigit = Number(digits[digits.length - 1]);
  let daysString = '????????';

  if (days > 1 && days < 5) {
    daysString = '??????';
  }

  if (days >= 5) {
    daysString = '????????';
  }

  if (days > 20 && preLastDigit !== 1) {
    if (lastDigit === 1) {
      daysString = '????????';
    }

    if (lastDigit > 1 && lastDigit < 5) {
      daysString = '??????';
    }
  }

  return daysString;
}

function total(days) {
  let sum = 0;

  for (let i = 1; i <= days; i += 1) {
    sum += i;
  }

  const daysString = transformTheWordAccordingToTheNumeral(days);

  console.log(`???? ${days} ${daysString} ?????????????????? ??????????: ${sum} ??????.`);

  return `???? ${days} ${daysString} ?????????????????? ??????????: ${sum} ??????.`;
}

function redrawMarkup() {
  const days = new FormData(refs.form).get('days');

  refs.result.textContent = total(days);
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
