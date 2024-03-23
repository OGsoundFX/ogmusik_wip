const button1 = document.querySelector(".button1")
const video = document.querySelector(".video")

// Testing Youtube API

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'Qjz3-YJLXgY', // Replace VIDEO_ID_HERE with the ID of the YouTube video you want to play
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
    player.loadVideoById("Qjz3-YJLXgY");
    // Call your function or perform any action you want here
    // For example, displaying a message, loading another video, etc.
}
}

button1.addEventListener("click", () => {
  // video.src = "https://player.vimeo.com/video/85976762?h=8fb536da11&color=ff0179&title=0&portrait=0&badge=0"
  // video.src = "https://www.youtube.com/embed/IUkuJu3Z91U?si=x5g8D_EbkN5H5aAy"
  // console.log(player.setOption(videoId));
  player.loadVideoById("bIvqCjz_850")
  // setTimeout(() => {
  //   var duration = player.getDuration();
  //   console.log(duration);
  //   setTimeout(() => {
  //     player.loadVideoById("Qjz3-YJLXgY")
  //   }, 5000)
  // }, 2000)
})