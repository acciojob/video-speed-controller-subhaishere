const video = document.querySelector('.player__video');
const playButton = document.querySelector('.player__button.toggle');
const volumeSlider = document.querySelector('.player__slider[name="volume"]');
const playbackSpeedSlider = document.querySelector('.player__slider[name="playbackRate"]');
const progressFilled = document.querySelector('.progress__filled');
const skipButtons = document.querySelectorAll('.player__button[data-skip]');

// Function to toggle play/pause when the play button is clicked
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Function to update the play button appearance based on video playing status
function updatePlayButton() {
  const icon = video.paused ? '►' : '❚ ❚';
  playButton.textContent = icon;
}

// Function to update the volume of the video based on the volume slider value
function updateVolume() {
  video.volume = volumeSlider.value;
}

// Function to update the playback speed of the video based on the playback speed slider value
function updatePlaybackSpeed() {
  video.playbackRate = playbackSpeedSlider.value;
}

// Function to skip forward or backward in the video based on the data-skip value of the button
function skipVideo() {
  const skipValue = parseFloat(this.dataset.skip);
  video.currentTime += skipValue;
}

// Function to update the progress bar as the video plays
function updateProgressBar() {
  const progress = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${progress}%`;
}

// Event listener for play button
playButton.addEventListener('click', togglePlay);

// Event listener for video play/pause
video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);

// Event listener for volume slider
volumeSlider.addEventListener('input', updateVolume);

// Event listener for playback speed slider
playbackSpeedSlider.addEventListener('input', updatePlaybackSpeed);

// Event listeners for skip buttons
skipButtons.forEach(button => button.addEventListener('click', skipVideo));

// Event listener for updating progress bar