import throttle from 'lodash.throttle';
import Player from '@vimeo/player'
const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function(event) {
        console.log('played the video!');
        console.log(event.currentTarget.value);
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    player.on('timeupdate', throttle(function(time) {
        localStorage.setItem("videoplayer-current-time", time.seconds);
    },1000));

    const savedTime = localStorage.getItem("videoplayer-current-time");
    if (savedTime) {
    player.setCurrentTime(savedTime);
    }