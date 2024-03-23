const button1 = document.querySelector(".button1")
const video = document.querySelector(".video")
const initialVideo = document.getElementById("myVideo")
const playerElement = document.getElementById("player")

// Testing Youtube API

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: '', // Replace VIDEO_ID_HERE with the ID of the YouTube video you want to play
        playerVars: {
            'origin': window.location.origin,
            'autoplay': 1, // Change to 1 if you want the video to autoplay
            'controls': 1, // Change to 0 to hide player controls
            'showinfo': 0, // Change to 1 to show video title and uploader before video starts
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        },
        // Include your API key here
        // Replace YOUR_API_KEY_HERE with your actual API key
        apiKey: 'AIzaSyBscTHsAjtR6KhQXjqC6nYgLhAzbFODzRE'
    });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  // Perform actions when the player's state changes
  if (event.data == YT.PlayerState.ENDED) {
    // Video has finished playing, trigger your action here
    player.loadVideoById("bIvqCjz_850");
}
}

button1.addEventListener("click", () => {
  initialVideo.style.display = "none"
  setTimeout(() => {
    playerElement.classList.remove("d-none")
    // video.style.display = "block"
  }, 2000)
  // need to pass the video id to the loadVideoById method
  player.loadVideoById("Qjz3-YJLXgY")
})
