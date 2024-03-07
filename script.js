const slider = document.querySelector('.slider');

// function activate(e) {
//   const items = document.querySelectorAll('.item');
//   e.target.matches('.next') && slider.append(items[0]);
//   e.target.matches('.prev') && slider.append(items[items.length - 1]);


// }
// document.addEventListener('click',activate,false);
function activate(e) {
    const items = document.querySelectorAll('.item');
    const slider = document.querySelector('.slider');
    if (e.target.matches('.next')) {
      slider.appendChild(items[0]);
    } else if (e.target.matches('.prev')) {
      slider.prepend(items[items.length - 1]);
    }
  }

  document.addEventListener('click', activate, false);

 // Get the audio element
let audio = document.getElementById("backgroundMusic");

// Autoplay the audio
audio.play();



  
