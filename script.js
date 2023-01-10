const music = document.querySelector('audio');
const img = document.querySelector('img');
const play = document.getElementById('play');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const songs = [
    {name: "besharam_rang", title: "besharam_rang", artist: "pathaan"},
    {name: "jhoome_Jo_Pathaan", title: "jhoome_Jo_Pathaan", artist: "KING"},
    {name: "Maan_Meri_Jaan", title: "Maan_Meri_Jaan", artist: "Usman Bhatti"},
    {name: "Mera_Dil_Ye_Pukare_Aaja", title: "Mera_Dil_Ye_Pukare_Aaja", artist: "Vishal-Shekhar"},
]

let isPlaying = false;
//for play function
const playMusic = ()=>{
    isPlaying = true
    music.play();
    play.classList.replace('fa-play', 'fa-paush');
    img.classList.add('anime');
};

//for pause function 
const pauseMusic = ()=>{
    isPlaying = false
    music.pause();
    play.classList.replace('fa-paush', 'fa-play');
    img.classList.remove('anime');
};

play.addEventListener('click', ()=>{
    // if(isPlaying){
    //     pauseMusic();
    // }else{
    //     playMusic();
    // }

    isPlaying ? pauseMusic() : playMusic()
});

// changing the music and information

const loadSong = (songs)=>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "./"+songs.name+".mp3";
    img.src = "./"+songs.name+".jpg";
};

songIndex = 0;
// loadSong(songs[0]);


const nextSong = ()=>{
    songIndex = (songIndex + 1)% songs.length; 
    loadSong(songs[songIndex]);
    playMusic();
}

const prevSong = ()=>{
    songIndex = (songIndex - 1 + songs.length) % songs.length; 
    loadSong(songs[songIndex]);
    playMusic();
}


next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);







