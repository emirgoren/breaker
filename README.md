# breaker
Breaker for users to read long subtitles while watching Netflix.

# Usage


<pre>1 => Open the video from Netflix. Like `https://www.netflix.com/watch/70189007`.</pre>
<pre>2 => Enter the script to Chrome's console.</pre>

<pre>
let netflixStoppedOn = '';

let interval = setInterval(() => {
    breaker(this);
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
                    interval = setInterval(() => {
                        breaker(interval);
                    }, 1000);
                }, 1700);
            }
        }
    }
}
</pre>