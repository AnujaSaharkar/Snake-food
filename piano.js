var sounds = {
  "C4":  "https://cdn.jsdelivr.net/gh/gleitz/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3/C4.mp3",
  "C#4": "https://cdn.jsdelivr.net/gh/gleitz/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3/Cs4.mp3",
  "D4":  "https://cdn.jsdelivr.net/gh/gleitz/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3/D4.mp3",
  "D#4": "https://cdn.jsdelivr.net/gh/gleitz/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3/Ds4.mp3",
  "E4":  "https://cdn.jsdelivr.net/gh/gleitz/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3/E4.mp3",
  "F4":  "https://cdn.jsdelivr.net/gh/gleitz/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3/F4.mp3",
  "F#4": "https://cdn.jsdelivr.net/gh/gleitz/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3/Fs4.mp3",
  "G4":  "https://cdn.jsdelivr.net/gh/gleitz/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3/G4.mp3",
  "G#4": "https://cdn.jsdelivr.net/gh/gleitz/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3/Gs4.mp3",
  "A4":  "https://cdn.jsdelivr.net/gh/gleitz/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3/A4.mp3",
  "A#4": "https://cdn.jsdelivr.net/gh/gleitz/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3/As4.mp3",
  "B4":  "https://cdn.jsdelivr.net/gh/gleitz/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3/B4.mp3"
};


var key=document.querySelectorAll('.key');
key.forEach(val => {
    val.addEventListener('click',function(){
        const note=val.dataset.note;
        const music=new Audio(sounds[note]);
        console.log(note, sounds[note])
        music.play();
    });
});

