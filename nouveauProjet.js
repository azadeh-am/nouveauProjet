document.addEventListener('DOMContentLoaded', function () {
    let inputs = document.querySelectorAll("input")
    let button = document.getElementById('bouton')
    button.addEventListener('click', function () {
        for (let input of inputs)
            if (input.value == "") {
                alert("remplissez les champs");
            } else {
                alert("ça fonctionne");
            }
    });
});