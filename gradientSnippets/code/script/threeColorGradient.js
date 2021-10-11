function threeGradient() {
  let gradientValue1 = '';
  let gradientValue2 = '';
  let gradientValue3 = '';
  let directionNew = '';
  let code = document.querySelector('.code');
  let body = document.querySelector('body');
  let codeSnippet = '';
  body.style.backgroundImage =
    'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)';

  let bgBtn = document.querySelector('.button');
  let gradient1 = document.querySelector('.gradient1');
  gradient1.addEventListener('change', () => {
    localStorage.setItem('gradientValue1', gradient1.value);
    gradientValue1 = localStorage.getItem('gradientValue1');
  });
  let gradient2 = document.querySelector('.gradient2');
  gradient2.addEventListener('change', () => {
    localStorage.setItem('gradientValue2', gradient2.value);
    gradientValue2 = localStorage.getItem('gradientValue2');
  });

  let gradient3 = document.querySelector('.gradient3');
  gradient3.addEventListener('change', () => {
    localStorage.setItem('gradientValue3', gradient3.value);
    gradientValue3 = localStorage.getItem('gradientValue3');
  });

  let iconSection = document.querySelector('.icon');
  iconSection.addEventListener('click', handleSelect);
  function handleSelect(event) {
    localStorage.setItem('directionNew', event.target.dataset.name);
    directionNew = localStorage.getItem('directionNew');
  }

  bgBtn.addEventListener('click', () => {
    if (directionNew === 'circle') {
      codeSnippet = `radial-gradient(${directionNew}, ${gradientValue1},${gradientValue2},${gradientValue3});`;
      body.style.backgroundImage = `radial-gradient(${directionNew}, ${gradientValue1},${gradientValue2},${gradientValue3})`;
      body.style.backgroundRepeat = 'no-repeat';
      body.style.backgroundSize = 'cover';
      code.innerText = `background-image : ${codeSnippet}`;
    } else {
      if (directionNew) {
        codeSnippet = `linear-gradient(${directionNew}, ${gradientValue1},${gradientValue2},${gradientValue3});`;
        body.style.backgroundImage = `linear-gradient(${directionNew}, ${gradientValue1},${gradientValue2},${gradientValue3})`;
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

  gradientValue1 = localStorage.getItem('gradientValue1');
  gradient1.value = gradientValue1;
  gradientValue2 = localStorage.getItem('gradientValue2');
  gradient2.value = gradientValue2;
  gradientValue3 = localStorage.getItem('gradientValue3');
  gradient3.value = gradientValue3;
}

threeGradient();
