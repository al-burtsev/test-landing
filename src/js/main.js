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

window.addEventListener('resize', () => {
  setSeparatorDirection()
})