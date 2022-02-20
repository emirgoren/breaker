setInterval(() => {
    let subtitleFirstParent = document.getElementsByClassName("player-timedtext")[0];
    let subtitleSpans = subtitleFirstParent.children[0]?.children;
    if(subtitleSpans !== undefined) {
        let subtitle = '';
        for(let i = 0; i < subtitleSpans.length; i++) {
            subtitle += subtitleSpans[i].innerText;
            if(subtitle.length >= 45){
                console.log(subtitle);
            }
        }
    }
}, 1000);