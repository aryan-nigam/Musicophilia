let songs = new Array("pictures/arr.mp3","pictures/arij.mp3", "pictures/atif.mp3", "pictures/jub.mp3", "pictures/kk.mp3", "pictures/moh.mp3", "pictures/neh.mp3", "pictures/alka.mp3", "pictures/shr.mp3", "pictures/sonu.mp3");
let singersPunjabi = new Array("pictures/ammy.mp3", "pictures/diljit.mp3", "pictures/guru.mp3", "pictures/hardy.mp3", "pictures/jassie.mp3", "pictures/kaka.mp3", "pictures/parmish.mp3", "pictures/praak.mp3", "pictures/sharry.mp3", "pictures/siddhu.mp3");
let singersEnglish = new Array("pictures/ed.mp3", "pictures/bruno.mp3", "pictures/justin.mp3", "pictures/eminem.mp3", "pictures/zayn.mp3", "pictures/selena.mp3", "pictures/ariana.mp3", "pictures/beyonce.mp3", "pictures/rihanna.mp3", "pictures/billie.mp3");
let current_song_index;
let next_song_index;
let counter = 0;
let score = 0;
let tot = 0;
let scoreText = document.getElementById("scores");


const play_btn = document.querySelector('#play-btn');
const play_btn_icon = document.querySelector('#play-btn .play-icon');
const audio_player = document.querySelector('#music-player');
let audio = document.getElementById("audio"); // Take the audio element
let time = document.querySelector(".time"); // Take the audio track
let btnPlay = document.querySelector(".play"); // Take the play button
//let btnNext = document.querySelector(".next");


let audioE = document.getElementById("audioeng"); // Take the audio element
let timeE = document.querySelector(".timeen"); // Take the audio track
let btnPlayE = document.querySelector(".playE"); // Take the play button


let audioP = document.getElementById("audiopun"); // Take the audio element
let timeP = document.querySelector(".timepun"); // Take the audio track
let btnPlayP = document.querySelector(".playP"); // Take the play button




let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let option1Punjabi = document.getElementById("option1Punjabi");
let option2Punjabi = document.getElementById("option2Punjabi");
let option3Punjabi = document.getElementById("option3Punjabi");
let option4Punjabi = document.getElementById("option4Punjabi");
let option1English = document.getElementById("option1English");
let option2English = document.getElementById("option2English");
let option3English = document.getElementById("option3English");
let option4English = document.getElementById("option4English");
let next = document.getElementById("next_button");
let nextPunjabi = document.getElementById("next_button_punjabi");
let nextEnglish = document.getElementById("next_button_english");
let image = document.getElementById("singer_image");
let imagePunjabi = document.getElementById("singer_image_punjabi");
let imageEnglish = document.getElementById("singer_image_english");

option1.addEventListener("click",updateScoreHindi);
option2.addEventListener("click",updateScoreHindi);
option3.addEventListener("click",updateScoreHindi);
option4.addEventListener("click",updateScoreHindi);
option1English.addEventListener("click",updateScoreEnglish);
option2English.addEventListener("click",updateScoreEnglish);
option3English.addEventListener("click",updateScoreEnglish);
option4English.addEventListener("click",updateScoreEnglish);
option1Punjabi.addEventListener("click",updateScorePunjabi);
option2Punjabi.addEventListener("click",updateScorePunjabi);
option3Punjabi.addEventListener("click",updateScorePunjabi);
option4Punjabi.addEventListener("click",updateScorePunjabi);

 
 // Variable with track index
 
// Event before page loading
window. onload = function() {
    counter = 0; // Assign zero to the variable
}



function startAgain(){
    location.reload();
   if(!audioP.paused) audioP.pause();
    if(!audioE.paused) audioE.pause();
    counter=0;
    switchTreck(counter);

   
}
//play_btn.addEventListener('click', TogglePlaySong);

