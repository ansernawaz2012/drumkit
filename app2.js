//set initial sound variables

const boom = new Audio('sounds/boom.wav');
const clap = new Audio('sounds/clap.wav');
const hihat = new Audio('sounds/hihat.wav');
const kick = new Audio('sounds/kick.wav');
const openhat = new Audio('sounds/openhat.wav');
const ride = new Audio('sounds/ride.wav');
const snare = new Audio('sounds/snare.wav');
const tink = new Audio('sounds/tink.wav');
const tom = new Audio('sounds/tom.wav');


// Play drum by keyboard press
document.addEventListener('keydown', (event)=>{
    
    //record key down press and retrieve value

    let whichKeyDown = event.key;

    switch(whichKeyDown) {
        case "a":
        document.getElementById('button1').classList.add('keyPressed'); //add class to button to show transition
        boom.currentTime = 0;
        boom.play();
        break;

        case "s":
        document.getElementById('button2').classList.add('keyPressed');
        clap.currentTime = 0;  //allow fast playing
        clap.play();
        break;

        case "d":
        document.getElementById('button3').classList.add('keyPressed');
        hihat.currentTime = 0;
        hihat.play();
        break;

        case "f":
        document.getElementById('button4').classList.add('keyPressed');
        kick.currentTime = 0;
        kick.play();
        break;

        case "g":
        document.getElementById('button5').classList.add('keyPressed');
        openhat.currentTime = 0;
        openhat.play();
        break;

        case "h":
        document.getElementById('button6').classList.add('keyPressed');
        ride.currentTime = 0;
        ride.play();
        break;

        case "j":
        document.getElementById('button7').classList.add('keyPressed');
        snare.currentTime = 0;
        snare.play();
        break;

        case "k":
        document.getElementById('button8').classList.add('keyPressed');
        tink.currentTime = 0;
        tink.play();
        break;

        case "l":
        document.getElementById('button9').classList.add('keyPressed');
        tom.currentTime = 0;
        tom.play();
        break;

        default:return;

    }


})

//record keyup and remove transition effect from button


document.addEventListener('keyup', (event)=>{

    let whichKeyUp = event.key;
    
    switch(whichKeyUp) {

        case "a":
        document.getElementById('button1').classList.remove('keyPressed');
        break;

        case "s":
        document.getElementById('button2').classList.remove('keyPressed');
        break;

        case "d":
        document.getElementById('button3').classList.remove('keyPressed');
        break;

        case "f":
        document.getElementById('button4').classList.remove('keyPressed');
        break;

        case "g":
        document.getElementById('button5').classList.remove('keyPressed');
        break;

        case "h":
        document.getElementById('button6').classList.remove('keyPressed');
        break;

        case "j":
        document.getElementById('button7').classList.remove('keyPressed');
        break;

        case "k":
        document.getElementById('button8').classList.remove('keyPressed');
        break;

        case "l":
        document.getElementById('button9').classList.remove('keyPressed');
        break;

        default:return;


    }
})
// Play music by mouse click
document.addEventListener('click', (event)=>{

    let buttonClicked =  event.path[0].id;
    switch(buttonClicked) {
        case 'button1': 
        boom.currentTime = 0;
        boom.play();
        break;

        case 'button2':
        clap.currentTime = 0;
        clap.play();
        break;

        case 'button3': 
        hihat.currentTime = 0;
        hihat.play();
        break;

        case 'button4':
        kick.currentTime = 0;
        kick.play();
        break;

        case 'button5': 
        openhat.currentTime = 0;
        openhat.play();
        break;

        case 'button6':
        ride.currentTime = 0;
        ride.play();
        break;

        case 'button7': 
        snare.currentTime = 0;
        snare.play();
        break;

        case 'button8':
        tink.currentTime = 0;
        tink.play();
        break;

        case 'button9': 
        tom.currentTime = 0;
        tom.play();
        break;

        default:return;
    }
})


