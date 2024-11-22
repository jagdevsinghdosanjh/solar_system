document.addEventListener('DOMContentLoaded', () => {
    const solarSystem = document.querySelector('.solar-system');
    let isRotating = true;
  
    solarSystem.addEventListener('click', () => {
      if (isRotating) {
        solarSystem.style.animationPlayState = 'paused';
      } else {
        solarSystem.style.animationPlayState = 'running';
      }
      isRotating = !isRotating;
    });
  });
  