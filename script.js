
setInterval(() => {
    let subtitleFirstParent = document.getElementsByClassName("player-timedtext")[0];
    let subtitleSpans = subtitleFirstParent.children[0]?.children;
    if(subtitleSpans !== undefined) {
        for(let i = 0; i < subtitleSpans.length; i++) {
            console.log(subtitleSpans[i].innerText);
        }
    }
}, 1000);



// let playerTimedTextContainer = document.getElementsByClassName("player-timedtext-container");