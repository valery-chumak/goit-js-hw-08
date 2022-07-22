import Player from '@vimeo/player'
const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function(event) {
        console.log('played the video!');
        console.log(event.currentTarget);
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    player.on('timeupdate', function(event) {
        // localStorage.setItem("videoplayer-current-time", event.target.elements.);
        
    });
