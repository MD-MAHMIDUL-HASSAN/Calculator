const display = document.querySelector('#input');
const answer = document.querySelector('#answer');
let result = '';

document.querySelector('.buttons').addEventListener('click', function(e) {
    const btn = e.target;
    if (btn.tagName === 'BUTTON') {
        if (btn.classList.contains('clear')) {
            display.value = '';
            answer.value = '';
            result = '';
        } else if (btn.classList.contains('del')) {
            display.value = display.value.slice(0, -1);
            result = result.slice(0, -1);
        } else if (btn.classList.contains('equal')) {
            try {
                answer.value = safeEval(result);
                display.value = "";
                result = '';
            } catch {
                answer.value = 'Error';
            }
        } else {
            display.value += btn.textContent;
            result += btn.value;
        }
    }
});

function safeEval(expr) {
    return Function('"use strict";return (' + expr + ')')();
}
const menu = document.getElementById('menu');
menu.style.display = 'none';
function toggleMenu() {
  const menu = document.getElementById('menu');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}


