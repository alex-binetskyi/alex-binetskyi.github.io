

const translate = [-32, -16, 0, 16, 32];
let list,
cards,
trackHeight;

function redraw() {
  if(!list) {
    list = document.querySelector('.cards-list');
  }

  if(!cards) {
    cards = Array.from(document.querySelectorAll('.cards-list li'));
  }

  trackHeight = list.offsetHeight - cards[cards.length - 1].offsetHeight - Number(window.getComputedStyle(list).getPropertyValue("padding-bottom").replace(/[^\d.]|\.(?=.*\.)/g, '')) - Number(window.getComputedStyle(cards[cards.length - 1]).getPropertyValue("margin-bottom").replace(/[^\d.]|\.(?=.*\.)/g, ''));

  let previousCardTop = 0;
  for (let i = 0; i < cards.length; i++) {
    const top = cards[i].offsetTop;
    const width = cards[i].offsetWidth;
    let dif = 16*((cards.length - 1) - i);
    let newWidth = (width - dif*2*((top - previousCardTop)/(trackHeight - previousCardTop)));
    let scale = (newWidth/width).toFixed(3);

    if(i === cards.length - 1) {
      scale = 1;
    }

    previousCardTop += cards[i].offsetHeight + Number(window.getComputedStyle(cards[cards.length - 1]).getPropertyValue("margin-bottom").replace(/[^\d.]|\.(?=.*\.)/g, ''));
    cards[i].style.transform = `translate(0, ${translate[i]}px) scale(${scale})`;
  }
}

document.addEventListener('load', function() {
  redraw();
});

window.addEventListener('resize', function() {
  redraw();
});

window.addEventListener('scroll', function() {
  redraw();
});
