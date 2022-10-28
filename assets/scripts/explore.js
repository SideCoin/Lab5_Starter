// explore.js

window.addEventListener('DOMContentLoaded', init);
function init() {
    window.speechSynthesis.cancel()
    const synth = window.speechSynthesis;
    let select = document.getElementById('voice-select');
    const txt = document.getElementById('text-to-speak');
    let utter = new SpeechSynthesisUtterance(txt.placeholder);
    let listVoices = [];
    function createVoices() {
         listVoices = synth.getVoices();
        for(let i = 0; i< listVoices.length; i++) {
            let option = document.createElement('option');
            option.innerHTML = listVoices[i].name;
            option.setAttribute('data-lang', listVoices[i].lang);
            option.setAttribute('data-name', listVoices[i].name);
            option.value = listVoices[i].lang;
            option.setAttribute('data-obj', listVoices[i]);
            select.appendChild(option);
        }
    }
    synth.addEventListener('voiceschanged', createVoices);
    select.addEventListener('change', (selected)=> {
        utter.lang = selected.target.value;
        utter.voice = document.getElementById('data-obj');
        utter.voice = listVoices[select.selectedIndex - 1];
    })
    txt.addEventListener('input', (typed)=>{
        console.log(typed.data);
        if(typed.data !== null) {
            if(txt.placeholder === 'Text to speak here') {
                txt.placeholder = '';
            }
            txt.placeholder += typed.data;
        }
        else {
            if(txt.placeholder.length != 0) {
                txt.placeholder = txt.placeholder.slice(0, txt.placeholder.length-1);
            }
        }
    });
    document.querySelector('button').addEventListener('click', ()=> {
        utter.text = txt.placeholder;
        synth.speak(utter);
        document.querySelector('#explore img').src = 'assets/images/smiling-open.png';
    });
    utter.addEventListener('end',()=>{
        
        document.querySelector('#explore img').src = 'assets/images/smiling.png';
        
    })
}   