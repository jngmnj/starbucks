// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
 new YT.Player('player', {
    videoId: 'cpCvg4gCrRU', //url에 ID값 있음
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'cpCvg4gCrRU' //반복재생할 유튜브 영상ID
    },
    events: {
      onReady: function(event){        
        //events부분에 ready가되면 음소거하겠다
        event.target.mute() //음소거
      }
    }
  });
}