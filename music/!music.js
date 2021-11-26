const musicContainer = document.getElementById('audio-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const author = document.getElementById('author');
const cover = document.getElementById('cover');

// Song titles


// Keep track of song
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex]);


// Update song details
function loadSong(song) {
  songIndex = songs.map(function (e) { return e.path; }).indexOf(song.path);
  // document.body.style.background = 'linear-gradient(to right top, ' + songs[songIndex].color + ')';
  title.innerText = song.title
  author.innerText = song.author
  audio.src = `../music/${song.path}.mp3`;
}
function loadSongAlt(song) {
  songIndex = songs.map(function (e) { return e.path; }).indexOf(song.path);
  // document.body.style.backgroundImage = 'linear-gradient(to right top, ' + songs[songIndex].color + ')';
  audio.src = `../music/${song.path}.mp3`;
}

function changeSliderContext() {

  const sliderTitle = document.getElementById('title');
  const sliderName = document.getElementById('author');
  // document.getElementsByClassName('audio-info')[0].style.animationName = "opacity";
  // document.getElementById('audio-container').style.animationName = "rotatePlay";
  if (sliderName.textContent.length > 35) {
    const textWrap = document.createElement("span");
    textWrap.className = "text-wrap";
    textWrap.innerHTML = sliderName.textContent + "   " + sliderName.textContent;
    sliderName.innerHTML = "";
    sliderName.append(textWrap);
  }
  if (sliderTitle.textContent.length >= 28) {
    const textWrap = document.createElement("span");
    textWrap.className = "text-wrap";
    textWrap.innerHTML = sliderTitle.textContent + "    " + sliderTitle.textContent;
    sliderTitle.innerHTML = "";
    sliderTitle.append(textWrap);
  }
}

class PlayerWidget {
  constructor(player) {
    // State
    this.current = 0
    this.next = 0
    this.currentImage = 0
    this.player = player
    this.isPaused = false
    this.interval = null
    this.prevBtn = this.player.querySelector('#prev')
    this.nextBtn = this.player.querySelector('#next')
    this.bindEvents()
  }

  bindEvents() {
    this.nextBtn.addEventListener('click', e => this.nextTrack(e));
    this.prevBtn.addEventListener('click', e => this.prevTrack(e));
    audio.addEventListener('ended', e => this.nextTrack(e));
    // window.addEventListener('keydown', e => e.code == 'ArrowRight' ? this.nextTrack(e) : console.log(e.code))
  }

  nextTrack(e) {
    this.tiltY('right').updateTrackName();

  }

  prevTrack(e) {
    this.tiltY('left').updateTrackName()
  }
  tiltY(side) {
    this.tl
      .set(this.player, {
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
        rotationY: 0
      })
      .to(this.player, .25, {
        rotationY: side === 'right' ? 10 : -10,
        ease: Sine.easeInOut,
        yoyo: true,
        repeat: 1
      }, 0)

    return this
  }

  tiltX() {
    this.tl
      .set(this.player, {
        transformPerspective: 1000,
        rotationX: 0,
        rotationY: 0
      })
      .to(this.player, .25, {
        rotationX: -4,
        ease: Sine.easeInOut,
        yoyo: true,
        repeat: 1
      })
  }

  updateTrackName() {
    this.tl
      .to('.audio-info h4', .3, {
        delay: .2,
        alpha: 0,
        scale: 0.8,
        ease: Back.easeIn,
        onComplete: timeline => {
          timeline.target[0].innerText = songs[songIndex].title
          changeSliderContext()

          this.tl.to(timeline.target[0], .25, {
            scale: 1,
            delay: .1,
            alpha: 1,
            ease: Back.easeInOut
          })
        },
        onCompleteParams: ['{self}']
      })
      .to('.audio-info h5', .20, {
        alpha: 0,
        onComplete: timeline => {
          timeline.target[0].innerText = songs[songIndex].author

          this.tl.to(timeline.target[0], .2, { alpha: 1 })
        },
        onCompleteParams: ['{self}']
      }, .5)
  }

  get tl() {
    return new TimelineLite()
  }
}
const widget = new PlayerWidget(document.querySelector('.audio-container'))

// Play song
function playSong() {
  changeSliderContext();
  musicContainer.classList.add('play');
  playBtn.classList.add('buttonPause');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  songs.forEach(song => {
    if (song.path != songs[songIndex].path) {
      // document.getElementById(song.path).style.color = "#fff";
      document.getElementById(song.path).classList.remove('gradient')
      document.getElementById(`${song.path}PlayButtonIcon`).classList.remove('fa-repeat');
      document.getElementById(`${song.path}PlayButtonIcon`).classList.add('fa-play');
      document.getElementById(`${song.path}PlayButtonIcon`).style.transition = "none"
      document.getElementById(`${song.path}PlayButtonIcon`).style.transform = "none"
    }
    if (song.path == songs[songIndex].path) {
      document.getElementById(`${song.path}PlayButton`).classList.add('play')
    }
  });
  // document.getElementById(songs[songIndex].path).style.color = "#7f78bd";
  document.getElementById(songs[songIndex].path).classList.add('gradient')
  document.getElementById(`${songs[songIndex].path}PlayButtonIcon`).classList.remove('fa-play');
  document.getElementById(`${songs[songIndex].path}PlayButtonIcon`).classList.add('fa-repeat');
  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.classList.remove('buttonPause');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
  document.getElementById(`${songs[songIndex].path}PlayButtonIcon`).classList.remove('fa-pause');
  document.getElementById(`${songs[songIndex].path}PlayButtonIcon`).classList.add('fa-play');

  audio.pause();
}

// Previous song
async function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  await loadSongAlt(songs[songIndex]);

  await playSong();
}

// Next song
async function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  await loadSongAlt(songs[songIndex]);

  await playSong();
}
async function nextSongAlt() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  await loadSong(songs[songIndex]);

  await playSong();
}

function repeat() {
  if (audio.loop) {
    document.getElementById('repeat').querySelector('i.fas').classList.remove('gradient')
    audio.loop = ""
  } else {
    document.getElementById('repeat').querySelector('i.fas').classList.add('gradient')
    audio.loop = "true"
  }
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration

  audio.currentTime = (clickX / width) * duration;
}

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// songs.forEach(song => {
//   document.getElementById(`${song}PlayButton`).addEventListener('click', () => {
//     const isPlaying = document.getElementById(`${song}PlayButton`).classList.contains('play');
//     loadSong(song)
//     console.log(isPlaying)
//     console.log('remove from ' + song)
//     if (isPlaying) {
//       document.getElementById(`${song}PlayButton`).classList.remove('play')
//       pauseSong()
//     } else {
//       document.getElementById(`${song}PlayButton`).classList.remove('play')
//       playSong();
//     }

//   })
// });

// Change song
// prevBtn.addEventListener('click', prevSong);
// nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

document.getElementsByClassName('audio-info')[0].addEventListener("animationend", () => document.getElementsByClassName('audio-info')[0].style.animationName = '');
document.getElementById('audio-container').addEventListener("animationend", () => document.getElementById('audio-container').style.animationName = '');

// Song ends
audio.addEventListener('ended', nextSong);