function checkAnswer() {
  
    if (counter == 0) {
        console.log("test");
        option1.style.backgroundColor = "green";
        option1.style.color = "white";
        option2.style.backgroundColor = "red";
        option2.style.color = "white";
        option3.style.backgroundColor = "red";
        option3.style.color = "white";
        option4.style.backgroundColor = "red";
        option4.style.color = "white";
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        counter += 1;
    }
    else if (counter == 1) {
        option1.style.backgroundColor = "red";
        option1.style.color = "white";
        option2.style.backgroundColor = "green";
        option2.style.color = "white";
        option3.style.backgroundColor = "red";
        option3.style.color = "white";
        option4.style.backgroundColor = "red";
        option4.style.color = "white";
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        counter += 1;
    }
    else if (counter == 2) {
        option1.style.backgroundColor = "red";
        option1.style.color = "white";
        option2.style.backgroundColor = "red";
        option2.style.color = "white";
        option3.style.backgroundColor = "red";
        option3.style.color = "white";
        option4.style.backgroundColor = "green";
        option4.style.color = "white";
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        counter += 1;
    }
    else if (counter == 3) {
        option1.style.backgroundColor = "red";
        option1.style.color = "white";
        option2.style.backgroundColor = "red";
        option2.style.color = "white";
        option3.style.backgroundColor = "green";
        option3.style.color = "white";
        option4.style.backgroundColor = "red";
        option4.style.color = "white";
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        counter += 1;
    }
    else if (counter == 4) {
        option1.style.backgroundColor = "green";
        option1.style.color = "white";
        option2.style.backgroundColor = "red";
        option2.style.color = "white";
        option3.style.backgroundColor = "red";
        option3.style.color = "white";
        option4.style.backgroundColor = "red";
        option4.style.color = "white";
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        counter += 1;
    } else if (counter == 5) {
        option1.style.backgroundColor = "red";
        option1.style.color = "white";
        option2.style.backgroundColor = "red";
        option2.style.color = "white";
        option3.style.backgroundColor = "green";
        option3.style.color = "white";
        option4.style.backgroundColor = "red";
        option4.style.color = "white";
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        counter += 1;
    } else if (counter == 6) {
        option1.style.backgroundColor = "green";
        option1.style.color = "white";
        option2.style.backgroundColor = "red";
        option2.style.color = "white";
        option3.style.backgroundColor = "red";
        option3.style.color = "white";
        option4.style.backgroundColor = "red";
        option4.style.color = "white";
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        counter += 1;
    }
    else if (counter == 7) {
        option1.style.backgroundColor = "red";
        option1.style.color = "white";
        option2.style.backgroundColor = "green";
        option2.style.color = "white";
        option3.style.backgroundColor = "red";
        option3.style.color = "white";
        option4.style.backgroundColor = "red";
        option4.style.color = "white";
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        counter += 1;
    } else if (counter == 8) {
        option1.style.backgroundColor = "red";
        option1.style.color = "white";
        option2.style.backgroundColor = "red";
        option2.style.color = "white";
        option3.style.backgroundColor = "red";
        option3.style.color = "white";
        option4.style.backgroundColor = "green";
        option4.style.color = "white";
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        counter += 1;
    }
    else if (counter == 9) {
        option1.style.backgroundColor = "red";
        option1.style.color = "white";
        option2.style.backgroundColor = "green";
        option2.style.color = "white";
        option3.style.backgroundColor = "red";
        option3.style.color = "white";
        option4.style.backgroundColor = "red";
        option4.style.color = "white";
        next.style.display = "none";
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        counter += 1;
        document.getElementById("close_button").style.display = "block";
    }
}


function changeColor() {
    option1.style.backgroundColor = "white";
    option1.style.color = "black";
    option2.style.backgroundColor = "white";
    option2.style.color = "black";
    option3.style.backgroundColor = "white";
    option3.style.color = "black";
    option4.style.backgroundColor = "white";
    option4.style.color = "black";
    setTimeout(() => {
        checkAnswer();
    }, 20000000);

}
function switchTreck (counter) {
    // Change the src attribute value
    audio.src = songs[counter];
    // Assign a song time of zero
    audio. currentTime = 0;
    // Play the song
    audio.play();
}
function nextQuestion() {
    

    if (counter == 1) {
        switchTreck(counter);
        //let imageTemp = songs[counter];
        //audio.source = imageTemp;
        check = 0;
        option1.innerHTML = "JUBIN NAUTIYAL";
        option2.innerHTML = "ARIJIT SINGH";
        option3.innerHTML = "KUMAR SANU";
        option4.innerHTML = "ATIF ASLAM";
        option1.disabled = false;
        option2.disabled = false;
        option3.disabled = false;
        option4.disabled = false;

        changeColor();
    }
    if (counter == 2) {
        switchTreck(counter);
        check = 0;
        option1.innerHTML = "RAHUL MISHRA";
        option2.innerHTML = "SHANKAR MAHADEVAN";
        option3.innerHTML = "SONU NIGAM";
        option4.innerHTML = "ATIF ASLAM";
        option1.disabled = false;
        option2.disabled = false;
        option3.disabled = false;
        option4.disabled = false;
        changeColor();
    }
    if (counter == 3) {
        switchTreck(counter);
        check = 0;
        option1.innerHTML = "K K";
        option2.innerHTML = "SHANKAR MAHADEVAN";
        option3.innerHTML = "JUBIN NAUTIYAL";
        option4.innerHTML = "MOHIT CHAUHAN";
        option1.disabled = false;
        option2.disabled = false;
        option3.disabled = false;
        option4.disabled = false;
        changeColor();
    }
    if (counter == 4) {
        switchTreck(counter);
        check = 0;
        option1.innerHTML = "K K";
        option2.innerHTML = "AR RAHMAN";
        option3.innerHTML = "JUBIN NAUTIYAL";
        option4.innerHTML = "UDIT NARAYAN";
        option1.disabled = false;
        option2.disabled = false;
        option3.disabled = false;
        option4.disabled = false;
        changeColor();
    }
    if (counter == 5) {
        switchTreck(counter);
        check = 0;
        option1.innerHTML = "JUBIN NAUTIYAL";
        option2.innerHTML = "SONU NIGAM";
        option3.innerHTML = "MOHIT CHAUHAN";
        option4.innerHTML = "UDIT NARAYAN";
        option1.disabled = false;
        option2.disabled = false;
        option3.disabled = false;
        option4.disabled = false;
        changeColor();
    }
    if (counter == 6) {
        switchTreck(counter);
        check = 0;
        option1.innerHTML = "NEHA KAKKAR";
        option2.innerHTML = "SUNIDHI CHAUHAN";
        option3.innerHTML = "SHREYA GHOSHAL";
        option4.innerHTML = "ASHA BHONSLE";
        option1.disabled = false;
        option2.disabled = false;
        option3.disabled = false;
        option4.disabled = false;
        changeColor();
    }
    if (counter == 7) {
        switchTreck(counter);
        check = 0;
        option1.innerHTML = "NEHA KAKKAR";
        option2.innerHTML = "ALKA YAGNIK";
        option3.innerHTML = "KANIKA KAPOOR";
        option4.innerHTML = "SHREYA GHOSHAL";
        option1.disabled = false;
        option2.disabled = false;
        option3.disabled = false;
        option4.disabled = false;
        changeColor();
    }
    if (counter == 8) {
        switchTreck(counter);
        check = 0;
        option1.innerHTML = "MONALI THAKUR";
        option2.innerHTML = "ALKA YAGNIK";
        option3.innerHTML = "SUNIDHI CHAUHAN";
        option4.innerHTML = "SHREYA GHOSHAL";
        option1.disabled = false;
        option2.disabled = false;
        option3.disabled = false;
        option4.disabled = false;
        changeColor();
    }
    if (counter == 9) {
        switchTreck(counter);
        check = 0;
        option1.innerHTML = "ARMAAN MALIK";
        option2.innerHTML = "SONU NIGAM";
        option3.innerHTML = "ATIF ASLAM";
        option4.innerHTML = "SHAAN";
        option1.disabled = false;
        option2.disabled = false;
        option3.disabled = false;
        option4.disabled = false;
        changeColor();
    }
}

