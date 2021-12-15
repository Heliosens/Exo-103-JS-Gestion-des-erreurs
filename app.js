let result = document.getElementById('text');
try {
    result.innerHTML = "Tentative";
}
catch (e) {
    alert(`
    result : ${e.message}
    `);
}
