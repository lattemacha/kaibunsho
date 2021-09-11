const generateBtn = document.getElementById('generateBtn');
const word1 = document.getElementById('word1');
const word2 = document.getElementById('word2');
const word3 = document.getElementById('word3');
const word4 = document.getElementById('word4');
const word5 = document.getElementById('word5');
const resultArea = document.getElementById('resultArea');
const tweetDivited = document.getElementById('tweet-area');
var lastindex = 0;
const getRandomvalue=function(){
    var index=Math.floor(Math.random() * 5)
    while(lastindex==index){
        index=Math.floor(Math.random() * 5)
    }
    lastindex=index;
    return index;
} 
function removeAllChildren(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}
generateBtn.onclick = function(){
    resultArea.innerText="";
    words = [word1,word2,word3,word4,word5]
    for(var i=0;i<20;i++){
        resultArea.innerText+=words[getRandomvalue()].value
    }

    removeAllChildren(tweetDivited);
    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
        +encodeURIComponent('怪文書ジェネレーター')
        +'&ref_src=twsrc%5Etfw';
    anchor.setAttribute('href',hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text',resultArea.innerText);
    anchor.innerText = 'Tweet #怪文書ジェネレーター';
    tweetDivited.appendChild(anchor);

    twttr.widgets.load();
}
