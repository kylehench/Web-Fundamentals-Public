mainProfile = document.querySelector("#main-profile");
var connectionCount = 418;
connectionCountElement = document.querySelector("#connection-count");

function editProfile() {
    mainProfile.innerText = "James Ko";
}

function removeProfile(element) {
    element.parentNode.parentNode.remove();
    connectionCount--;
    connectionCountElement.innerText = connectionCount;
}