/*btnPlay.addEventListener("click", function() {
    audio.play(); // Start the song
    // Start interval 
    audioPlay = setInterval(function() {
        // Get the value of what second the song is at
        let audioTime = Math.round(audio.currentTime);
        // We get songs all the time
        let audioLength = Math.round(audio.duration)
        // Assign a width to an element at time
        time.style.width = (audioTime * 100) / audioLength + '%';
        // Compare what second the track is now and how long in total
        // And check that the treck variable is less than four
        if (audioTime == audioLength && counter < 3) {
            counter++; // then Increase the variable 
            switchTreck(counter); // change track
        // Otherwise we check the same, but the treck variable is greater than or equal to four
        } else if (audioTime == audioLength && counter >= 3) {
            counter = 0; // then we assign treck to zero
            switchTreck(counter); //Change track
        }
    }, 10)
});

/*btnPrev.addEventListener("click", function() {
    // Check that the treck variable is greater than zero
    if (counter > 0) {
        counter--; // If true, reduce the variable by one
        switchTreck(counter); // Change the song.
    } else { // Otherwise
        counter = 3; // Assign three
        switchTreck(counter); // Change the song
    }
});

btnNext.addEventListener("click", function() {
    // Check that the treck variable is greater than three
    if (counter < 3) { // If so
        counter++; // increase it by one
        switchTreck(counter); // Change the song 
    } else { // Otherwise
        counter = 0; // Assign a zero to it
        switchTreck(counter); // Change the song
    }
});<button class="next">next&#62;</button>*/

/*--------------------------------Punjabi Section---------------------------------*/

function punjabi() {
    let options = document.getElementById("options_punjabi");
    options.style.display = "block";
    if(!audio.paused) audio.pause();
    if(!audioE.paused) audioE.pause();
    counter=0;
    switchTreckPunjabi(counter);
    let hints2 = document.getElementById("audiopun");
    hints2.style.display = "none";
    /*let options2 = document.getElementById("options_english")
    options2.style.display = "none";
    let hints = document.getElementById("hints_punjabi")
    hints.style.display = "block";*/
    
    document.getElementById("next_button_punjabi").style.display = "block";
    counter = 0;
    score = 0;
    tot = 0;
    scoreText.innerHTML='Score: 0/0';
}

function startAgainPunjabi() {
    location.reload();
}

