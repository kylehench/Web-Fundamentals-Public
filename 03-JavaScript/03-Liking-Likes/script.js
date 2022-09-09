var likeCount = [0,0,0];
var neilElement = document.querySelector("#neil .like-count");
var nicholeElement = document.querySelector("#nichole .like-count");
var jimElement = document.querySelector("#jim .like-count");
function likeNeil() {
    likeCount[0]++;
    neilElement.innerText = (likeCount[0] + " like(s)");
}
function likeNichole() {
    likeCount[1]++;
    nicholeElement.innerText = (likeCount[1] + " like(s)");
}
function likeJim() {
    likeCount[2]++;
    jimElement.innerText = (likeCount[2] + " like(s)");
}