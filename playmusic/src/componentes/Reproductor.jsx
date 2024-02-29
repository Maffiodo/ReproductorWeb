import React from 'react';

class Reproductor extends React.Component {
  componentDidMount() {
    const audio = document.getElementById("audio");
    const playPause = document.getElementById("play");

    playPause.addEventListener("click", () => {
      if (audio.paused || audio.ended) {
        playPause.querySelector(".pause-btn").classList.toggle("hide");
        playPause.querySelector(".play-btn").classList.toggle("hide");
        audio.play();
      } else {
        audio.pause();
        playPause.querySelector(".pause-btn").classList.toggle("hide");
        playPause.querySelector(".play-btn").classList.toggle("hide");
      }
    });
  }

  render() {
    return (
        <div class="containerRepro">
        <div class="player">
          <div class="player__controls">
            <h5 class="player__title">playing now</h5>
          </div>
          <div class="player__album">
            <img src="https://i.ibb.co/ZS3wRSh/cover.jpg" alt="Album Cover" class="player__img" loading="lazy" />
          </div>
     
          <h2 class="player__artist">Disclosure</h2>
          <h3 class="player__song">Latch</h3>
     
          <input type="range" value="20" min="0" class="player__level" id="range" />
          <div class="audio-duration">
            <div class="start">00:01</div>
            <div class="end">04:30</div>
          </div>
     
          <audio class="player__audio" controls id="audio">
            <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/Leo%20-%20Trying.mp3" type="audio/mpeg" />
          </audio>
     
          <div class="player__controls">
            <div class="player__btn player__btn--medium" id="backward">
              <i class="fas fa-backward"></i>
            </div>
     
            <div class="player__btn player__btn--medium blue play" id="play">
              <i class="fas fa-play play-btn"></i>
              <i class="fas fa-pause pause-btn hide"></i>
            </div>
     
            <div class="player__btn player__btn--medium" id="forward">
              <i class="fas fa-forward"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reproductor;
