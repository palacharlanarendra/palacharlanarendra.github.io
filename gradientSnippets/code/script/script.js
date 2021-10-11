function gradient() {
  let colorValue1 = '';
  let colorValue2 = '';
  let direction = '';
  let code = document.querySelector('.code');
  let body = document.querySelector('body');
  let codeSnippet = '';

  let bgBtn = document.querySelector('.button');
  let color1 = document.querySelector('.color1');
  color1.addEventListener('change', () => {
    localStorage.setItem('colorValue1', color1.value);
    colorValue1 = localStorage.getItem('colorValue1');
  });
  let color2 = document.querySelector('.color2');
  color2.addEventListener('change', () => {
    localStorage.setItem('colorValue2', color2.value);
    colorValue2 = localStorage.getItem('colorValue2');
  });

  let iconSection = document.querySelector('.icon');
  iconSection.addEventListener('click', handleSelect);
  function handleSelect(event) {
    localStorage.setItem('direction', event.target.dataset.name);
    direction = localStorage.getItem('direction');
  }

  bgBtn.addEventListener('click', () => {
    if (direction === 'circle') {
      codeSnippet = `radial-gradient(${direction}, ${colorValue1},${colorValue2});`;
      body.style.backgroundImage = `radial-gradient(${direction}, ${colorValue1},${colorValue2})`;
      body.style.backgroundRepeat = 'no-repeat';
      body.style.backgroundSize = 'cover';
      code.innerText = `background-image : ${codeSnippet}`;
    } else {
      if (direction) {
        codeSnippet = `linear-gradient(${direction}, ${colorValue1},${colorValue2});`;
        body.style.backgroundImage = `linear-gradient(${direction}, ${colorValue1},${colorValue2})`;
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundSize = 'cover';
        code.innerText = `background-image : ${codeSnippet}`;
      } else {
        code.innerText = `You didn't choose the orientation properly`;
      }
    }

    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundSize = 'cover';
  });

  colorValue1 = localStorage.getItem('colorValue1');
  color1.value = colorValue1;
  colorValue2 = localStorage.getItem('colorValue2');
  color2.value = colorValue2;
  colorValue3 = localStorage.getItem('colorValue3');
}
gradient();
