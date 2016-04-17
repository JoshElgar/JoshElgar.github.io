function changeShortenedLink() {
    document.getElementById("shortenedLink").value = "www.goo.gl";
}

function navigateToLink() {
    var x = document.getElementById("shortenedLink").value;
    var y = "http://"
    var url = x.concat(y);
    window.location.href = "url";
}
