document.addEventListener("DOMContentLoaded", function() {

  let circlenum = 4;

  function createCircle(color, number, top, left){
    let circle = document.createElement('div');
            circle.classList.add('circle');
            circle.innerHTML = number + 1;
            circle.style.top = top + '%';
            circle.style.left = left + '%';
            circle.style.backgroundColor = color;
            circle.style.display = 'none';
            document.body.appendChild(circle);
  }

  function createWave(){
    let circles = document.getElementsByClassName('circle');
    while (circles.length > 0) circles[0].remove();

    circlenum = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    let color = randomColor();
    let left = Math.floor(Math.random() * (80 - 20 + 1)) + 20;
    let top = Math.floor(Math.random() * (80 - 20 + 1)) + 20;

    let tops = (Math.random() < 0.5 ? - 1 : 1) * 5;
    let lefts = (Math.random() < 0.5 ? - 1 : 1) * 5;

    for (let i = 0; i < circlenum; i++) {
      createCircle(color, i, (top + (i * tops)), (left + (i * lefts)));
    }

    for (let i = 0; i < circlenum; i++) {
      setTimeout(function(){
        let element = document.getElementsByClassName('circle')[i];
        if(element){
          element.style.display = 'block';
        }
      }, (200 * i));
    }
  }

  function reduceCircles(){
    let circles = document.getElementsByClassName('circle');

    for (let i = 0; i < circles.length; i++) {
      if(circles[i] && circles[i].offsetWidth != 0){
        console.log(circles[i].offsetWidth);
        circles[i].style.width = circles[i].offsetWidth - 6;
        circles[i].style.height = circles[i].offsetHeight - 6;
        circles[i].style.lineHeight = circles[i].offsetHeight + 'px';
      }
    }
  }

  var int = setInterval(createWave, (600 * circlenum));

  var red = setInterval(reduceCircles, (100));



  document.addEventListener('click', function (e) {

    if (!e.target.matches('.circle')) return;
    e.preventDefault();

    let circles = document.getElementsByClassName('circle');

    if((parseInt(e.target.textContent) + circles.length - 1) == circlenum){
      e.target.remove();
    } else {

    }

  }, false);
});
