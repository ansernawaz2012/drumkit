// Play drum by keyboard press
document.addEventListener('keydown', (event)=>{
    
    //check value of key and play appropriate sound
    if(event.key == 'a'){

        // document.getElementById('button1').style.backgroundColor = 'deepskyblue';
        document.getElementById('button1').classList.add('keyPressed');
        var audio = new Audio('sounds/boom.wav');
       audio.play();
       return false;
    }
    if(event.key == 's'){
        
        document.getElementById('button2').classList.add('keyPressed');
        var audio = new Audio('sounds/clap.wav');
       audio.play();
       return false;
    }
    if(event.key == 'd'){

        var audio = new Audio('sounds/hihat.wav');
       audio.play();
       return false;
    }
    if(event.key == 'f'){

        var audio = new Audio('sounds/kick.wav');
       audio.play();
       return false;
    }
    if(event.key == 'g'){

        var audio = new Audio('sounds/openhat.wav');
       audio.play();
       return false;
    }
    if(event.key == 'h'){

        var audio = new Audio('sounds/ride.wav');
       audio.play();
       return false;
    }
    if(event.key == 'j'){

        var audio = new Audio('sounds/snare.wav');
       audio.play();
       return false;
    }
    if(event.key == 'k'){

        var audio = new Audio('sounds/tink.wav');
       audio.play();
       return false;
    }
    if(event.key == 'l'){

        var audio = new Audio('sounds/tom.wav');
       audio.play();
       return false;
    }

})


document.addEventListener('keyup', (event)=>{
    document.getElementById('button1').classList.remove('keyPressed');
})

// Play music by mouse click
document.getElementById('button1').addEventListener('click', ()=>{
        var audio = new Audio('sounds/boom.wav');
       audio.play();
       return false;
})

document.getElementById('button2').addEventListener('click', ()=>{
    var audio = new Audio('sounds/clap.wav');
   audio.play();
   return false;
})

document.getElementById('button3').addEventListener('click', ()=>{
    var audio = new Audio('sounds/hihat.wav');
   audio.play();
   return false;
})

document.getElementById('button4').addEventListener('click', ()=>{
    var audio = new Audio('sounds/kick.wav');
   audio.play();
   return false;
})

document.getElementById('button5').addEventListener('click', ()=>{
    var audio = new Audio('sounds/openhat.wav');
   audio.play();
   return false;
})

document.getElementById('button6').addEventListener('click', ()=>{
    var audio = new Audio('sounds/ride.wav');
   audio.play();
   return false;
})

document.getElementById('button7').addEventListener('click', ()=>{
    var audio = new Audio('sounds/snare.wav');
   audio.play();
   return false;
})

document.getElementById('button8').addEventListener('click', ()=>{
    var audio = new Audio('sounds/tink.wav');
   audio.play();
   return false;
})

document.getElementById('button9').addEventListener('click', ()=>{
    var audio = new Audio('sounds/tom.wav');
   audio.play();
   return false;
})

