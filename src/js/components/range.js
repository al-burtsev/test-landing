const initRangeInput = (settings) => {
  const { initValue, selectors: { inputElem, displayValueElem } } = settings
  
  const rangeInput = document.querySelector(inputElem)
  const rangeValueElem = document.querySelector(displayValueElem)

  let rangeValue = initValue;

  rangeInput.value = rangeValue;
  rangeValueElem.textContent = `${rangeValue}%`

  rangeInput.addEventListener('input', (event) => {
    rangeValue = event.target.value
    rangeValueElem.textContent = `${rangeValue}%`
  })
}

export default initRangeInput