function checkAnswerPunjabi() {

    if (counter == 0) {
        option1Punjabi.style.backgroundColor = "green";
        option1Punjabi.style.color = "white";
        option2Punjabi.style.backgroundColor = "red";
        option2Punjabi.style.color = "white";
        option3Punjabi.style.backgroundColor = "red";
        option3Punjabi.style.color = "white";
        option4Punjabi.style.backgroundColor = "red";
        option4Punjabi.style.color = "white";
        option1Punjabi.disabled = true;
        option2Punjabi.disabled = true;
        option3Punjabi.disabled = true;
        option4Punjabi.disabled = true;
        counter += 1;
    } else if (counter == 1) {
        option1Punjabi.style.backgroundColor = "green";
        option1Punjabi.style.color = "white";
        option2Punjabi.style.backgroundColor = "red";
        option2Punjabi.style.color = "white";
        option3Punjabi.style.backgroundColor = "red";
        option3Punjabi.style.color = "white";
        option4Punjabi.style.backgroundColor = "red";
        option4Punjabi.style.color = "white";
        option1Punjabi.disabled = true;
        option2Punjabi.disabled = true;
        option3Punjabi.disabled = true;
        option4Punjabi.disabled = true;

        counter += 1;
    } else if (counter == 2) {
        option1Punjabi.style.backgroundColor = "red";
        option1Punjabi.style.color = "white";
        option2Punjabi.style.backgroundColor = "red";
        option2Punjabi.style.color = "white";
        option3Punjabi.style.backgroundColor = "green";
        option3Punjabi.style.color = "white";
        option4Punjabi.style.backgroundColor = "red";
        option4Punjabi.style.color = "white";
        option1Punjabi.disabled = true;
        option2Punjabi.disabled = true;
        option3Punjabi.disabled = true;
        option4Punjabi.disabled = true;

        counter += 1;
    } else if (counter == 3) {
        option1Punjabi.style.backgroundColor = "green";
        option1Punjabi.style.color = "white";
        option2Punjabi.style.backgroundColor = "red";
        option2Punjabi.style.color = "white";
        option3Punjabi.style.backgroundColor = "red";
        option3Punjabi.style.color = "white";
        option4Punjabi.style.backgroundColor = "red";
        option4Punjabi.style.color = "white";
        option1Punjabi.disabled = true;
        option2Punjabi.disabled = true;
        option3Punjabi.disabled = true;
        option4Punjabi.disabled = true;

        counter += 1;
    } else if (counter == 4) {
        option1Punjabi.style.backgroundColor = "red";
        option1Punjabi.style.color = "white";
        option2Punjabi.style.backgroundColor = "green";
        option2Punjabi.style.color = "white";
        option3Punjabi.style.backgroundColor = "red";
        option3Punjabi.style.color = "white";
        option4Punjabi.style.backgroundColor = "red";
        option4Punjabi.style.color = "white";
        option1Punjabi.disabled = true;
        option2Punjabi.disabled = true;
        option3Punjabi.disabled = true;
        option4Punjabi.disabled = true;

        counter += 1;
    } else if (counter == 5) {
        option1Punjabi.style.backgroundColor = "red";
        option1Punjabi.style.color = "white";
        option2Punjabi.style.backgroundColor = "red";
        option2Punjabi.style.color = "white";
        option3Punjabi.style.backgroundColor = "green";
        option3Punjabi.style.color = "white";
        option4Punjabi.style.backgroundColor = "red";
        option4Punjabi.style.color = "white";
        option1Punjabi.disabled = true;
        option2Punjabi.disabled = true;
        option3Punjabi.disabled = true;
        option4Punjabi.disabled = true;

        counter += 1;
    } else if (counter == 6) {
        option1Punjabi.style.backgroundColor = "green";
        option1Punjabi.style.color = "white";
        option2Punjabi.style.backgroundColor = "red";
        option2Punjabi.style.color = "white";
        option3Punjabi.style.backgroundColor = "red";
        option3Punjabi.style.color = "white";
        option4Punjabi.style.backgroundColor = "red";
        option4Punjabi.style.color = "white";
        option1Punjabi.disabled = true;
        option2Punjabi.disabled = true;
        option3Punjabi.disabled = true;
        option4Punjabi.disabled = true;

        counter += 1;
    } else if (counter == 7) {
        option1Punjabi.style.backgroundColor = "red";
        option1Punjabi.style.color = "white";
        option2Punjabi.style.backgroundColor = "green";
        option2Punjabi.style.color = "white";
        option3Punjabi.style.backgroundColor = "red";
        option3Punjabi.style.color = "white";
        option4Punjabi.style.backgroundColor = "red";
        option4Punjabi.style.color = "white";
        option1Punjabi.disabled = true;
        option2Punjabi.disabled = true;
        option3Punjabi.disabled = true;
        option4Punjabi.disabled = true;

        counter += 1;
    } else if (counter == 8) {
        option1Punjabi.style.backgroundColor = "red";
        option1Punjabi.style.color = "white";
        option2Punjabi.style.backgroundColor = "red";
        option2Punjabi.style.color = "white";
        option3Punjabi.style.backgroundColor = "red";
        option3Punjabi.style.color = "white";
        option4Punjabi.style.backgroundColor = "green";
        option4Punjabi.style.color = "white";
        option1Punjabi.disabled = true;
        option2Punjabi.disabled = true;
        option3Punjabi.disabled = true;
        option4Punjabi.disabled = true;

        counter += 1;
    } else if (counter == 9) {
        option1Punjabi.style.backgroundColor = "red";
        option1Punjabi.style.color = "white";
        option2Punjabi.style.backgroundColor = "green";
        option2Punjabi.style.color = "white";
        option3Punjabi.style.backgroundColor = "red";
        option3Punjabi.style.color = "white";
        option4Punjabi.style.backgroundColor = "red";
        option4Punjabi.style.color = "white";
        nextPunjabi.style.display = "none";
        option1Punjabi.disabled = true;
        option2Punjabi.disabled = true;
        option3Punjabi.disabled = true;
        option4Punjabi.disabled = true;
        counter += 1;
        document.getElementById("close_button_punjabi").style.display = "block";
    }
}


function changeColorPunjabi() {
    option1Punjabi.style.backgroundColor = "white";
    option1Punjabi.style.color = "black";
    option2Punjabi.style.backgroundColor = "white";
    option2Punjabi.style.color = "black";
    option3Punjabi.style.backgroundColor = "white";
    option3Punjabi.style.color = "black";
    option4Punjabi.style.backgroundColor = "white";
    option4Punjabi.style.color = "black";
    setTimeout(() => {
        checkAnswer();
    }, 20000000);

}
/*let singersPunjabi = new Array("ammy.png","diljit.png", "guru.png", "hardy.png", "jass.png", "kaka.png", "parmish.png", "praak.png", "sharry.png", "siddhu.png");
 */

