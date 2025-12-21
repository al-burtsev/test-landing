const dotAnimationDelay = (delayStep = 0.2) => {
  const spans = document?.querySelectorAll('.dots span');
  spans.forEach((span, index) => {
    span.style.animationDelay = `${index * delayStep}s`;
  });
}

export default dotAnimationDelay