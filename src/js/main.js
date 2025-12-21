import initSlimSelect from './components/select';
import initRangeInput from './components/range';
import { addSeparator, setSeparatorDirection } from './components/separator';
import dotAnimationDelay from './functions/dotAnimationDelay';

const options = {
  select: '#system-select',
  settings: {
    showSearch: false
  },

  data: [
    {
      placeholder: true,
      text: 'Выберите тип системы',
      value: '',
    },
    { text: 'Sed ut perspiciatis' },
    { text: 'Nemo enim ipsam' },
    { text: 'Et harum quidem' },
    { text: 'Temporibus autem' },
    { text: 'Itaque earum rerum' },
    { text: 'Sed ut perspiciatis' },
    { text: 'Nemo enim ipsam' },
    { text: 'Et harum quidem' },
    { text: 'Temporibus autem' },
    { text: 'Itaque earum rerum' },

  ],
}

const newSlimSelect = initSlimSelect(options)

const rangeOptions = {
  initValue: 75,
  selectors: {
    inputElem: '#range',
    displayValueElem: '#range-value',
  }
}

initRangeInput(rangeOptions)
addSeparator('.step-list__item')
dotAnimationDelay()
setSeparatorDirection()

const form = document.querySelector('.form')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const formData = new FormData(event.target)
  console.log(Object.fromEntries(formData))
})

window.addEventListener('resize', () => {
  setSeparatorDirection()
})