function switchTreckPunjabi (counter) {
    // Change the src attribute value
    audioP.src = singersPunjabi[counter];
    // Assign a song time of zero
    audioP. currentTime = 0;
    // Play the song
    audioP.play();
}
function nextQuestionPunjabi() {

    if (counter == 1) {
        switchTreckPunjabi(counter);
        //let imageTemp = singersPunjabi[counter];
        //imagePunjabi.src = imageTemp;
        option1Punjabi.innerHTML = "DILJIT DOSANJH";
        option2Punjabi.innerHTML = "JASS MANAK";
        option3Punjabi.innerHTML = "GIPPY GREWAL";
        option4Punjabi.innerHTML = "HONEY SINGH";
        option1Punjabi.disabled = false;
        option2Punjabi.disabled = false;
        option3Punjabi.disabled = false;
        option4Punjabi.disabled = false;

        changeColorPunjabi();
    }
    if (counter == 2) {
        switchTreckPunjabi(counter);
        //let imageTemp = singersPunjabi[counter];
        //imagePunjabi.src = imageTemp;
        check = 0;
        option1Punjabi.innerHTML = "GARRY SANDHU";
        option2Punjabi.innerHTML = "HAPPY RAIKOTI";
        option3Punjabi.innerHTML = "GURU RANDHAWA";
        option4Punjabi.innerHTML = "SHARRY MAAN";
        option1Punjabi.disabled = false;
        option2Punjabi.disabled = false;
        option3Punjabi.disabled = false;
        option4Punjabi.disabled = false;

        changeColorPunjabi();
    }
    if (counter == 3) {
        switchTreckPunjabi(counter);
        //let imageTemp = singersPunjabi[counter];
        //imagePunjabi.src = imageTemp;
        check = 0;
        option1Punjabi.innerHTML = "HARDY SANDHU";
        option2Punjabi.innerHTML = "SIDDHU MOOSEWALA";
        option3Punjabi.innerHTML = "B PRAAK";
        option4Punjabi.innerHTML = "PARMISH VERMA";
        option1Punjabi.disabled = false;
        option2Punjabi.disabled = false;
        option3Punjabi.disabled = false;
        option4Punjabi.disabled = false;

        changeColorPunjabi();
    }
    if (counter == 4) {
        switchTreckPunjabi(counter);
        //let imageTemp = singersPunjabi[counter];
        //imagePunjabi.src = imageTemp;
        check = 0;
        option1Punjabi.innerHTML = "PARMISH VERMA";
        option2Punjabi.innerHTML = "JASS MANAK";
        option3Punjabi.innerHTML = "KAKA";
        option4Punjabi.innerHTML = "AMMY VIRK";
        option1Punjabi.disabled = false;
        option2Punjabi.disabled = false;
        option3Punjabi.disabled = false;
        option4Punjabi.disabled = false;

        changeColorPunjabi();
    }
    if (counter == 5) {
        switchTreckPunjabi(counter);
        //let imageTemp = singersPunjabi[counter];
        //imagePunjabi.src = imageTemp;
        check = 0;
        option1Punjabi.innerHTML = "DALER MEHANDI";
        option2Punjabi.innerHTML = "DILJIT DOSANJH";
        option3Punjabi.innerHTML = "KAKA";
        option4Punjabi.innerHTML = "GURU RANDHAWA";
        option1Punjabi.disabled = false;
        option2Punjabi.disabled = false;
        option3Punjabi.disabled = false;
        option4Punjabi.disabled = false;

        changeColorPunjabi();
    }
    if (counter == 6) {
        switchTreckPunjabi(counter);
        //let imageTemp = singersPunjabi[counter];
        //imagePunjabi.src = imageTemp;
        check = 0;
        option1Punjabi.innerHTML = "PARMISH VERMA";
        option2Punjabi.innerHTML = "GIPPY GREWAL";
        option3Punjabi.innerHTML = "BADSHAH";
        option4Punjabi.innerHTML = "AMRINDER GILL";
        option1Punjabi.disabled = false;
        option2Punjabi.disabled = false;
        option3Punjabi.disabled = false;
        option4Punjabi.disabled = false;

        changeColorPunjabi();
    }
    if (counter == 7) {
        switchTreckPunjabi(counter);
        //let imageTemp = singersPunjabi[counter];
        //imagePunjabi.src = imageTemp;
        check = 0;
        option1Punjabi.innerHTML = "SHARRY MAAN";
        option2Punjabi.innerHTML = "B PRAAK";
        option3Punjabi.innerHTML = "SATINDER SARTAJ";
        option4Punjabi.innerHTML = "HARDY SANDHU";
        option1Punjabi.disabled = false;
        option2Punjabi.disabled = false;
        option3Punjabi.disabled = false;
        option4Punjabi.disabled = false;

        changeColorPunjabi();
    }
    if (counter == 8) {
        switchTreckPunjabi(counter);
       // let imageTemp = singersPunjabi[counter];
        //imagePunjabi.src = imageTemp;
        check = 0;
        option1Punjabi.innerHTML = "GARRY SANDHU";
        option2Punjabi.innerHTML = "B PRAAK";
        option3Punjabi.innerHTML = "PARMISH VERMA";
        option4Punjabi.innerHTML = "SHARRY MAAN";
        option1Punjabi.disabled = false;
        option2Punjabi.disabled = false;
        option3Punjabi.disabled = false;
        option4Punjabi.disabled = false;

        changeColorPunjabi();
    }
    if (counter == 9) {
        switchTreckPunjabi(counter);
        //let imageTemp = singersPunjabi[counter];
        //imagePunjabi.src = imageTemp;
        check = 0;
        option1Punjabi.innerHTML = "KARAN AUJLA";
        option2Punjabi.innerHTML = "SIDDHU MOOSEWALA";
        option3Punjabi.innerHTML = "DILJIT DOSANJH";
        option4Punjabi.innerHTML = "AMMY VIRK";
        option1Punjabi.disabled = false;
        option2Punjabi.disabled = false;
        option3Punjabi.disabled = false;
        option4Punjabi.disabled = false;

        changeColorPunjabi();
    }
}

