document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById("input")
    document.getElementById('bouton').addEventListener('click', function () {
        if (input.innerHTML = "") {
            alert("remplissez les champs")
        } else {
            alert('Ca fonctionne');
        }
    })
})