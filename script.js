let netflixStoppedOn = '';

let mainInterval = setInterval(() => {
    breaker(mainInterval);
}, 1000);

function breaker(interval){
    let subtitleFirstParent = document.getElementsByClassName("player-timedtext")[0];
    let subtitleSpans = subtitleFirstParent.children[0]?.children;
    if(subtitleSpans !== undefined) {
        let subtitle = '';
        for(let i = 0; i < subtitleSpans.length; i++) {
            subtitle += subtitleSpans[i].innerText;
            if(subtitle.length >= 45 && subtitle !== netflixStoppedOn){
                const video = document.getElementsByTagName("video")[0];
                video.pause();
                netflixStoppedOn = subtitle;

                clearInterval(interval);
                setTimeout(() => {
                    video.play();
                    mainInterval = setInterval(() => {
                        breaker(mainInterval);
                    }, 1000);
                }, 1700);
            }
        }
    }
}