/*btnPlayP.addEventListener("click", function() {
    audioP.play(); // Start the song
    // Start interval 
    audioPlay = setInterval(function() {
        // Get the value of what second the song is at
        let audioTime = Math.round(audioP.currentTime);
        // We get songs all the time
        let audioLength = Math.round(audioP.duration)
        // Assign a width to an element at time
        timeP.style.width = (audioTime * 100) / audioLength + '%';
        // Compare what second the track is now and how long in total
        // And check that the treck variable is less than four
        if (audioTime == audioLength && counter < 3) {
            counter++; // then Increase the variable 
            switchTreck(counter); // change track
        // Otherwise we check the same, but the treck variable is greater than or equal to four
        } else if (audioTime == audioLength && counter >= 3) {
            counter = 0; // then we assign treck to zero
            switchTreck(counter); //Change track
        }
    }, 10)
});*/



/*--------------------------------------Hollywood Section----------------------------------------------*/


function hollywood() {



    if(!audio.paused) audio.pause();
    if(!audioP.paused) audioP.pause();
    //audioP.pause();
    counter=0;
    switchTreckEnglish(counter);
    let hints = document.getElementById("audioeng")
    hints.style.display = "block";
    let options = document.getElementById("options_english")
    options.style.display = "block";
    document.getElementById("next_button_english").style.display = "block";
    counter = 0;
    score = 0;
    tot = 0;
    scoreText.innerHTML='Score: 0/0';
}

function startAgainEnglish() {
    location.reload();
}

function checkAnswerEnglish() {

    if (counter == 0) {
        option1English.style.backgroundColor = "green";
        option1English.style.color = "white";
        option2English.style.backgroundColor = "red";
        option2English.style.color = "white";
        option3English.style.backgroundColor = "red";
        option3English.style.color = "white";
        option4English.style.backgroundColor = "red";
        option4English.style.color = "white";
        option1English.disabled = true;
        option2English.disabled = true;
        option3English.disabled = true;
        option4English.disabled = true;
        counter += 1;
    } else if (counter == 1) {
        option1English.style.backgroundColor = "red";
        option1English.style.color = "white";
        option2English.style.backgroundColor = "green";
        option2English.style.color = "white";
        option3English.style.backgroundColor = "red";
        option3English.style.color = "white";
        option4English.style.backgroundColor = "red";
        option4English.style.color = "white";
        option1English.disabled = true;
        option2English.disabled = true;
        option3English.disabled = true;
        option4English.disabled = true;

        counter += 1;
    } else if (counter == 2) {
        option1English.style.backgroundColor = "green";
        option1English.style.color = "white";
        option2English.style.backgroundColor = "red";
        option2English.style.color = "white";
        option3English.style.backgroundColor = "red";
        option3English.style.color = "white";
        option4English.style.backgroundColor = "red";
        option4English.style.color = "white";
        option1English.disabled = true;
        option2English.disabled = true;
        option3English.disabled = true;
        option4English.disabled = true;

        counter += 1;
    } else if (counter == 3) {
        option1English.style.backgroundColor = "red";
        option1English.style.color = "white";
        option2English.style.backgroundColor = "green";
        option2English.style.color = "white";
        option3English.style.backgroundColor = "red";
        option3English.style.color = "white";
        option4English.style.backgroundColor = "red";
        option4English.style.color = "white";
        option1English.disabled = true;
        option2English.disabled = true;
        option3English.disabled = true;
        option4English.disabled = true;

        counter += 1;
    } else if (counter == 4) {
        option1English.style.backgroundColor = "red";
        option1English.style.color = "white";
        option2English.style.backgroundColor = "red";
        option2English.style.color = "white";
        option3English.style.backgroundColor = "red";
        option3English.style.color = "white";
        option4English.style.backgroundColor = "green";
        option4English.style.color = "white";
        option1English.disabled = true;
        option2English.disabled = true;
        option3English.disabled = true;
        option4English.disabled = true;

        counter += 1;
    } else if (counter == 5) {
        option1English.style.backgroundColor = "red";
        option1English.style.color = "white";
        option2English.style.backgroundColor = "red";
        option2English.style.color = "white";
        option3English.style.backgroundColor = "red";
        option3English.style.color = "white";
        option4English.style.backgroundColor = "green";
        option4English.style.color = "white";
        option1English.disabled = true;
        option2English.disabled = true;
        option3English.disabled = true;
        option4English.disabled = true;

        counter += 1;
    } else if (counter == 6) {
        option1English.style.backgroundColor = "red";
        option1English.style.color = "white";
        option2English.style.backgroundColor = "red";
        option2English.style.color = "white";
        option3English.style.backgroundColor = "red";
        option3English.style.color = "white";
        option4English.style.backgroundColor = "green";
        option4English.style.color = "white";
        option1English.disabled = true;
        option2English.disabled = true;
        option3English.disabled = true;
        option4English.disabled = true;

        counter += 1;
    } else if (counter == 7) {
        option1English.style.backgroundColor = "green";
        option1English.style.color = "white";
        option2English.style.backgroundColor = "red";
        option2English.style.color = "white";
        option3English.style.backgroundColor = "red";
        option3English.style.color = "white";
        option4English.style.backgroundColor = "red";
        option4English.style.color = "white";
        option1English.disabled = true;
        option2English.disabled = true;
        option3English.disabled = true;
        option4English.disabled = true;

        counter += 1;
    } else if (counter == 8) {
        option1English.style.backgroundColor = "red";
        option1English.style.color = "white";
        option2English.style.backgroundColor = "red";
        option2English.style.color = "white";
        option3English.style.backgroundColor = "green";
        option3English.style.color = "white";
        option4English.style.backgroundColor = "red";
        option4English.style.color = "white";
        option1English.disabled = true;
        option2English.disabled = true;
        option3English.disabled = true;
        option4English.disabled = true;

        counter += 1;
    } else if (counter == 9) {
        option1English.style.backgroundColor = "red";
        option1English.style.color = "white";
        option2English.style.backgroundColor = "red";
        option2English.style.color = "white";
        option3English.style.backgroundColor = "red";
        option3English.style.color = "white";
        option4English.style.backgroundColor = "green";
        option4English.style.color = "white";
        nextEnglish.style.display = "none";
        option1English.disabled = true;
        option2English.disabled = true;
        option3English.disabled = true;
        option4English.disabled = true;
        counter += 1;
        document.getElementById("close_button_english").style.display = "block";
    }
}

