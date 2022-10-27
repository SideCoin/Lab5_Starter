// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  document.getElementById('horn-select').addEventListener('change', (selected)=> {
    const hornImg = document.querySelector('#expose img');
    hornImg.src = "assets/images/" + selected.target.value + ".svg";
    const audioSelect = document.querySelector('audio');
    audioSelect.src = "assets/audio/" + selected.target.value + ".mp3";
  });

  document.getElementById('volume-controls').addEventListener('change', (val)=>{
    const volSelect = document.querySelector('#volume');
    let num = parseInt(val.target.value);
    const volImg = document.querySelector('#volume-controls img');
    const audioSelect = document.querySelector('audio');
    if(num == 0) {
      volImg.src = "assets/icons/volume-level-0.svg";
      audioSelect.volume = 0.0;
    }
    if(num >= 1 && num < 33) {
      volImg.src = "assets/icons/volume-level-1.svg";
    }
    if(num >= 33 && num < 67) {
      volImg.src = "assets/icons/volume-level-2.svg";
    }
    if(num > 67) {
      volImg.src = "assets/icons/volume-level-3.svg";
    }
    audioSelect.volume = num/100;
  });
  document.querySelector('#expose button').addEventListener('click', (but)=> {
    const audioSelect = document.querySelector('audio');
    audioSelect.play();
    const partyName = document.getElementById('horn-select').value;
    if(partyName === "party-horn") {
      const confetti = new JSConfetti();
      confetti.addConfetti();
    }
  });
  

}