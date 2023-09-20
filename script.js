
function GotoAbout(){

    document
    .getElementById("about-me-1")
    .scrollIntoView({ behavior: "smooth" });
}

function GotoPerks(){
    document
    .getElementById("perks")
    .scrollIntoView({ behavior: "smooth" });
}
function GotoWork1(){
    document
    .getElementById("work1")
    .scrollIntoView({ behavior: "smooth" });
}

function GotoStart(){
    document
    .getElementById("start")
    .scrollIntoView({ behavior: "smooth" });
}
function GotoContact(){
    document
    .getElementById("contact-container")
    .scrollIntoView({ behavior: "smooth" });
}
function hideIframe(){
    document.getElementById("video-section").innerHTML = '';
    document.getElementById("video-section").style.cssText = 'width:0; height:0;';
}
function Show() {
    document.getElementById("video-section").style.cssText = 'width:1920px; height:1080px;';
    document.getElementById("video-section").innerHTML = '<iframe class="video" width="1920px" height="1080px" src="https://www.youtube.com/embed/Y1KF_movFAE" title="kam" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

}
function Send(){

}
function YTClick(){
    if(flag==0){
        Show();
        flag=1;
    }
    else{
        hideIframe();
        flag=0;
    }
}
var flag = 0;
const ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfzX3Ytkyr6ycRh_oOdV1Nu5LrUBSuQPDpjZV9ljKb_vUzhFg/viewform?usp=sf_link";
const NAME_ID = "entry.2005620554";
const MAIL_ID = "entry.1045781291";
const MESSAGE_ID = "entry.839337160";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const formData = new FormData();


