export const addSeparator = (element) => {
  const separator = `
<div class="separator">
                <div class="dots">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>`;

  const elements = document.querySelectorAll(element)

  elements.forEach((elem, index) => {
    if (index > 0) {
      elem.insertAdjacentHTML('beforeend', separator)
    }
  })
}

export const setSeparatorDirection = () => {
  const items = document.querySelectorAll('.step-list__item');
  let previousTop = null;

  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    const separator = item.querySelector('.separator');

    if (!separator) {
      return
    }

    if (previousTop !== null && rect.top !== previousTop) {
      separator.classList.add('separator--moving');
    } else {
      separator.classList.remove('separator--moving');
    }

    previousTop = rect.top;
  });
};