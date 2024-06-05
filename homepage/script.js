function showAlert() {
    var userInput = prompt("What's your name?");
    alert('Welcome, ' + userInput + '!');
}

window.addEventListener("load", function() {
    var b = document.getElementById('blink');
    setInterval(function() {
        b.style.display = (b.style.display == 'none' ? '' : 'none');
    }, 250);
}, false);