function changeColorEnglish() {
    option1English.style.backgroundColor = "white";
    option1English.style.color = "black";
    option2English.style.backgroundColor = "white";
    option2English.style.color = "black";
    option3English.style.backgroundColor = "white";
    option3English.style.color = "black";
    option4English.style.backgroundColor = "white";
    option4English.style.color = "black";
    setTimeout(() => {
        checkAnswer();
    }, 20000000);

}
/*let singersEnglish = new Array("ed.png", "bruno.png", "justin.png", "eminem.png", "zyan.png", "selena.png", "ariana.png", "beyonce.png", "rihanna.png", "billie.png");
3 1 2 4*/

function switchTreckEnglish (numTreck) {
    // Change the src attribute value
    audioE.src = singersEnglish[counter];
    // Assign a song time of zero
    audioE. currentTime = 0;
    // Play the song
    audioE.play();
}
function nextQuestionEnglish() {

    if (counter == 1) {
        switchTreckEnglish(counter);
       // let imageTemp = singersEnglish[counter];
        //imageEnglish.src = imageTemp;
        option1English.innerHTML = "ED SHEERAN";
        option2English.innerHTML = "BRUNO MARS";
        option3English.innerHTML = "JUSTIN BIEBER";
        option4English.innerHTML = "EMINEM";
        option1English.disabled = false;
        option2English.disabled = false;
        option3English.disabled = false;
        option4English.disabled = false;

        changeColorEnglish();
    }
    if (counter == 2) {
        switchTreckEnglish(counter);
        //let imageTemp = singersEnglish[counter];
        //imageEnglish.src = imageTemp;
        check = 0;
        option1English.innerHTML = "JUSTIN BIEBER";
        option2English.innerHTML = "ZAYN ";
        option3English.innerHTML = "CHRIS BROWN";
        option4English.innerHTML = "DRAKE";
        option1English.disabled = false;
        option2English.disabled = false;
        option3English.disabled = false;
        option4English.disabled = false;

        changeColorEnglish();
    }
    if (counter == 3) {
        switchTreckEnglish(counter);
        //let imageTemp = singersEnglish[counter];
        //imageEnglish.src = imageTemp;
        check = 0;
        option1English.innerHTML = "JAY Z";
        option2English.innerHTML = "EMINEM";
        option3English.innerHTML = "JUSTIN BIEBER";
        option4English.innerHTML = "BRUNO MARS";
        option1English.disabled = false;
        option2English.disabled = false;
        option3English.disabled = false;
        option4English.disabled = false;

        changeColorEnglish();
    }
    if (counter == 4) {
        switchTreckEnglish(counter);
        //let imageTemp = singersEnglish[counter];
        // imageEnglish.src = imageTemp;
        check = 0;
        option1English.innerHTML = "EMINEM";
        option2English.innerHTML = "NICK JONAS";
        option3English.innerHTML = "BRUNO MARS";
        option4English.innerHTML = "ZAYN";
        option1English.disabled = false;
        option2English.disabled = false;
        option3English.disabled = false;
        option4English.disabled = false;

        changeColorEnglish();
    }
    if (counter == 5) {
        switchTreckEnglish(counter);
        //let imageTemp = singersEnglish[counter];
        //imageEnglish.src = imageTemp;
        check = 0;
        option1English.innerHTML = "RIHANNA";
        option2English.innerHTML = "KATY PERRY";
        option3English.innerHTML = "ARIANA GRANDE";
        option4English.innerHTML = "SELENA GOMEZ";
        option1English.disabled = false;
        option2English.disabled = false;
        option3English.disabled = false;
        option4English.disabled = false;

        changeColorEnglish();
    }
    if (counter == 6) {
        switchTreckEnglish(counter);
        //let imageTemp = singersEnglish[counter];
        //imageEnglish.src = imageTemp;
        check = 0;
        option1English.innerHTML = "BILLIE EILISH";
        option2English.innerHTML = "RIHANNA";
        option3English.innerHTML = "SELENA GOMEZ";
        option4English.innerHTML = "ARIANA GRANDE";
        option1English.disabled = false;
        option2English.disabled = false;
        option3English.disabled = false;
        option4English.disabled = false;

        changeColorEnglish();
    }
    if (counter == 7) {
        switchTreckEnglish(counter);
        //let imageTemp = singersEnglish[counter];
        //imageEnglish.src = imageTemp;
        check = 0;
        option1English.innerHTML = "BEYONCE";
        option2English.innerHTML = "NICKI MINAJ";
        option3English.innerHTML = "ARIANA GRANDE";
        option4English.innerHTML = "ADELE";
        option1English.disabled = false;
        option2English.disabled = false;
        option3English.disabled = false;
        option4English.disabled = false;

        changeColorEnglish();
    }
    if (counter == 8) {
        switchTreckEnglish(counter);
        //let imageTemp = singersEnglish[counter];
        //imageEnglish.src = imageTemp;
        check = 0;
        option1English.innerHTML = "BILLIE EILISH";
        option2English.innerHTML = "BEYONCE";
        option3English.innerHTML = "RIHANNA";
        option4English.innerHTML = "SELENA GOMEZ";
        option1English.disabled = false;
        option2English.disabled = false;
        option3English.disabled = false;
        option4English.disabled = false;

        changeColorEnglish();
    }
    if (counter == 9) {
        switchTreckEnglish(counter);
        //let imageTemp = singersEnglish[counter];
        //imageEnglish.src = imageTemp;
        check = 0;
        option1English.innerHTML = "BEYONCE";
        option2English.innerHTML = "ARIANA GRANDE";
        option3English.innerHTML = "KATY PERRY";
        option4English.innerHTML = "BILLIE EILISH";
        option1English.disabled = false;
        option2English.disabled = false;
        option3English.disabled = false;
        option4English.disabled = false;

        changeColorEnglish();
    }
}

