if (localStorage.getItem("vukkyName") === null) {
    document.location.href = "index.html"
}

var vukkyName = localStorage.getItem("vukkyName")
var starveMeter = 5

setTimeout(function() {
    document.getElementById('title').innerHTML = "Take care of " + vukkyName + "!"
}, 500);

setTimeout(function() {
    document.getElementById('vukky').src = "images/normal.png"
    document.getElementById('feelings').innerText = "It seems a bit more relaxed now. It likes its name, " + vukkyName + "."
}, 5000);

setTimeout(function() {
    document.getElementById('vukky').src = "images/happy.png"
    document.getElementById('buttons').style.display = "block"
    document.getElementById('feelings').innerText = "Your Vukky is very relaxed."
}, 8000);

setInterval(function() {
    starveMeter -= 1
    if(starveMeter < 1) {
        killVukky("of starvation")
    }
}, 15000);

function feedVukky() {
    starveMeter += 1
    if(starveMeter > 8) {
        throwUp()
        starveMeter -= 1
    }
}

function throwUp() {
    document.getElementById('buttons').style.display = "none"
    document.getElementById('vukky').src = "images/sad.png"
    document.getElementById('feelings').innerText = "Oh no... Something's wrong..."
    setTimeout(function() {
        document.getElementById('vukky').src = "images/spin.gif"
        document.getElementById('feelings').innerText = "Your Vukky is throwing up! Try to not feed it too much."
        setTimeout(function() {
            document.getElementById('buttons').style.display = "block"
            document.getElementById('vukky').src = "images/normal.png"
            document.getElementById('feelings').innerText = "Your Vukky didn't seem to like that."
        }, 3000);
    }, 2000);
}

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