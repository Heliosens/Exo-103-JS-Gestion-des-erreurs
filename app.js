let result = document.getElementById('text');

try {
    result.innerHTML = "Tentative";
}
catch (e) {
    alert(`${e.name} result n'existe pas`);
}

