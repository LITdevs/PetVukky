if (!localStorage.getItem("vukkyName") === null) {
    document.location.href = "vukky.html"
}

function createVukky() {
    var vukkyName = document.getElementById('name').value
    localStorage.setItem("vukkyName", vukkyName)
    document.location.href = "vukky.html"
}