/*btnPlayE.addEventListener("click", function() {
    audioE.play(); // Start the song
    // Start interval 
    audioPlay = setInterval(function() {
        // Get the value of what second the song is at
        let audioTime = Math.round(audioE.currentTime);
        // We get songs all the time
        let audioLength = Math.round(audioE.duration)
        // Assign a width to an element at time
        timeE.style.width = (audioTime * 100) / audioLength + '%';
        // Compare what second the track is now and how long in total
        // And check that the treck variable is less than four
        if (audioTime == audioLength && counter < 3) {
            counter++; // then Increase the variable 
            switchTreck(counter); // change track
        // Otherwise we check the same, but the treck variable is greater than or equal to four
        } else if (audioTime == audioLength && counter >= 3) {
            counter = 0; // then we assign treck to zero
            switchTreck(counter); //Change track
        }
    }, 10)
});*/

// Score Feature - updating the values

function updateScoreEnglish(e) {
    const ansKeyEng = [1,2,1,2,4,4,4,1,3,4]
    let option = 'option' + `${ansKeyEng[counter-1]}` + 'English';
    if(e.target.id == option){
        score += 1;
        tot += 1;
        scoreText.innerHTML = `Score: ${score}/${tot}`;
    }
    else{
        tot += 1;
        scoreText.innerHTML = `Score: ${score}/${tot}`;
    }
}
function updateScoreHindi(e) {
    const ansKeyEng = [1,2,4,3,1,3,1,2,4,2]
    let option = 'option' + `${ansKeyEng[counter-1]}`;
    console.log(e.target.id, option);
    if(e.target.id == option){
        score += 1;
        tot += 1;
        scoreText.innerHTML = `Score: ${score}/${tot}`;
    }
    else{
        tot += 1;
        scoreText.innerHTML = `Score: ${score}/${tot}`;
    }
}
function updateScorePunjabi(e) {
    const ansKeyEng = [1,1,3,1,2,3,1,2,4,2]
    let option = 'option' + `${ansKeyEng[counter-1]}` + 'Punjabi';
    if(e.target.id == option){
        score += 1;
        tot += 1;
        scoreText.innerHTML = `Score: ${score}/${tot}`;
    }
    else{
        tot += 1;
        scoreText.innerHTML = `Score: ${score}/${tot}`;
    }
}