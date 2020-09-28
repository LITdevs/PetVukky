if (localStorage.getItem("vukkyName") === null) {
    document.location.href = "index.html"
}

var vukkyName = localStorage.getItem("vukkyName")

setTimeout(function() {
    document.getElementById('title').innerHTML = "Take care of " + vukkyName + "!"
}, 500);

setTimeout(function() {
    document.getElementById('vukky').src = "images/normal.png"
    document.getElementById('buttons').style.display = "block"
    document.getElementById('feelings').innerText = "It seems a bit more relaxed now. It likes its name, " + vukkyName + "."
}, 5000);

setTimeout(function() {
    document.getElementById('vukky').src = "images/happy.png"
    document.getElementById('feelings').innerText = "Your Vukky is very relaxed."
}, 10000);

function killVukky(reason) {
    document.getElementById('buttons').style.display = "none"
    document.getElementById('vukky').src = "images/sad.png"
    document.getElementById('feelings').innerText = "Oh no... Something's wrong..."
    setTimeout(function() {
        document.getElementById('vukky').src = "images/dead.png"
        document.getElementById('feelings').innerText = "It died!"
        setTimeout(function() {
            alert("Uh oh. It looks like " + vukkyName + " died.\nIt died because " + reason + ".")
            localStorage.removeItem("vukkyName")
            document.location.href = "index.html"
        }, 1000);
    }, 2000);
}